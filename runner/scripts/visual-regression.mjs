#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { pathToFileURL } from "url";
import { chromium } from "playwright";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

const BASELINES_DIR = resolve(".visual-baselines");
const OUTPUT_DIR = resolve(".quartz-output");
const REFERENCE_THEMES_PATH = resolve("./runner/scripts/reference-themes.json");
const DEFAULT_THRESHOLD = 0.02;
const DEFAULT_VIEWPORT = "1280x800";
const PAGES = [
  { id: "index", path: "index.html" },
  { id: "specimen", path: "specimen/index.html" },
];

function parseArgs(argv) {
  const args = argv.slice(2);
  const themeIndex = args.indexOf("--theme");
  const theme = themeIndex !== -1 ? args[themeIndex + 1] : null;
  const captureBaselines = args.includes("--capture-baselines");
  const compare = args.includes("--compare");
  const updateBaseline = args.includes("--update-baseline");
  const allReference = args.includes("--all-reference");
  const thresholdIndex = args.indexOf("--threshold");
  const thresholdRaw = thresholdIndex !== -1 ? args[thresholdIndex + 1] : null;
  const viewportIndex = args.indexOf("--viewport");
  const viewportRaw = viewportIndex !== -1 ? args[viewportIndex + 1] : null;
  return {
    theme,
    captureBaselines,
    compare,
    updateBaseline,
    allReference,
    thresholdRaw,
    viewportRaw,
  };
}

function usageAndExit(message) {
  if (message) console.error(message);
  console.error(
    'Usage: node runner/scripts/visual-regression.mjs --capture-baselines | --compare --theme "name" | --compare --all-reference | --update-baseline --theme "name"',
  );
  process.exit(3);
}

function parseViewport(value) {
  if (!value) return null;
  const match = String(value).match(/^(\d+)x(\d+)$/i);
  if (!match) return null;
  const width = Number(match[1]);
  const height = Number(match[2]);
  if (
    !Number.isFinite(width) ||
    !Number.isFinite(height) ||
    width <= 0 ||
    height <= 0
  ) {
    return null;
  }
  return { width, height, label: `${width}x${height}` };
}

function loadReferenceThemes() {
  const raw = readFileSync(REFERENCE_THEMES_PATH, "utf-8");
  const data = JSON.parse(raw);
  return Array.isArray(data.themes) ? data.themes : [];
}

function resolveThemeList(
  { theme, allReference, captureBaselines, updateBaseline },
  referenceThemes,
) {
  if (theme) {
    const entry = referenceThemes.find((item) => item.id === theme);
    const modes = entry?.modes ?? ["dark", "light"];
    return [{ id: theme, modes }];
  }
  if (allReference || captureBaselines || updateBaseline) {
    return referenceThemes.map((item) => ({ id: item.id, modes: item.modes }));
  }
  return [];
}

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

function buildReport({ threshold, viewport }) {
  return {
    timestamp: new Date().toISOString(),
    threshold,
    viewport,
    results: [],
    summary: { total: 0, passed: 0, failed: 0, skipped: 0 },
  };
}

function appendResult(report, result) {
  report.results.push(result);
  report.summary.total += 1;
  if (result.skipped) {
    report.summary.skipped += 1;
  } else if (result.passed) {
    report.summary.passed += 1;
  } else {
    report.summary.failed += 1;
  }
}

async function applyThemeMode(page, mode) {
  await page.evaluate((selectedMode) => {
    document.documentElement.setAttribute("saved-theme", selectedMode);
    localStorage.setItem("saved-theme", selectedMode);
  }, mode);
  await page.waitForTimeout(500);
}

function formatDuration(ms) {
  return `${(ms / 1000).toFixed(1)}s`;
}

