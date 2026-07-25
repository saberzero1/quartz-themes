#!/usr/bin/env node

/**
 * Registers new Obsidian themes that exist in obsidian/ but lack a LICENSE.md.
 *
 * For each unprocessed theme:
 * 1. Looks up the theme in the Obsidian community theme registry
 * 2. Fetches the LICENSE from the theme's GitHub repo
 * 3. Saves it as obsidian/{ThemeName}/LICENSE.md
 * 4. Adds an entry to themes.json (alphabetically sorted)
 *
 * Usage:
 *   node scripts/register-new-themes.mjs              # register all new themes
 *   node scripts/register-new-themes.mjs --dry-run    # preview without writing
 *   node scripts/register-new-themes.mjs --filter=Acovia  # register one theme
 */

import {
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  statSync,
} from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname =
  import.meta.dirname ?? resolve(fileURLToPath(import.meta.url), "..");
const repoRoot = resolve(__dirname, "..");
const obsidianDir = join(repoRoot, "obsidian");
const themesJsonPath = join(repoRoot, "themes.json");

const DRY_RUN = process.argv.includes("--dry-run");
const FILTER = process.argv
  .find((a) => a.startsWith("--filter="))
  ?.split("=")[1];

const REGISTRY_URL =
  "https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-css-themes.json";

function sanitize(input) {
  let s = input.toLowerCase();
  s = s.replace(/\s+/g, "-");
  s = s.normalize("NFD");
  s = s.replace(/[^a-z0-9-_\p{Emoji}]/gu, "");
  s = s.replace(/-+/gu, "-");
  s = s.replace(/^-+/gu, "");
  s = s.replace(/-+$/gu, "");
  return s;
}

import { execSync } from "node:child_process";

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${url}`);
  return res.json();
}

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) return null;
  return res.text();
}

function ghApi(endpoint) {
  try {
    const result = execSync(`gh api ${endpoint}`, {
      encoding: "utf8",
      stdio: "pipe",
    });
    return JSON.parse(result);
  } catch {
    return null;
  }
}

function ghFetchRaw(url) {
  try {
    return execSync(`curl -sL "${url}"`, { encoding: "utf8", stdio: "pipe" });
  } catch {
    return null;
  }
}

function findUnprocessedThemes() {
  const dirs = readdirSync(obsidianDir).filter((d) =>
    statSync(join(obsidianDir, d)).isDirectory(),
  );

  const unprocessed = [];
  for (const dirName of dirs) {
    if (FILTER && dirName !== FILTER) continue;
    const themeDir = join(obsidianDir, dirName);
    const hasLicense = existsSync(join(themeDir, "LICENSE.md"));
    const hasManifest = existsSync(join(themeDir, "manifest.json"));

    if (!hasLicense && hasManifest) {
      unprocessed.push(dirName);
    }
  }
  return unprocessed;
}

function makeThemesJsonEntry(modes) {
  return {
    compatibility: ["checking"],
    modes,
    use_extended_syntax: false,
    style_settings: {},
    variations: [],
    extra_extract_files: [],
    snippets: ["checkboxes-reference-set"],
    extras: [],
    fixes: [],
    fonts: [],
    license: { name: "", spdx_id: "" },
  };
}

async function main() {
  console.log(
    `\n=== Register New Themes (${DRY_RUN ? "DRY RUN" : "LIVE"}) ===\n`,
  );

  const unprocessed = findUnprocessedThemes();
  if (unprocessed.length === 0) {
    console.log("No unprocessed themes found.");
    return;
  }
  console.log(`Found ${unprocessed.length} unprocessed theme(s):\n`);

  console.log("Fetching Obsidian community theme registry...");
  const registry = await fetchJson(REGISTRY_URL);
  const registryByName = new Map(registry.map((t) => [t.name, t]));

  const themesJson = JSON.parse(readFileSync(themesJsonPath, "utf8"));

  let registered = 0;
  let skipped = 0;
  let errors = 0;

  for (const dirName of unprocessed) {
    const slug = sanitize(dirName);
    const themeDir = join(obsidianDir, dirName);

    try {
      const manifest = JSON.parse(
        readFileSync(join(themeDir, "manifest.json"), "utf8"),
      );
      const displayName = manifest.name || dirName;

      const registryEntry = registryByName.get(displayName);
      if (!registryEntry) {
        console.log(
          `  SKIP: ${dirName} — not found in Obsidian community registry`,
        );
        skipped++;
        continue;
      }

      const repo = registryEntry.repo;
      const modes = registryEntry.modes || ["dark", "light"];

      let licenseText = null;
      let licenseSpdx = "MIT";
      let licenseName = "MIT License";

      const licenseData = ghApi(`repos/${repo}/license`);
      if (licenseData?.license) {
        licenseSpdx = licenseData.license.spdx_id || "MIT";
        licenseName = licenseData.license.name || "MIT License";
        if (licenseData.download_url) {
          licenseText = ghFetchRaw(licenseData.download_url);
        }
      } else {
        console.log(
          `  WARN: ${dirName} — no license in repo, defaulting to MIT`,
        );
      }

      console.log(
        `  ${DRY_RUN ? "DRY" : "REG"}: ${dirName} → ${slug} (${modes.join("/")} mode, ${licenseSpdx}, repo: ${repo})`,
      );

      if (DRY_RUN) {
        registered++;
        continue;
      }

      // Write LICENSE.md
      if (licenseText) {
        writeFileSync(join(themeDir, "LICENSE.md"), licenseText);
      } else {
        writeFileSync(
          join(themeDir, "LICENSE.md"),
          `License: ${licenseName} (${licenseSpdx})\nSee: https://github.com/${repo}\n`,
        );
      }

      // Add to themes.json
      if (!(slug in themesJson.themes)) {
        const entry = makeThemesJsonEntry(modes);
        entry.license = { name: licenseName, spdx_id: licenseSpdx };
        themesJson.themes[slug] = entry;
      }

      registered++;
    } catch (err) {
      console.error(`  ERROR: ${dirName} — ${err.message}`);
      errors++;
    }
  }

  if (!DRY_RUN && registered > 0) {
    // Sort themes.json keys alphabetically
    const sortedThemes = {};
    for (const key of Object.keys(themesJson.themes).sort()) {
      sortedThemes[key] = themesJson.themes[key];
    }
    themesJson.themes = sortedThemes;

    writeFileSync(themesJsonPath, JSON.stringify(themesJson, null, 2) + "\n");
    console.log(`\nUpdated themes.json`);
  }

  console.log(
    `\nDone: ${registered} registered, ${skipped} skipped, ${errors} errors`,
  );
}

main();
