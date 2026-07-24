#!/usr/bin/env node

/**
 * Pushes generated npm package content to per-theme GitHub repositories.
 *
 * Each theme repo under the quartz-themes org is a Quartz preview site.
 * This script adds npm package files into a `npm/` subdirectory so both
 * the preview site and the npm package coexist without conflict.
 *
 * Usage:
 *   node scripts/push-packages.mjs --dry-run          # preview what would happen
 *   node scripts/push-packages.mjs --filter=tokyo-night  # push one theme
 *   node scripts/push-packages.mjs                    # push all themes
 */

import {
  readFileSync,
  writeFileSync,
  readdirSync,
  existsSync,
  statSync,
  mkdirSync,
} from "node:fs";
import { resolve, join, relative } from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname =
  import.meta.dirname ?? resolve(fileURLToPath(import.meta.url), "..");
const repoRoot = resolve(__dirname, "..");
const packagesDir = join(repoRoot, "packages");

const DRY_RUN = process.argv.includes("--dry-run");
const FILTER = process.argv
  .find((a) => a.startsWith("--filter="))
  ?.split("=")[1];
const CONCURRENCY = parseInt(
  process.argv.find((a) => a.startsWith("--concurrency="))?.split("=")[1] ||
    "5",
);
const BATCH_DELAY_MS = 2000;

const ORG = "quartz-themes";
const CLONE_DIR = join(repoRoot, ".push-workdir");

function exec(cmd, opts = {}) {
  const result = execSync(cmd, { encoding: "utf8", stdio: "pipe", ...opts });
  return (result || "").trim();
}

function repoExists(name) {
  try {
    exec(`gh repo view ${ORG}/${name} --json name`);
    return true;
  } catch {
    return false;
  }
}

function getDefaultBranch(name) {
  try {
    return exec(`gh api repos/${ORG}/${name} --jq '.default_branch'`);
  } catch {
    return "v5";
  }
}

function collectFiles(dir, base = dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...collectFiles(full, base));
    } else {
      files.push({ path: relative(base, full), content: readFileSync(full) });
    }
  }
  return files;
}

async function pushTheme(name) {
  const packageDir = join(packagesDir, name);
  if (!existsSync(packageDir)) {
    console.log(`  SKIP: ${name} — no generated package`);
    return { status: "skipped", name };
  }

  if (!repoExists(name)) {
    console.log(`  SKIP: ${name} — repo ${ORG}/${name} does not exist`);
    return { status: "no-repo", name };
  }

  const branch = getDefaultBranch(name);
  const cloneDir = join(CLONE_DIR, name);

  try {
    // Shallow clone
    exec(
      `git clone --depth=1 --single-branch -b ${branch} https://github.com/${ORG}/${name}.git "${cloneDir}"`,
      { stdio: "ignore" },
    );

    // Create npm/ subdirectory
    const npmDir = join(cloneDir, "npm");
    mkdirSync(npmDir, { recursive: true });

    // Copy package files into npm/
    const files = collectFiles(packageDir);
    for (const file of files) {
      const destPath = join(npmDir, file.path);
      mkdirSync(resolve(destPath, ".."), { recursive: true });
      writeFileSync(destPath, file.content);
    }

    // Add publish workflow
    const workflowDir = join(cloneDir, ".github", "workflows");
    mkdirSync(workflowDir, { recursive: true });
    writeFileSync(
      join(workflowDir, "npm-publish.yml"),
      generatePublishWorkflow(name),
    );

    // Check if there are changes
    const status = exec("git status --porcelain", { cwd: cloneDir });
    if (!status) {
      console.log(`  SKIP: ${name} — no changes`);
      exec(`rm -rf "${cloneDir}"`);
      return { status: "no-changes", name };
    }

    if (DRY_RUN) {
      const changedFiles = status.split("\n").length;
      console.log(`  DRY: ${name} — would push ${changedFiles} files`);
      exec(`rm -rf "${cloneDir}"`);
      return { status: "dry-run", name };
    }

    // Commit and push
    exec("git add -A", { cwd: cloneDir });
    exec(
      `git commit -m "chore: add npm package files for @quartz-themes/${name}"`,
      { cwd: cloneDir },
    );
    exec(`git push origin ${branch}`, { cwd: cloneDir });
    console.log(`  PUSH: ${name} — pushed to ${ORG}/${name}`);

    exec(`rm -rf "${cloneDir}"`);
    return { status: "pushed", name };
  } catch (err) {
    console.error(`  ERROR: ${name} — ${err.message}`);
    try {
      exec(`rm -rf "${cloneDir}"`);
    } catch {}
    return { status: "error", name, error: err.message };
  }
}

function generatePublishWorkflow(name) {
  return `name: Publish to npm

on:
  push:
    tags: ["v*"]
  workflow_dispatch:
    inputs:
      version:
        description: "Version to publish (e.g. 1.0.1)"
        required: false

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          registry-url: "https://registry.npmjs.org"
      - name: Publish @quartz-themes/${name}
        working-directory: npm
        run: npm publish --provenance --access public
        env:
          NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}
`;
}

async function runWithConcurrency(items, fn, concurrency) {
  const results = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(fn));
    results.push(...batchResults);

    if (i + concurrency < items.length) {
      await new Promise((r) => setTimeout(r, BATCH_DELAY_MS));
    }
  }
  return results;
}

async function main() {
  console.log(
    `\n=== Push Packages to GitHub (${DRY_RUN ? "DRY RUN" : "LIVE"}) ===\n`,
  );

  // Get list of packages to push
  let themes = readdirSync(packagesDir).filter((d) =>
    statSync(join(packagesDir, d)).isDirectory(),
  );

  if (FILTER) {
    themes = themes.filter((t) => t === FILTER);
    if (themes.length === 0) {
      console.error(`No package found matching filter: ${FILTER}`);
      process.exit(1);
    }
  }

  console.log(`Packages to push: ${themes.length}`);
  console.log(`Concurrency: ${CONCURRENCY}`);
  console.log(`Batch delay: ${BATCH_DELAY_MS}ms\n`);

  // Prepare work directory
  exec(`rm -rf "${CLONE_DIR}"`);
  exec(`mkdir -p "${CLONE_DIR}"`);

  const results = await runWithConcurrency(themes, pushTheme, CONCURRENCY);

  // Summary
  const pushed = results.filter((r) => r.status === "pushed").length;
  const skipped = results.filter(
    (r) => r.status === "skipped" || r.status === "no-changes",
  ).length;
  const noRepo = results.filter((r) => r.status === "no-repo").length;
  const errors = results.filter((r) => r.status === "error");
  const dryRun = results.filter((r) => r.status === "dry-run").length;

  console.log(`\n=== Summary ===`);
  console.log(`  Pushed: ${pushed}`);
  console.log(`  Skipped: ${skipped}`);
  console.log(`  No repo: ${noRepo}`);
  console.log(`  Dry run: ${dryRun}`);
  console.log(`  Errors: ${errors.length}`);

  if (errors.length > 0) {
    console.log(`\n  Failed themes:`);
    for (const e of errors) {
      console.log(`    ${e.name}: ${e.error}`);
    }
  }

  // Cleanup
  exec(`rm -rf "${CLONE_DIR}"`);
}

main();
