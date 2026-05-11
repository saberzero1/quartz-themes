import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "esbuild";
import yaml from "js-yaml";

const require = createRequire(import.meta.url);
const parserEntryPoint = require.resolve(
  "obsidian-style-settings/src/StyleSettingsParser.ts",
);
const tempParserDir = join(tmpdir(), "style-settings-migration-test");
const tempParserPath = join(tempParserDir, "StyleSettingsParser.bundle.mjs");

mkdirSync(tempParserDir, { recursive: true });

await build({
  entryPoints: [parserEntryPoint],
  outfile: tempParserPath,
  bundle: true,
  platform: "node",
  format: "esm",
  target: "node22",
  logLevel: "silent",
});

const { parseStyleSettingsStandaloneYamlText } = await import(
  pathToFileURL(tempParserPath).href
);

const repoRoot = new URL("../../..", import.meta.url).pathname;

function collectRawIdsFromSidecar(filePath) {
  const data = yaml.load(readFileSync(filePath, "utf8"));
  const sections = Array.isArray(data?.sections)
    ? data.sections
    : Array.isArray(data)
      ? data
      : data && typeof data === "object"
        ? [data]
        : [];
  const ids = new Set();
  for (const section of sections) {
    for (const setting of section?.settings || []) {
      if (setting?.id) ids.add(setting.id);
    }
  }
  return ids;
}

function collectParsedIdsFromSidecar(filePath) {
  const parsed = parseStyleSettingsStandaloneYamlText(readFileSync(filePath, "utf8"), {
    sourceName: filePath,
    defaultMode: "replace",
  });
  const ids = new Set();
  for (const section of parsed.sections || []) {
    for (const setting of section.settings || []) {
      if (setting?.id) ids.add(setting.id);
    }
  }
  return ids;
}

describe("style settings migration safety", () => {
  test("Blur and Arzaba retain required representative settings IDs", () => {
    const blurPath = join(repoRoot, "obsidian/Blur/style-settings.yaml");
    const arzabaPath = join(repoRoot, "obsidian/Arzaba/style-settings.yaml");

    const blurRawIds = collectRawIdsFromSidecar(blurPath);
    const arzabaRawIds = collectRawIdsFromSidecar(arzabaPath);

    assert(blurRawIds.has("selector-glow"));
    assert(blurRawIds.has("custom-glow-preset"));
    assert(blurRawIds.has("custom-general-notes-theme"));
    assert(arzabaRawIds.has("arzaba-sub-theme"));
  });

  test("Blur and Arzaba parse losslessly for setting IDs", () => {
    const blurPath = join(repoRoot, "obsidian/Blur/style-settings.yaml");
    const arzabaPath = join(repoRoot, "obsidian/Arzaba/style-settings.yaml");

    for (const filePath of [blurPath, arzabaPath]) {
      const rawIds = collectRawIdsFromSidecar(filePath);
      const parsedIds = collectParsedIdsFromSidecar(filePath);
      const droppedIds = [...rawIds].filter((id) => !parsedIds.has(id));
      assert.equal(
        droppedIds.length,
        0,
        `${filePath} dropped IDs during parser import: ${droppedIds.join(", ")}`,
      );
    }
  });
});
