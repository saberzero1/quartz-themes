import * as fs from "fs";
import * as path from "path";

/**
 * Standard Obsidian callout types and their aliases.
 * These are built into Obsidian and should be excluded from custom callout discovery.
 */
const STANDARD_CALLOUT_TYPES = new Set([
  // 13 base types
  "note",
  "abstract",
  "info",
  "todo",
  "tip",
  "success",
  "question",
  "warning",
  "failure",
  "danger",
  "bug",
  "example",
  "quote",
  // Known aliases
  "summary",
  "tldr",
  "important",
  "hint",
  "check",
  "done",
  "help",
  "faq",
  "caution",
  "attention",
  "fail",
  "missing",
  "cite",
  "error",
  // "default" collides with --callout-default (used by built-in "note" type mapping)
  "default",
]);

/**
 * Converts an Obsidian theme directory name to its themes.json key.
 *
 * Handles edge cases:
 *   - Accented characters (e.g. "Ros\u00e9 Pine" -> "rose-pine")
 *   - Non-ASCII removal (e.g. "Pale - \u6de1" -> "pale")
 *   - Special characters +(),&' stripped
 *   - Dot-concatenated words collapsed (e.g. "OLED.Black" -> "oledblack")
 *   - Spaces to hyphens, consecutive hyphens collapsed, leading/trailing hyphens trimmed
 *
 * Verified against all 421 theme directories (0 mismatches).
 *
 * @param {string} dirName - The theme directory name (e.g. "Ros\u00e9 Pine Moon").
 * @returns {string} The themes.json key (e.g. "rose-pine-moon").
 */
