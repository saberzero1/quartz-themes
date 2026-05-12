import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "esbuild";
import yaml from "js-yaml";

const require = createRequire(import.meta.url);
const parserEntryPoint =
  require.resolve("obsidian-style-settings/src/StyleSettingsParser.ts");
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
  const parsed = parseStyleSettingsStandaloneYamlText(
    readFileSync(filePath, "utf8"),
    { sourceName: filePath, defaultMode: "replace" },
  );
  const ids = new Set();
  for (const section of parsed.sections || []) {
    for (const setting of section.settings || []) {
      if (setting?.id) ids.add(setting.id);
    }
  }
  return ids;
}

function collectSidecarPaths(dirPath) {
  try {
    const sidecars = [];
    for (const entry of readdirSync(dirPath)) {
      const fullPath = join(dirPath, entry);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        sidecars.push(...collectSidecarPaths(fullPath));
        continue;
      }
      if (entry === "style-settings.yaml") sidecars.push(fullPath);
    }
    return sidecars;
  } catch (error) {
    throw new Error(`Failed to collect sidecar paths from ${dirPath}`, {
      cause: error,
    });
  }
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
      const droppedIds = Array.from(rawIds).filter((id) => !parsedIds.has(id));
      assert.equal(
        droppedIds.length,
        0,
        `${filePath} dropped IDs during parser import: ${droppedIds.join(", ")}`,
      );
    }
  });

  test("remaining known lossy themes retain representative IDs", () => {
    const adrenalinePath = join(
      repoRoot,
      "obsidian/Adrenaline/style-settings.yaml",
    );
    const blueTopazPath = join(
      repoRoot,
      "obsidian/Blue Topaz/style-settings.yaml",
    );
    const oreoPath = join(repoRoot, "obsidian/Oreo/style-settings.yaml");
    const prismPath = join(repoRoot, "obsidian/Prism/style-settings.yaml");
    const willemstadPath = join(
      repoRoot,
      "obsidian/Willemstad/style-settings.yaml",
    );

    const adrenalineRawIds = collectRawIdsFromSidecar(adrenalinePath);
    const blueTopazRawIds = collectRawIdsFromSidecar(blueTopazPath);
    const oreoRawIds = collectRawIdsFromSidecar(oreoPath);
    const prismRawIds = collectRawIdsFromSidecar(prismPath);
    const willemstadRawIds = collectRawIdsFromSidecar(willemstadPath);

    assert(adrenalineRawIds.has("custom-letter-spacing"));
    assert(blueTopazRawIds.has("inline-title-font"));
    assert(blueTopazRawIds.has("table-width"));
    assert(oreoRawIds.has("code-background-dark"));
    assert(oreoRawIds.has("code-value-light"));
    assert(prismRawIds.has("scroll-bar-size"));
    assert(prismRawIds.has("support-buttons"));
    assert(willemstadRawIds.has("color-pax-d-selection"));
    assert(willemstadRawIds.has("ssopt-codeblock-language"));
  });

  test("remaining known lossy themes now parse losslessly for setting IDs", () => {
    const adrenalinePath = join(
      repoRoot,
      "obsidian/Adrenaline/style-settings.yaml",
    );
    const blueTopazPath = join(
      repoRoot,
      "obsidian/Blue Topaz/style-settings.yaml",
    );
    const oreoPath = join(repoRoot, "obsidian/Oreo/style-settings.yaml");
    const prismPath = join(repoRoot, "obsidian/Prism/style-settings.yaml");
    const willemstadPath = join(
      repoRoot,
      "obsidian/Willemstad/style-settings.yaml",
    );

    for (const filePath of [
      adrenalinePath,
      blueTopazPath,
      oreoPath,
      prismPath,
      willemstadPath,
    ]) {
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

  test("all sidecar files parse losslessly for setting IDs", () => {
    for (const filePath of collectSidecarPaths(join(repoRoot, "obsidian"))) {
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
