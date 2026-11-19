/**
 * Load @quartz-themes/core — the converter sites actually get. Set
 * QUARTZ_THEMES_CORE to a local build (default: a sibling dev-mode checkout).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repo = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
export const coreEntry =
  process.env.QUARTZ_THEMES_CORE ??
  [path.join(repo, "../dev-mode/repos/quartz-themes-core/dist/index.js")].find(
    (p) => fs.existsSync(p),
  ) ??
  "@quartz-themes/core";
export const core = await import(coreEntry);
