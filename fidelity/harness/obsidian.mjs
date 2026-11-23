/**
 * Reference renderer: real Obsidian, driven over CDP with Playwright.
 *
 * Obsidian is downloaded and sandboxed by `obsidian-launcher` (pinned
 * version, own config dir, vault copy), so this runs identically on a
 * developer machine and in CI. On Linux run it under `e2e-headless` (flake)
 * so the window lives on a private Xvfb display.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import ObsidianLauncher from "obsidian-launcher";
import { chromium } from "playwright";
import { measureInPage, sideProbe } from "./probes.mjs";

export const OBSIDIAN_ROOT =
  ".workspace-leaf.mod-active .markdown-preview-view";

/**
 * Build a lean vault: the specimen notes and plugins of `sourceVault`, plus the
 * requested themes — the exact CSS the Quartz side converts.
 * @param {{name: string, css: string}[]} themes
 */
function leanVault(sourceVault, themes, styleSettings) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "qt-fidelity-vault-"));
  fs.cpSync(sourceVault, dir, {
    recursive: true,
    filter: (src) =>
      !src.includes(`${path.sep}.obsidian${path.sep}themes`) &&
      !src.endsWith(`${path.sep}workspace.json`),
  });
  const themesOut = path.join(dir, ".obsidian", "themes");
  fs.mkdirSync(themesOut, { recursive: true });
  for (const t of themes) {
    const dir = path.join(themesOut, t.name);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "theme.css"), t.css);
    fs.writeFileSync(
      path.join(dir, "manifest.json"),
      JSON.stringify({
        name: t.name,
        version: "0.0.0",
        minAppVersion: "1.0.0",
      }),
    );
  }
  // Reading view by default, no theme yet.
  fs.writeFileSync(
    path.join(dir, ".obsidian", "app.json"),
    JSON.stringify({ defaultViewMode: "preview", livePreview: true }),
  );
  fs.writeFileSync(
    path.join(dir, ".obsidian", "appearance.json"),
    JSON.stringify({ theme: "obsidian", cssTheme: "" }),
  );
  // Style Settings reads its export from data.json at load.
  const ss = path.join(dir, ".obsidian", "plugins", "obsidian-style-settings");
  if (fs.existsSync(ss))
    fs.writeFileSync(
      path.join(ss, "data.json"),
      JSON.stringify(styleSettings ?? {}),
    );
  return dir;
}

export async function startObsidian({
  repo,
  themes,
  styleSettings = {},
  appVersion = process.env.OBSIDIAN_VERSION ?? "latest",
  port = 9333 + Math.floor(Math.random() * 500),
}) {
  const launcher = new ObsidianLauncher({
    cacheDir: path.join(repo, ".obsidian-cache"),
  });
  const vault = leanVault(
    path.join(repo, "runner/vault"),
    themes,
    styleSettings,
  );
  const { proc, configDir } = await launcher.launch({
    appVersion,
    installerVersion: "latest",
    vault,
    copy: false,
    args: [
      `--remote-debugging-port=${port}`,
      "--window-size=1600,1200",
      // e.g. "--no-sandbox" on CI runners without Electron's SUID sandbox
      ...(process.env.OBSIDIAN_EXTRA_ARGS ?? "").split(/\s+/).filter(Boolean),
    ],
    spawnOptions: { stdio: "ignore" },
  });

  let browser;
  for (let i = 0; i < 120 && !browser; i++) {
    try {
      browser = await chromium.connectOverCDP(`http://127.0.0.1:${port}`);
    } catch {
      await new Promise((r) => setTimeout(r, 500));
    }
  }
  if (!browser) throw new Error("could not connect to Obsidian over CDP");

  let page;
  for (let i = 0; i < 120 && !page; i++) {
    page = browser
      .contexts()
      .flatMap((c) => c.pages())
      .find((p) => p.url().startsWith("app://"));
    if (!page) await new Promise((r) => setTimeout(r, 500));
  }
  if (!page) throw new Error("no Obsidian window found");
  await page.waitForFunction(() => window.app?.workspace?.layoutReady, null, {
    timeout: 120_000,
  });
  // Trust prompt / modals would steal the reading view.
  await page.evaluate(() =>
    document.querySelectorAll(".modal-close-button").forEach((b) => b.click()),
  );
  const version = await page.evaluate(
    () =>
      window.electron?.ipcRenderer?.sendSync?.("version") ??
      navigator.userAgent,
  );

  return {
    page,
    version,
    async stop() {
      await browser.close().catch(() => {});
      proc.kill("SIGKILL");
      // Best effort: a dying Obsidian may still be writing to its dirs. Never let
      // cleanup lose a run's results.
      await new Promise(
        (r) => proc.once("exit", r).once("error", r) && setTimeout(r, 5000),
      );
      for (const dir of [vault, configDir]) {
        try {
          fs.rmSync(dir, {
            recursive: true,
            force: true,
            maxRetries: 5,
            retryDelay: 200,
          });
        } catch (e) {
          console.error(
            `cleanup: could not remove ${dir}: ${e.code ?? e.message}`,
          );
        }
      }
    },
  };
}

