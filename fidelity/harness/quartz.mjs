/**
 * Candidate renderer: a built Quartz site with each theme's converted CSS put
 * in, without rebuilding per theme. If the site was built with
 * @quartz-themes/core, its theme resources are replaced; otherwise (a plain
 * Quartz build, as in CI) the CSS is injected into every page's <head>.
 */
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { chromium } from "playwright";
import { measureInPage } from "./probes.mjs";

export const QUARTZ_ROOT = ".markdown-preview-view";

const TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};

export async function startQuartz({ site }) {
  const read = (f) => (fs.existsSync(f) ? fs.readFileSync(f, "utf8") : "");
  // Resources emitted by the old quartz-themes plugin; these get replaced.
  const head = (f) => read(path.join(site, "static", f)).slice(0, 200);
  // Theme resources emitted by @quartz-themes/core (v2: obsidian-theme layers, v3: obsidian layer).
  const oldThemeCss = fs
    .readdirSync(path.join(site, "static"))
    .filter((f) => /^resource-style-.*\.css$/.test(f))
    .filter((f) =>
      /obsidian-theme|quartz-themes-base|@layer quartz-base;?\s*@layer obsidian|@layer obsidian\s*\{/.test(
        head(f),
      ),
    )
    // The sheet declaring the layer order is linked first; it gets the main CSS.
    .sort(
      (a, b) =>
        Number(/@layer quartz-base/.test(head(b))) -
        Number(/@layer quartz-base/.test(head(a))),
    );

  const server = http.createServer((req, res) => {
    let f = path.join(
      site,
      decodeURIComponent(new URL(req.url, "http://x").pathname),
    );
    if (fs.existsSync(f) && fs.statSync(f).isDirectory())
      f = path.join(f, "index.html");
    if (!fs.existsSync(f) && fs.existsSync(f + ".html")) f += ".html";
    if (!fs.existsSync(f)) return res.writeHead(404).end();
    res.writeHead(200, {
      "content-type": TYPES[path.extname(f)] ?? "application/octet-stream",
    });
    fs.createReadStream(f).pipe(res);
  });
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const origin = `http://127.0.0.1:${server.address().port}`;

  const executablePath =
    process.env.CHROMIUM_PATH ||
    [
      `/etc/profiles/per-user/${process.env.USER ?? ""}/bin/chromium`,
      "/run/current-system/sw/bin/chromium",
      "/usr/bin/chromium",
    ].find((p) => fs.existsSync(p));
  const browser = await chromium.launch(
    executablePath ? { executablePath } : {},
  );

  return {
    origin,
    /**
     * @param {{main: string, raw: string}} css composed stylesheet
     * @param {"dark"|"light"} mode
     */
    async newPage(css, mode) {
      const ctx = await browser.newContext({
        viewport: { width: 1600, height: 1200 },
        colorScheme: mode,
        deviceScaleFactor: 1,
      });
      await ctx.addInitScript((m) => localStorage.setItem("theme", m), mode);
      await ctx.route(/\/__quartz-themes\/(main|raw)\.css$/, (route) =>
        route.fulfill({
          contentType: "text/css",
          body: route.request().url().endsWith("main.css")
            ? css.main
            : (css.raw ?? ""),
        }),
      );
      if (!oldThemeCss.length) {
        // Plain Quartz build: inject the stylesheets after Quartz's own.
        await ctx.route(
          (url) =>
            url.origin === origin &&
            !/\.[a-z0-9]+$/i.test(url.pathname.replace(/\.html$/, "")),
          async (route) => {
            if (route.request().resourceType() !== "document")
              return route.continue();
            const res = await route.fetch();
            const html = (await res.text()).replace(
              "</head>",
              `<link rel="stylesheet" href="/__quartz-themes/main.css"><link rel="stylesheet" href="/__quartz-themes/raw.css"></head>`,
            );
            return route.fulfill({
              response: res,
              body: html,
              headers: { ...res.headers(), "content-type": "text/html" },
            });
          },
        );
      }
      await ctx.route(/static\/resource-style-[^/]+\.css$/, (route) => {
        const name = path.basename(new URL(route.request().url()).pathname);
        const idx = oldThemeCss.indexOf(name);
        // Plain build: model a site with @quartz-themes/core installed. Quartz's fonts
        // then emit no heading-font override and leave Obsidian's font variables to
        // the theme (they only do otherwise when no theme registered its fonts).
        if (!oldThemeCss.length) {
          const content = read(path.join(site, "static", name));
          if (
            /^\s*h1[\s,{]/.test(content) &&
            /font-family/.test(content) &&
            !/@layer/.test(content)
          ) {
            return route.fulfill({ contentType: "text/css", body: "" });
          }
          if (/^\s*@layer quartz-fonts/.test(content)) {
            const body = content.replace(
              /--(font-text|font-interface|font-monospace|h[1-6]-font):[^;}]*;?/g,
              "",
            );
            return route.fulfill({ contentType: "text/css", body });
          }
        }
        if (idx === -1) return route.continue();
        // With a single theme resource, append the quarantine sheet (unminified here anyway).
        const body =
          idx === 0
            ? oldThemeCss.length === 1
              ? `${css.main}\n${css.raw ?? ""}`
              : css.main
            : css.raw;
        return route.fulfill({ contentType: "text/css", body });
      });
      const page = await ctx.newPage();
      return {
        page,
        async open(note) {
          await page.goto(`${origin}/${note === "index" ? "" : note}`, {
            waitUntil: "networkidle",
          });
          await page.evaluate(() => document.fonts.ready);
        },
        measure: (probes) =>
          page.evaluate(measureInPage, {
            root: QUARTZ_ROOT,
            probes: probes.map((p) => ({
              id: p.id,
              sel: p.quartz ?? p.obsidian,
              props: p.props,
            })),
          }),
        close: () => ctx.close(),
      };
    },
    async stop() {
      await browser.close();
      server.close();
    },
  };
}