function formatPercent(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function pngFromPath(filePath) {
  const buffer = readFileSync(filePath);
  return PNG.sync.read(buffer);
}

async function captureScreenshot({ page, url, mode, viewport, outputPath }) {
  await page.goto(url, { waitUntil: "networkidle" });
  await applyThemeMode(page, mode);
  await page.setViewportSize({
    width: viewport.width,
    height: viewport.height,
  });
  await page.screenshot({ path: outputPath, fullPage: true });
}

async function run() {
  const args = parseArgs(process.argv);
  const actions = [
    args.captureBaselines,
    args.compare,
    args.updateBaseline,
  ].filter(Boolean);
  if (actions.length !== 1) usageAndExit("Specify exactly one action flag.");
  if (args.compare && !args.theme && !args.allReference) {
    usageAndExit("Compare requires --theme or --all-reference.");
  }
  if (
    (args.captureBaselines || args.updateBaseline) &&
    args.allReference &&
    args.theme
  ) {
    usageAndExit("Use either --theme or --all-reference, not both.");
  }
  if (args.theme && args.theme.startsWith("--")) {
    usageAndExit("Invalid theme name.");
  }

  const threshold = args.thresholdRaw
    ? Number(args.thresholdRaw)
    : DEFAULT_THRESHOLD;
  if (!Number.isFinite(threshold) || threshold < 0) {
    usageAndExit("Invalid threshold.");
  }

  const viewport = parseViewport(args.viewportRaw ?? DEFAULT_VIEWPORT);
  if (!viewport)
    usageAndExit("Invalid viewport format. Use WxH, e.g. 1280x800.");

  const referenceThemes = loadReferenceThemes();
  const themesToRun = resolveThemeList(args, referenceThemes);
  if (themesToRun.length === 0) usageAndExit("No themes selected.");

  let browser;
  try {
    browser = await chromium.launch();
  } catch (error) {
    console.error("Failed to launch Playwright Chromium:", error.message);
    process.exit(1);
  }

  const report = buildReport({ threshold, viewport: viewport.label });
  let hasMissingBaseline = false;
  let hasFailures = false;

  try {
    for (const theme of themesToRun) {
      const themeOutputDir = resolve(OUTPUT_DIR, theme.id);
      if (!existsSync(themeOutputDir)) {
        console.warn(`[skip] ${theme.id} output missing at ${themeOutputDir}`);
        for (const mode of theme.modes) {
          for (const pageInfo of PAGES) {
            appendResult(report, {
              theme: theme.id,
              mode,
              page: pageInfo.id,
              diffPercent: null,
              passed: false,
              baselinePath: null,
              screenshotPath: null,
              skipped: true,
              reason: "output missing",
            });
          }
        }
        continue;
      }

      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });

      for (const mode of theme.modes) {
        for (const pageInfo of PAGES) {
          const page = await context.newPage();
          const filePath = resolve(themeOutputDir, pageInfo.path);
          const fileUrl = pathToFileURL(filePath).href;
          const baselineDir = resolve(BASELINES_DIR, theme.id);
          ensureDir(baselineDir);
          const baselinePath = resolve(
            baselineDir,
            `${pageInfo.id}-${mode}.png`,
          );
          const screenshotPath = resolve(
            baselineDir,
            `${pageInfo.id}-${mode}${args.compare ? "-new" : ""}.png`,
          );

          const started = Date.now();
          await captureScreenshot({
            page,
            url: fileUrl,
            mode,
            viewport,
            outputPath: screenshotPath,
          });
          const elapsed = Date.now() - started;

          if (args.captureBaselines || args.updateBaseline) {
            if (args.captureBaselines) {
              if (screenshotPath !== baselinePath) {
                writeFileSync(baselinePath, readFileSync(screenshotPath));
              }
              console.log(
                `[capture] ${theme.id} / ${pageInfo.id} / ${mode} ... done (${formatDuration(elapsed)})`,
              );
            } else {
              if (screenshotPath !== baselinePath) {
                writeFileSync(baselinePath, readFileSync(screenshotPath));
              }
              console.log(
                `[update] ${theme.id} / ${pageInfo.id} / ${mode} ... done (${formatDuration(elapsed)})`,
              );
            }

            appendResult(report, {
              theme: theme.id,
              mode,
              page: pageInfo.id,
              diffPercent: null,
              passed: true,
              baselinePath: baselinePath.replace(process.cwd() + "/", ""),
              screenshotPath: screenshotPath.replace(process.cwd() + "/", ""),
            });
          }

          if (args.compare) {
            if (!existsSync(baselinePath)) {
              console.warn(
                `[compare] ${theme.id} / ${pageInfo.id} / ${mode} ... missing baseline`,
              );
              hasMissingBaseline = true;
              appendResult(report, {
                theme: theme.id,
                mode,
                page: pageInfo.id,
                diffPercent: null,
                passed: false,
                baselinePath: baselinePath.replace(process.cwd() + "/", ""),
                screenshotPath: screenshotPath.replace(process.cwd() + "/", ""),
                skipped: true,
                reason: "missing baseline",
              });
              await page.close();
              continue;
            }

            const baseline = pngFromPath(baselinePath);
            const current = pngFromPath(screenshotPath);
            if (
              baseline.width !== current.width ||
              baseline.height !== current.height
            ) {
              const diffPercent = 1;
              console.log(
                `[compare] ${theme.id} / ${pageInfo.id} / ${mode} ... size mismatch ✗ (threshold: ${formatPercent(threshold)})`,
              );
              appendResult(report, {
                theme: theme.id,
                mode,
                page: pageInfo.id,
                diffPercent,
                passed: false,
                baselinePath: baselinePath.replace(process.cwd() + "/", ""),
                screenshotPath: screenshotPath.replace(process.cwd() + "/", ""),
                reason: "size mismatch",
              });
              hasFailures = true;
              await page.close();
              continue;
            }

            const diff = new PNG({
              width: baseline.width,
              height: baseline.height,
            });
            const diffPixels = pixelmatch(
              baseline.data,
              current.data,
              diff.data,
              baseline.width,
              baseline.height,
            );
            const diffPercent = diffPixels / (baseline.width * baseline.height);
            const passed = diffPercent <= threshold;
            const marker = passed ? "✓" : "✗";
            console.log(
              `[compare] ${theme.id} / ${pageInfo.id} / ${mode} ... ${formatPercent(diffPercent)} diff ${marker}${
                passed ? "" : ` (threshold: ${formatPercent(threshold)})`
              }`,
            );

            appendResult(report, {
              theme: theme.id,
              mode,
              page: pageInfo.id,
              diffPercent,
              passed,
              baselinePath: baselinePath.replace(process.cwd() + "/", ""),
              screenshotPath: screenshotPath.replace(process.cwd() + "/", ""),
            });

            if (!passed) hasFailures = true;
          }

          await page.close();
        }
      }

      await context.close();
    }
  } finally {
    await browser.close();
  }

  process.stdout.write(JSON.stringify(report, null, 2) + "\n");

  if (args.compare) {
    if (hasMissingBaseline) process.exit(2);
    if (hasFailures) process.exit(1);
  }
  process.exit(0);
}

run().catch((error) => {
  console.error("Visual regression run failed:", error);
  process.exit(1);
});