/** Switch theme + mode. `theme` is the theme's folder name ("" = default). */
export async function setTheme(page, theme, mode) {
  const { since, same } = await page.evaluate(
    async ({ theme, mode }) => {
      const since = new Date().toISOString();
      const same = window.app.customCss.theme === theme;
      window.app.changeTheme(mode === "dark" ? "obsidian" : "moonstone");
      await window.app.customCss.setTheme(theme);
      return { since, same };
    },
    { theme, mode },
  );
  // Theme CSS is loaded asynchronously from disk; wait until the stylesheet
  // is in place and a couple of frames have been laid out.
  await page.waitForFunction(
    (theme) => window.app.customCss.theme === theme,
    theme,
  );
  await page.waitForTimeout(400);
  // Style Settings re-parses every stylesheet on `css-change` (debounced),
  // then applies its variables and body classes: measuring before that sees a
  // theme without its settings. Wait for a parse that started after the
  // switch, and for no further one to be pending. (A mode switch alone
  // doesn't re-parse: both modes' settings are already applied.)
  if (!same)
    await page
      .waitForFunction(
        (since) => {
          const p = window.app.plugins.plugins["obsidian-style-settings"];
          if (!p) return true;
          const at = p.normalizedSchema?.generatedAt;
          if (!at || at < since) return false;
          if (window.__ssSeen !== at) {
            window.__ssSeen = at;
            window.__ssSeenAt = performance.now();
            return false;
          }
          return performance.now() - window.__ssSeenAt > 300;
        },
        since,
        { timeout: 15_000, polling: 50 },
      )
      .catch(() => {});
  await page.evaluate(
    () =>
      new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))),
  );
}

export async function openNote(page, note) {
  await page.evaluate(async (file) => {
    const f = window.app.vault.getAbstractFileByPath(file);
    if (!f) throw new Error(`note not found: ${file}`);
    const leaf = window.app.workspace.getLeaf(false);
    await leaf.openFile(f, { state: { mode: "preview" }, active: true });
    window.app.workspace.setActiveLeaf(leaf, { focus: true });
  }, `${note}.md`);
  await page.waitForSelector(
    `${OBSIDIAN_ROOT} .markdown-preview-section > div`,
    { timeout: 30_000, state: "attached" },
  );
  // Reading view is virtualized: only sections near the viewport are in the
  // DOM. Widen the render-ahead window so every section renders, like Quartz.
  await page.evaluate(() => {
    const r = window.app.workspace.activeLeaf.view.previewMode.renderer;
    r.renderExtraMinPx = 1e7;
    r.renderExtra = 1e7;
    r.updateShownSections?.();
    r.queueRender?.();
  });
  await page.waitForFunction(
    () => {
      const r = window.app.workspace.activeLeaf.view.previewMode.renderer;
      return r.sections.length > 0 && r.sections.every((s) => s.rendered);
    },
    null,
    { timeout: 30_000 },
  );
  await page.waitForTimeout(250);
}

export async function measureObsidian(page, probes) {
  return page.evaluate(measureInPage, {
    root: OBSIDIAN_ROOT,
    probes: probes.map((p) => sideProbe(p, "obsidian")),
  });
}
