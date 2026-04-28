/**
 * Style Settings pipeline: extract YAML from theme CSS, then populate themes.json.
 *
 * Usage:
 *   node scripts/populate-style-settings.mjs              # populate themes.json from existing .yaml files
 *   node scripts/populate-style-settings.mjs --extract    # re-extract .yaml from theme.css first, then populate
 */
import {
  readFileSync,
  writeFileSync,
  existsSync,
  readdirSync,
  statSync,
} from "fs";
import { join } from "path";
import yaml from "js-yaml";
import {
  extractStyleSettings,
  extractStyleSettingsFromFile,
} from "../util/postcss-style-settings.mjs";
import { sanitizeFilenamePreservingEmojis as sanitize } from "../util/util.mjs";

const THEMES_JSON_PATH = "./themes.json";
const OBSIDIAN_DIR = "./obsidian";

const shouldExtract = process.argv.includes("--extract");

const obsidianDirs = readdirSync(OBSIDIAN_DIR).filter((name) =>
  statSync(join(OBSIDIAN_DIR, name)).isDirectory(),
);

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
    const blocks = extractStyleSettings(css);

    if (blocks.length === 0) {
      noSettings++;
      continue;
    }

    // Use the first (primary) @settings block
    const primary = blocks[0];
    if (
      !primary.id &&
      !primary.name &&
      (!primary.settings || primary.settings.length === 0)
    ) {
      noSettings++;
      continue;
    }

    const yamlOut = yaml.dump(primary, {
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

  const parsed = extractStyleSettingsFromFile(yamlPath);
  if (parsed.settings.length === 0 && !parsed.id) {
    skipped++;
    continue;
  }

  themeMeta.style_settings = {
    id: parsed.id,
    name: parsed.name,
    settings: parsed.settings,
  };
  populated++;
}

writeFileSync(THEMES_JSON_PATH, JSON.stringify(themesJson, null, 2) + "\n");
console.log(
  `Populate: ${populated} themes updated in themes.json, ${skipped} skipped.`,
);