export function dirToKey(dirName) {
  let key = dirName;
  key = key.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // \u00e9 -> e
  key = key.replace(/[^\x00-\x7F]/g, ""); // remove non-ASCII
  key = key.replace(/[+(),&']/g, ""); // remove +(),'&
  key = key.replace(/(\w)\.(\w)/g, "$1$2"); // OLED.Black -> oledblack
  key = key.toLowerCase();
  key = key.replace(/\s+/g, "-");
  key = key.replace(/-{2,}/g, "-");
  key = key.replace(/(^-|-$)/g, "");
  return key;
}

/**
 * Discovers custom callout types from a CSS file by scanning for
 * `data-callout` attribute selectors. Filters out standard Obsidian callout types.
 *
 * Handles CSS selector patterns:
 *   - [data-callout="TYPE"]    (exact match)
 *   - [data-callout=TYPE]      (exact match, unquoted)
 *   - [data-callout~=TYPE]     (word match)
 *   - [data-callout~=TYPE i]   (case-insensitive word match)
 *
 * @param {string} cssFilePath - Absolute path to the CSS file.
 * @returns {string[]} Array of unique custom callout type names (lowercased), sorted alphabetically.
 */
export function discoverCustomCalloutTypes(cssFilePath) {
  if (!fs.existsSync(cssFilePath)) {
    return [];
  }

  const cssContent = fs.readFileSync(cssFilePath, "utf8");

  // Match data-callout attribute selectors in all common forms
  const pattern = /\[data-callout[~]?=["']?([a-zA-Z][\w-]*)["']?(?:\s+i)?\]/g;

  const discovered = new Set();
  let match;

  while ((match = pattern.exec(cssContent)) !== null) {
    const calloutType = match[1].toLowerCase();
    if (!STANDARD_CALLOUT_TYPES.has(calloutType)) {
      discovered.add(calloutType);
    }
  }

  return [...discovered].sort();
}

/**
 * Discovers custom callout types for a theme by scanning its associated snippet CSS files.
 *
 * @param {string} snippetsDir - Path to the vault's snippets directory (e.g. runner/vault/.obsidian/snippets/).
 * @param {string[]} snippetNames - Array of snippet names from themes.json (without .css extension).
 * @returns {string[]} Array of unique custom callout type names (lowercased), sorted alphabetically.
 */
export function discoverThemeCalloutTypes(snippetsDir, snippetNames) {
  const allTypes = new Set();

  for (const snippetName of snippetNames) {
    // Only process callout-related snippets
    if (!snippetName.includes("callout")) {
      continue;
    }

    const cssFilePath = path.join(snippetsDir, `${snippetName}.css`);
    const types = discoverCustomCalloutTypes(cssFilePath);
    for (const type of types) {
      allTypes.add(type);
    }
  }

  return [...allTypes].sort();
}

/**
 * Discovers callout snippet prefixes by scanning the snippets directory for
 * files matching the pattern `*-callouts.css`.
 *
 * For each matching file, derives a prefix by stripping the `-callouts.css` suffix.
 * This prefix is used to auto-associate themes whose key starts with the prefix
 * to the corresponding callout snippet.
 *
 * Example: `its-theme-callouts.css` → `{ prefix: "its-theme", snippetName: "its-theme-callouts" }`
 *
 * @param {string} snippetsDir - Path to the vault's snippets directory.
 * @returns {{ prefix: string, snippetName: string }[]} Array of prefix/snippet associations,
 *   sorted by prefix length descending (longest prefix matches first).
 */
export function discoverCalloutSnippetPrefixes(snippetsDir) {
  if (!fs.existsSync(snippetsDir)) {
    return [];
  }

  const files = fs.readdirSync(snippetsDir);
  const results = [];

  for (const file of files) {
    if (file.endsWith("-callouts.css")) {
      const snippetName = file.replace(/\.css$/, "");
      const prefix = snippetName.replace(/-callouts$/, "");
      results.push({ prefix, snippetName });
    }
  }

  // Sort by prefix length descending so longer (more specific) prefixes match first
  results.sort((a, b) => b.prefix.length - a.prefix.length);

  return results;
}

/**
 * Creates vault files for theme-specific custom callouts.
 * Scans BOTH snippet CSS files (for themes like ITS that use snippets) AND
 * theme.css files directly (for the 43+ themes that define callouts in theme.css).
 *
 * Generates one .md file per theme that has custom callout types.
 *
 * @param {string} vaultDir - Path to the vault directory (e.g. runner/vault/).
 * @param {string} snippetsDir - Path to the vault's snippets directory.
 * @param {string} obsidianDir - Path to the obsidian/ directory containing theme subdirectories.
 * @param {Object} themes - The themes object from themes.json.
 * @returns {Object} Map of theme key to array of custom callout types discovered.
 *   Example: { "its-theme": ["aside", "blank", "cards", ...], "magicuser": ["academia", ...] }
 */
export function generateThemeCalloutVaultFiles(
  vaultDir,
  snippetsDir,
  obsidianDir,
  themes,
) {
  const calloutDir = path.join(vaultDir, "theme-callouts");
  const themeCalloutMap = {};

  // Ensure the theme-callouts directory exists
  if (!fs.existsSync(calloutDir)) {
    fs.mkdirSync(calloutDir, { recursive: true });
  }

  // Build a set of theme keys from themes.json for validation
  const themeKeys = new Set(Object.keys(themes));

  // --- Source 1: Auto-derive snippet callout associations ---
  // Scan the snippets directory for *-callouts.css files.
  // For each, derive a prefix (e.g. "its-theme-callouts.css" → "its-theme").
  // Any theme key starting with that prefix gets callouts from that snippet,
  // UNLESS the theme has explicit callout snippets in themes.json (those override).
  const autoDerivePrefixes = discoverCalloutSnippetPrefixes(snippetsDir);

  for (const [themeName, themeData] of Object.entries(themes)) {
    const explicitSnippets = themeData.snippets || [];

    // Check if theme has explicit callout snippet overrides
    const hasExplicitCalloutSnippets = explicitSnippets.some((s) =>
      s.includes("callout"),
    );

    let calloutSnippetNames = [];

    if (hasExplicitCalloutSnippets) {
      // Explicit override: use the theme's declared callout snippets
      calloutSnippetNames = explicitSnippets.filter((s) =>
        s.includes("callout"),
      );
    } else {
      // Auto-derive: check if theme key matches any snippet prefix
      for (const { prefix, snippetName } of autoDerivePrefixes) {
        if (themeName.startsWith(prefix)) {
          calloutSnippetNames.push(snippetName);
          break; // First matching prefix wins
        }
      }
    }

    if (calloutSnippetNames.length === 0) {
      continue;
    }

    const customTypes = discoverThemeCalloutTypes(
      snippetsDir,
      calloutSnippetNames,
    );
    if (customTypes.length === 0) {
      continue;
    }

    if (!themeCalloutMap[themeName]) {
      themeCalloutMap[themeName] = new Set();
    }
    for (const type of customTypes) {
      themeCalloutMap[themeName].add(type);
    }
  }

  // --- Source 2: Scan theme.css files in obsidian/<DirName>/theme.css ---
  if (fs.existsSync(obsidianDir)) {
    const themeDirs = fs.readdirSync(obsidianDir, { withFileTypes: true });

    for (const entry of themeDirs) {
      if (!entry.isDirectory()) {
        continue;
      }

      const dirName = entry.name;
      const themeKey = dirToKey(dirName);

      // Only process themes that exist in themes.json
      if (!themeKeys.has(themeKey)) {
        continue;
      }

      const themeCssPath = path.join(obsidianDir, dirName, "theme.css");
      const customTypes = discoverCustomCalloutTypes(themeCssPath);

      if (customTypes.length === 0) {
        continue;
      }

      if (!themeCalloutMap[themeKey]) {
        themeCalloutMap[themeKey] = new Set();
      }
      for (const type of customTypes) {
        themeCalloutMap[themeKey].add(type);
      }
    }
  }

  // Convert Sets to sorted arrays and write vault files
  const result = {};
  for (const [themeName, typesSet] of Object.entries(themeCalloutMap)) {
    const sortedTypes = [...typesSet].sort();
    result[themeName] = sortedTypes;

    // Generate vault file
    const content = generateCalloutVaultContent(sortedTypes);
    const filePath = path.join(calloutDir, `${themeName}.md`);
    fs.writeFileSync(filePath, content, "utf8");
  }

  // Clean up stale vault files from previous runs
  const existingFiles = fs.readdirSync(calloutDir);
  for (const file of existingFiles) {
    if (!file.endsWith(".md")) {
      continue;
    }
    const themeName = file.replace(/\.md$/, "");
    if (!result[themeName]) {
      fs.unlinkSync(path.join(calloutDir, file));
    }
  }

  return result;
}

/**
 * Generates a Markdown vault file containing callout blocks for each custom callout type.
 * This file will be loaded by the CLI extractor to render the callouts in Obsidian
 * and extract their computed styles.
 *
 * @param {string[]} calloutTypes - Array of custom callout type names.
 * @returns {string} Markdown content with one callout block per type.
 */
export function generateCalloutVaultContent(calloutTypes) {
  if (calloutTypes.length === 0) {
    return "";
  }

  const blocks = calloutTypes.map(
    (type) => `> [!${type}]\n> Custom callout type: "${type}"`,
  );

  return blocks.join("\n\n") + "\n";
}
