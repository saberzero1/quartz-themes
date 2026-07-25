#!/usr/bin/env node

/**
 * Syncs the theme metadata registry from the plugin to @quartz-themes/core,
 * rebuilds core, bumps version, commits, pushes, and tags to trigger npm publish.
 *
 * Usage:
 *   node scripts/update-core-registry.mjs              # sync, build, bump patch, push, tag
 *   node scripts/update-core-registry.mjs --dry-run    # preview without writing
 *   node scripts/update-core-registry.mjs --no-publish # sync + push but don't tag (no npm publish)
 */

import { readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname =
  import.meta.dirname ?? resolve(fileURLToPath(import.meta.url), "..");
const repoRoot = resolve(__dirname, "..");

const PLUGIN_REGISTRY = join(
  repoRoot,
  "plugin",
  "src",
  "themes",
  "_registry.ts",
);
const CORE_DIR = resolve(repoRoot, "..", "core");
const CORE_REGISTRY = join(CORE_DIR, "src", "themes", "_registry.ts");
const CORE_PKG_JSON = join(CORE_DIR, "package.json");

const DRY_RUN = process.argv.includes("--dry-run");
const NO_PUBLISH = process.argv.includes("--no-publish");

function exec(cmd, opts = {}) {
  const result = execSync(cmd, {
    encoding: "utf8",
    stdio: "pipe",
    cwd: CORE_DIR,
    ...opts,
  });
  return (result || "").trim();
}

function bumpPatch(version) {
  const parts = version.split(".");
  parts[2] = String(parseInt(parts[2], 10) + 1);
  return parts.join(".");
}

function main() {
  console.log(
    `\n=== Update Core Registry (${DRY_RUN ? "DRY RUN" : "LIVE"}) ===\n`,
  );

  const pluginRegistry = readFileSync(PLUGIN_REGISTRY, "utf8");
  const coreRegistry = readFileSync(CORE_REGISTRY, "utf8");

  if (pluginRegistry === coreRegistry) {
    console.log("Registry already in sync. Nothing to do.");
    return;
  }

  const pluginEntryCount = (pluginRegistry.match(/^\s+["a-z]/gm) || []).length;
  const coreEntryCount = (coreRegistry.match(/^\s+["a-z]/gm) || []).length;
  console.log(`Plugin registry: ~${pluginEntryCount} entries`);
  console.log(`Core registry:   ~${coreEntryCount} entries`);
  console.log(`Delta: ${pluginEntryCount - coreEntryCount} new entries\n`);

  if (DRY_RUN) {
    console.log("Would copy plugin _registry.ts → core _registry.ts");
    console.log("Would bump core version, rebuild, commit, push, and tag");
    return;
  }

  copyFileSync(PLUGIN_REGISTRY, CORE_REGISTRY);
  console.log("Copied _registry.ts to core");

  const pkg = JSON.parse(readFileSync(CORE_PKG_JSON, "utf8"));
  const oldVersion = pkg.version;
  const newVersion = bumpPatch(oldVersion);
  pkg.version = newVersion;
  writeFileSync(CORE_PKG_JSON, JSON.stringify(pkg, null, 2) + "\n");
  console.log(`Bumped core version: ${oldVersion} → ${newVersion}`);

  console.log("Building core...");
  exec("npm run build");
  console.log("Build succeeded");

  console.log("Committing and pushing...");
  exec("git add -A");
  exec(
    `git commit -m "feat: update theme registry (${pluginEntryCount - coreEntryCount} new themes)"`,
  );
  exec("git push origin main");
  console.log("Pushed to origin/main");

  if (!NO_PUBLISH) {
    const tag = `v${newVersion}`;
    exec(`git tag -a ${tag} -m "${tag}"`);
    exec(`git push origin ${tag}`);
    console.log(`Tagged ${tag} — CI will publish to npm`);
  }

  console.log("\nDone.");
}

main();
