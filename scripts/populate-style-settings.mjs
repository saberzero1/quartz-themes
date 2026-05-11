/**
 * Style Settings pipeline: extract YAML from theme CSS, then populate themes.json.
 *
 * Usage:
 *   node scripts/populate-style-settings.mjs              # populate themes.json from existing .yaml files
 *   node scripts/populate-style-settings.mjs --extract    # re-extract .yaml from theme.css first, then populate
 */
import {
  mkdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  readdirSync,
  statSync,
} from "fs";
import { createRequire } from "module";
import { tmpdir } from "os";
import { join } from "path";
import { pathToFileURL } from "url";
import { build } from "esbuild";
import yaml from "js-yaml";
import { sanitizeFilenamePreservingEmojis as sanitize } from "../util/util.mjs";

const THEMES_JSON_PATH = "./themes.json";
const OBSIDIAN_DIR = "./obsidian";
const TEMP_PARSER_DIR = join(tmpdir(), "style-settings-fork");
const TEMP_PARSER_PATH = join(TEMP_PARSER_DIR, "StyleSettingsParser.bundle.mjs");

const shouldExtract = process.argv.includes("--extract");

const obsidianDirs = readdirSync(OBSIDIAN_DIR).filter((name) =>
  statSync(join(OBSIDIAN_DIR, name)).isDirectory(),
);

const require = createRequire(import.meta.url);
const parserEntryPoint = require.resolve(
  "obsidian-style-settings/src/StyleSettingsParser.ts",
);
mkdirSync(TEMP_PARSER_DIR, { recursive: true });

await build({
  entryPoints: [parserEntryPoint],
  outfile: TEMP_PARSER_PATH,
  bundle: true,
  platform: "node",
  format: "esm",
  target: "node22",
  logLevel: "silent",
});

const {
  parseStyleSettingsStylesheetText,
  parseStyleSettingsStandaloneYamlText,
  buildNormalizedStyleSettingsSchema,
} = await import(pathToFileURL(TEMP_PARSER_PATH).href);

function toSerializable(value) {
  if (Array.isArray(value)) {
    return value.map(toSerializable);
  }
  if (value && typeof value === "object") {
    const out = {};
    for (const [key, child] of Object.entries(value)) {
      if (child !== undefined) {
        out[key] = toSerializable(child);
      }
    }
    return out;
  }
  return value;
}

function parseCssToSections(css, sourceName) {
  const parsed = parseStyleSettingsStylesheetText(css, { sourceName });
  return parsed.sections || [];
}

function parseYamlToSections(yamlText, sourceName) {
  const parsed = parseStyleSettingsStandaloneYamlText(yamlText, {
    sourceName,
    defaultMode: "replace",
  });
  return parsed.sections || [];
}

function buildThemeStyleSettingsFromSections(sections) {
  const normalized = buildNormalizedStyleSettingsSchema({
    sections,
    diagnostics: [],
  });
  const normalizedSections = normalized.sections.map((section) => ({
    id: section.id,
    name: section.name,
    collapsed: !!section.collapsed,
    settings: section.settings.map((setting) => ({
      id: setting.id,
      title: setting.title,
      description: setting.description,
      type: setting.type,
      default: setting.default,
      defaults: setting.defaults,
      options: setting.options,
      constraints: setting.constraints,
      binding: setting.binding,
      bindings: setting.bindings,
      derivedBindings: setting.derivedBindings,
    })),
  }));
  const primary = normalizedSections[0] || {};

  return {
    version: normalized.version,
    source: "saberzero1/obsidian-style-settings",
    sections: normalizedSections,
    diagnostics: normalized.diagnostics.map((diag) => ({
      severity: diag.severity,
      code: diag.code,
      message: diag.message,
      sectionId: diag.sectionId,
      settingId: diag.settingId,
      path: diag.path,
    })),
    // Compatibility field currently used by existing Quartz scripts.
    id: primary.id || "",
    name: primary.name || "",
  };
}

// --- Phase 1: Extract style-settings.yaml from theme.css ---

if (shouldExtract) {
  let extracted = 0;
  let unchanged = 0;
  let noSettings = 0;

  for (const dirName of obsidianDirs) {
    const cssPath = join(OBSIDIAN_DIR, dirName, "theme.css");
    if (!existsSync(cssPath)) {
      noSettings++;
      continue;
    }

    const css = readFileSync(cssPath, "utf8");
    const sections = parseCssToSections(css, `${dirName}/theme.css`);
    if (sections.length === 0) {
      noSettings++;
      continue;
    }

    const sidecarDoc = {
      mode: "replace",
      sections: sections.map((section) => ({
        name: section.name,
        id: section.id,
        collapsed: !!section.collapsed,
        settings: (section.settings || []).map((setting) =>
          toSerializable({
            ...setting,
            source: undefined,
          }),
        ),
      })),
    };

    const yamlOut = yaml.dump(sidecarDoc, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
      quotingType: "'",
      forceQuotes: false,
    });

    const yamlPath = join(OBSIDIAN_DIR, dirName, "style-settings.yaml");
    const existing = existsSync(yamlPath) ? readFileSync(yamlPath, "utf8") : "";

    if (yamlOut.trim() === existing.trim()) {
      unchanged++;
    } else {
      writeFileSync(yamlPath, yamlOut);
      extracted++;
    }
  }

  console.log(
    `Extract: ${extracted} written, ${unchanged} unchanged, ${noSettings} themes without @settings.`,
  );
}

// --- Phase 2: Populate themes.json from style-settings.yaml ---

const themesJson = JSON.parse(readFileSync(THEMES_JSON_PATH, "utf-8"));

const slugToDirName = new Map();
for (const dirName of obsidianDirs) {
  const slug = sanitize(dirName);
  if (!slugToDirName.has(slug)) {
    slugToDirName.set(slug, dirName);
  }
}

let populated = 0;
let skipped = 0;

for (const [themeSlug, themeMeta] of Object.entries(themesJson.themes)) {
  const dirName = slugToDirName.get(themeSlug);
  if (!dirName) {
    skipped++;
    continue;
  }

  const yamlPath = join(OBSIDIAN_DIR, dirName, "style-settings.yaml");
  if (!existsSync(yamlPath)) {
    skipped++;
    continue;
  }

  let sections;
  try {
    sections = parseYamlToSections(readFileSync(yamlPath, "utf8"), yamlPath);
  } catch {
    skipped++;
    continue;
  }

  if (!Array.isArray(sections) || sections.length === 0) {
    skipped++;
    continue;
  }

  themeMeta.style_settings = buildThemeStyleSettingsFromSections(sections);
  populated++;
}

writeFileSync(THEMES_JSON_PATH, JSON.stringify(themesJson, null, 2) + "\n");
console.log(
  `Populate: ${populated} themes updated in themes.json, ${skipped} skipped.`,
);
