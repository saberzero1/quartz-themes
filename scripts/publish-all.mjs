#!/usr/bin/env node

/**
 * Publishes all theme packages to npm by tagging their GitHub repos,
 * which triggers the npm-publish.yml workflow in each repo.
 *
 * Alternatively, publishes directly from the local packages/ directory.
 *
 * Usage:
 *   node scripts/publish-all.mjs --mode=local --dry-run     # preview local publish
 *   node scripts/publish-all.mjs --mode=local                # publish from packages/
 *   node scripts/publish-all.mjs --mode=tag --dry-run        # preview tagging repos
 *   node scripts/publish-all.mjs --mode=tag                  # tag repos to trigger CI
 *   node scripts/publish-all.mjs --filter=tokyo-night        # publish one theme
 */

import { readdirSync, statSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname =
  import.meta.dirname ?? resolve(fileURLToPath(import.meta.url), "..");
const repoRoot = resolve(__dirname, "..");
const packagesDir = join(repoRoot, "packages");

const DRY_RUN = process.argv.includes("--dry-run");
const MODE =
  process.argv.find((a) => a.startsWith("--mode="))?.split("=")[1] || "local";
const FILTER = process.argv
  .find((a) => a.startsWith("--filter="))
  ?.split("=")[1];
const BATCH_SIZE = parseInt(
  process.argv.find((a) => a.startsWith("--batch="))?.split("=")[1] || "20",
);
const BATCH_DELAY_MS = parseInt(
  process.argv.find((a) => a.startsWith("--delay="))?.split("=")[1] || "5000",
);

const ORG = "quartz-themes";

function exec(cmd, opts = {}) {
  const result = execSync(cmd, { encoding: "utf8", stdio: "pipe", ...opts });
  return (result || "").trim();
}

async function publishLocal(name) {
  const pkgDir = join(packagesDir, name);
  if (!existsSync(join(pkgDir, "package.json"))) {
    return { status: "skipped", name, reason: "no package.json" };
  }

  try {
    if (DRY_RUN) {
      const size = exec(`npm pack --dry-run 2>&1 | tail -1`, { cwd: pkgDir });
      return { status: "dry-run", name, detail: size };
    }

    exec("npm publish --access public", { cwd: pkgDir });
    return { status: "published", name };
  } catch (err) {
    const msg = err.stderr || err.message || String(err);
    if (msg.includes("EOTP") || msg.includes("one-time password")) {
      return { status: "otp-required", name };
    }
    if (msg.includes("already exists")) {
      return { status: "already-published", name };
    }
    return { status: "error", name, error: msg.substring(0, 200) };
  }
}

async function tagRepo(name) {
  const version = "v1.0.0";
  try {
    if (DRY_RUN) {
      return {
        status: "dry-run",
        name,
        detail: `would tag ${ORG}/${name} as ${version}`,
      };
    }

    exec(
      `gh api repos/${ORG}/${name}/git/refs -f ref=refs/tags/${version} -f sha=$(gh api repos/${ORG}/${name}/commits/HEAD --jq '.sha')`,
    );
    return { status: "tagged", name };
  } catch (err) {
    const msg = err.stderr || err.message || String(err);
    if (msg.includes("Reference already exists")) {
      return { status: "already-tagged", name };
    }
    return { status: "error", name, error: msg.substring(0, 200) };
  }
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  console.log(
    `\n=== Publish All (mode=${MODE}, ${DRY_RUN ? "DRY RUN" : "LIVE"}) ===\n`,
  );

  let themes = readdirSync(packagesDir).filter((d) =>
    statSync(join(packagesDir, d)).isDirectory(),
  );

  if (FILTER) {
    themes = themes.filter((t) => t === FILTER);
  }

  console.log(`Packages: ${themes.length}`);
  console.log(`Batch size: ${BATCH_SIZE}`);
  console.log(`Batch delay: ${BATCH_DELAY_MS}ms\n`);

  const fn = MODE === "tag" ? tagRepo : publishLocal;
  const results = [];
  let otpHit = false;

  for (let i = 0; i < themes.length; i += BATCH_SIZE) {
    const batch = themes.slice(i, i + BATCH_SIZE);

    for (const name of batch) {
      if (otpHit) {
        results.push({ status: "skipped-otp", name });
        continue;
      }

      const result = await fn(name);

      if (result.status === "otp-required") {
        console.error(
          `\n  OTP required — stopping. Publish the remaining ${themes.length - i} packages manually or use --mode=tag.\n`,
        );
        otpHit = true;
        results.push(result);
        continue;
      }

      const icon =
        result.status === "published" || result.status === "tagged"
          ? "OK"
          : result.status === "dry-run"
            ? "DRY"
            : result.status === "error"
              ? "ERR"
              : "SKIP";
      console.log(
        `  ${icon}: ${name}${result.detail ? ` (${result.detail})` : ""}${result.error ? ` — ${result.error}` : ""}`,
      );
      results.push(result);
    }

    if (i + BATCH_SIZE < themes.length && !otpHit) {
      await sleep(BATCH_DELAY_MS);
    }
  }

  const counts = {};
  for (const r of results) {
    counts[r.status] = (counts[r.status] || 0) + 1;
  }

  console.log(`\n=== Summary ===`);
  for (const [status, count] of Object.entries(counts)) {
    console.log(`  ${status}: ${count}`);
  }
}

main();
