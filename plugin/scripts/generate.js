import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, "../..");
const configPath = path.join(repoRoot, "runner", "scripts", "config.js");
const themesJsonPath = path.join(repoRoot, "themes.json");
const resultsDir = path.join(repoRoot, "runner", "results");
const outputDir = path.join(repoRoot, "plugin", "src", "themes");

const ASPECT_ORDER = [
  "base",
  "typography",
  "links",
  "lists",
  "blockquotes",
  "tables",
  "code",
  "images",
  "embeds",
  "checkboxes",
  "callouts",
  "cards",
  "search",
  "scrollbars",
  "explorer",
  "toc",
  "graph",
  "popover",
  "footer",
  "recentNotes",
  "listPage",
  "darkmode",
  "breadcrumbs",
  "misc",
];

const commentAspectMatchers = [
  { aspect: "links", tests: ["links", "link hover"] },
  {
    aspect: "search",
    tests: ["search", "suggestion", "tag pills", "search ui"],
  },
  { aspect: "lists", tests: ["list items", "lists"] },
  {
    aspect: "code",
    tests: ["code", "code blocks", "code title", "code lines"],
  },
  { aspect: "checkboxes", tests: ["checkbox", "task list"] },
  { aspect: "blockquotes", tests: ["blockquote"] },
  { aspect: "scrollbars", tests: ["scrollbar"] },
  { aspect: "callouts", tests: ["callout"] },
  { aspect: "tables", tests: ["table"] },
  { aspect: "images", tests: ["image", "figure", "video", "audio", "media"] },
  { aspect: "embeds", tests: ["embed", "transclude"] },
  { aspect: "explorer", tests: ["explorer", "file tree"] },
  { aspect: "toc", tests: ["toc", "outline"] },
  { aspect: "graph", tests: ["graph"] },
  { aspect: "popover", tests: ["popover"] },
  { aspect: "footer", tests: ["footer", "status bar"] },
  { aspect: "recentNotes", tests: ["recent notes"] },
  { aspect: "listPage", tests: ["list page"] },
  { aspect: "darkmode", tests: ["darkmode", "dark mode"] },
  { aspect: "breadcrumbs", tests: ["breadcrumbs"] },
  { aspect: "cards", tests: ["cards", "card"] },
  {
    aspect: "typography",
    tests: ["typography", "text", "headings", "heading"],
  },
  {
    aspect: "base",
    tests: ["base", "layout", "center content", "sidebars", "separators"],
  },
  {
    aspect: "misc",
    tests: [
      "misc",
      "frontmatter",
      "tooltip",
      "forms",
      "details",
      "kbd",
      "definition",
      "subscript",
      "superscript",
      "abbrev",
      "backlinks",
      "progress",
      "page title",
      "math",
      "mermaid",
      "tags list",
      "text highlight",
      "strong text",
    ],
  },
];

function commentToAspect(comment) {
  const lower = comment.trim().toLowerCase();
  if (lower.length === 0) return null;
  if (lower.startsWith("todo")) return null;
  for (const matcher of commentAspectMatchers) {
    if (matcher.tests.some((test) => lower.includes(test))) {
      return matcher.aspect;
    }
  }
  return null;
}

function buildAspectMap(configSource, configLength) {
  const startIndex = configSource.indexOf("export const config");
  if (startIndex === -1) {
    throw new Error("Unable to locate config array in config.js");
  }
  const arrayStart = configSource.indexOf("[", startIndex);
  if (arrayStart === -1) {
    throw new Error("Unable to locate config array start bracket");
  }

  let squareDepth = 1;
  let curlyDepth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let inLineComment = false;
  let inBlockComment = false;
  let isEscaping = false;
  let currentAspect = "base";
  let commentBuffer = "";
  let inEntry = false;
  let entryAspect = currentAspect;
  const aspectMap = [];

  for (let i = arrayStart + 1; i < configSource.length; i += 1) {
    const char = configSource[i];
    const nextChar = configSource[i + 1];

    if (inLineComment) {
      if (char === "\n") {
        inLineComment = false;
        const aspect = commentToAspect(commentBuffer);
        if (aspect) currentAspect = aspect;
        commentBuffer = "";
      } else {
        commentBuffer += char;
      }
      continue;
    }

    if (inBlockComment) {
      if (char === "*" && nextChar === "/") {
        inBlockComment = false;
        i += 1;
      }
      continue;
    }

    if (inSingle || inDouble || inTemplate) {
      if (isEscaping) {
        isEscaping = false;
        continue;
      }
      if (char === "\\") {
        isEscaping = true;
        continue;
      }
      if (inSingle && char === "'") inSingle = false;
      if (inDouble && char === '"') inDouble = false;
      if (inTemplate && char === "`") inTemplate = false;
      continue;
    }

    if (char === "/" && nextChar === "/") {
      inLineComment = true;
      commentBuffer = "";
      i += 1;
      continue;
    }

    if (char === "/" && nextChar === "*") {
      inBlockComment = true;
      i += 1;
      continue;
    }

    if (char === "'") {
      inSingle = true;
      continue;
    }
    if (char === '"') {
      inDouble = true;
      continue;
    }
    if (char === "`") {
      inTemplate = true;
      continue;
    }

    if (char === "[") squareDepth += 1;
    if (char === "]") {
      squareDepth -= 1;
      if (squareDepth === 0) break;
    }

    if (char === "{") {
      if (squareDepth === 1 && curlyDepth === 0) {
        inEntry = true;
        entryAspect = currentAspect;
      }
      curlyDepth += 1;
    }

    if (char === "}") {
      curlyDepth -= 1;
      if (inEntry && curlyDepth === 0) {
        aspectMap.push(entryAspect);
        inEntry = false;
      }
    }
  }

  if (aspectMap.length !== configLength) {
    throw new Error(
      `Aspect map length mismatch: expected ${configLength}, got ${aspectMap.length}`,
    );
  }

  return aspectMap;
}

function escapeTemplateLiteral(value) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function toTemplateLiteral(value) {
  return `\`${escapeTemplateLiteral(value)}\``;
}

function normalizeVariations(variations) {
  if (!Array.isArray(variations)) return [];
  return variations
    .map((entry) => {
      if (typeof entry === "string") return entry;
      if (
        entry &&
        typeof entry === "object" &&
        typeof entry.name === "string"
      ) {
        return entry.name;
      }
      return null;
    })
    .filter((value) => typeof value === "string");
}

function normalizeFonts(fonts) {
  if (Array.isArray(fonts))
    return fonts
      .filter((value) => typeof value === "string")
      .map((value) => value.replaceAll('"??", ', ""));
  if (fonts && typeof fonts === "object") {
    return Object.values(fonts)
      .filter((value) => typeof value === "string")
      .map((value) => value.replaceAll('"??", ', ""));
  }
  return [];
}

function resolveThemeKey(themeId, themesMeta) {
  if (!themeId.includes(".")) return themeId;
  const [base, ...rest] = themeId.split(".");
  const variation = rest.join(".");
  const baseMeta = themesMeta[base];
  const variations = normalizeVariations(baseMeta?.variations ?? []);
  if (baseMeta && variations.includes(variation)) {
    return `${base}-${variation}`;
  }
  return themeId;
}

function buildModeCSS(data, mode, bothModes, config, aspectMap) {
  const aspectSelectors = new Map();
  const baseVars = {};

  const bodyStyles = data.body ?? {};
  for (const [key, value] of Object.entries(bodyStyles)) {
    if (key.startsWith("--") && value && value !== "inherit") {
      baseVars[key] = value;
    }
  }

  const derivedQuartzVars = {
    "--light": ["--background-primary", "--background-primary-alt"],
    "--lightgray": ["--background-secondary", "--background-secondary-alt"],
    "--gray": ["--text-muted", "--text-faint", "--text-normal"],
    "--darkgray": ["--text-normal", "--text-muted"],
    "--dark": ["--text-normal", "--text-muted"],
    "--secondary": ["--text-accent", "--color-accent", "--interactive-accent"],
    "--tertiary": [
      "--text-accent-hover",
      "--interactive-accent-hover",
      "--text-accent",
    ],
    "--highlight": [
      "--text-highlight-bg",
      "--background-modifier-hover",
      "--background-modifier-active-hover",
    ],
    "--textHighlight": [
      "--text-highlight-bg",
      "--background-modifier-hover",
      "--background-modifier-active-hover",
    ],
    "--bodyFont": ["--font-text", "--font-interface", "--font-text-theme"],
    "--headerFont": ["--font-text", "--font-interface", "--font-text-theme"],
    "--titleFont": ["--font-text", "--font-interface", "--font-text-theme"],
    "--codeFont": ["--font-monospace", "--font-text", "--font-interface"],
  };

  for (const [quartzVar, sources] of Object.entries(derivedQuartzVars)) {
    if (baseVars[quartzVar]) continue;
    for (const source of sources) {
      if (baseVars[source]) {
        baseVars[quartzVar] = baseVars[source];
        break;
      }
    }
  }

  config.forEach((mapping, index) => {
    const aspect = aspectMap[index] ?? "misc";
    const style = data[mapping.obsidianSelector];
    if (!style) return;
    const selector = mapping.quartzSelector;
    if (!selector) return;

    for (const prop of mapping.properties || []) {
      const value = style[prop];
      if (
        value === undefined ||
        value === null ||
        value === "" ||
        value === "inherit"
      ) {
        continue;
      }
      let selectorMap = aspectSelectors.get(aspect);
      if (!selectorMap) {
        selectorMap = new Map();
        aspectSelectors.set(aspect, selectorMap);
      }
      let propMap = selectorMap.get(selector);
      if (!propMap) {
        propMap = new Map();
        selectorMap.set(selector, propMap);
      }
      propMap.set(prop, value);
    }
  });

  const aspectCSS = {};
  const baseSelector = "body";

  const rootSelector = bothModes
    ? mode === "dark"
      ? ':root:root[saved-theme="dark"]'
      : ":root:root"
    : ":root:root";
  const htmlSelector = bothModes
    ? mode === "dark"
      ? 'html[saved-theme="dark"]'
      : 'html[saved-theme="light"]'
    : "html";

  for (const aspect of ASPECT_ORDER) {
    const selectorMap = aspectSelectors.get(aspect);
    const cssParts = [];

    if (aspect === "base") {
      const varKeys = Object.keys(baseVars).sort();
      const varLines = varKeys.map((key) => {
        const suffix = key.startsWith("--callout-") ? "" : " !important";
        return `  ${key}: ${baseVars[key]}${suffix};`;
      });
      varLines.push("  --quartz-icon-color: currentColor !important;");
      cssParts.push(`${rootSelector} {\n${varLines.join("\n")}\n}`);
      cssParts.push(
        `${htmlSelector} body {\n  background-color: var(--background-primary) !important;\n  color: var(--text-normal) !important;\n}`,
      );
    }

    if (selectorMap && selectorMap.size > 0) {
      const selectors = Array.from(selectorMap.keys()).sort();
      const selectorBlocks = selectors.map((selector) => {
        const propMap = selectorMap.get(selector);
        const props = Array.from(propMap.keys()).sort();
        const resolvedSelector = selector.includes("&")
          ? selector.replaceAll("&", baseSelector)
          : `${baseSelector} ${selector}`;
        const propLines = props.map(
          (prop) => `  ${prop}: ${propMap.get(prop)};`,
        );
        const scopedSelector = resolvedSelector
          .split(",")
          .map((part) => `${htmlSelector} ${part.trim()}`)
          .join(", ");
        return `${scopedSelector} {\n${propLines.join("\n")}\n}`;
      });
      cssParts.push(selectorBlocks.join("\n\n"));
    }

    const css = cssParts.join("\n\n").trim();
    if (css.length > 0) {
      aspectCSS[aspect] = css;
    }
  }

  return aspectCSS;
}

function renderThemeModule(themeData) {
  const lines = [];
  lines.push('import type { ThemeData } from "../types.js";');
  lines.push("");
  lines.push("export const theme: ThemeData = {");
  lines.push("  meta: {");
  lines.push(`    name: ${JSON.stringify(themeData.meta.name)},`);
  lines.push(`    modes: ${JSON.stringify(themeData.meta.modes)},`);
  lines.push(`    variations: ${JSON.stringify(themeData.meta.variations)},`);
  lines.push(`    fonts: ${JSON.stringify(themeData.meta.fonts)},`);
  lines.push("  },");

  for (const mode of ["dark", "light"]) {
    lines.push(`  ${mode}: {`);
    const modeData = themeData[mode] || {};
    for (const aspect of ASPECT_ORDER) {
      if (modeData[aspect]) {
        lines.push(`    ${aspect}: ${toTemplateLiteral(modeData[aspect])},`);
      }
    }
    lines.push("  },");
  }

  lines.push("};");
  lines.push("");
  return lines.join("\n");
}

const reservedIdentifiers = new Set([
  "default",
  "class",
  "function",
  "return",
  "import",
  "export",
  "const",
  "let",
  "var",
  "new",
  "switch",
  "case",
  "if",
  "else",
  "for",
  "while",
  "do",
  "try",
  "catch",
  "finally",
  "throw",
  "extends",
  "super",
  "this",
  "typeof",
  "void",
  "yield",
  "await",
  "break",
  "continue",
  "delete",
  "in",
  "instanceof",
  "with",
]);

function toIdentifier(value) {
  const cleaned = value.replace(/[^a-zA-Z0-9_]/g, "_");
  const base = /^[0-9]/.test(cleaned) ? `_${cleaned}` : cleaned || "theme";
  return reservedIdentifiers.has(base) ? `_${base}` : base;
}

function renderRegistry(themeEntries, themeMetas) {
  const lines = [];
  lines.push('import type { ThemeData, ThemeMeta } from "../types.js";');
  for (const entry of themeEntries) {
    lines.push(
      `import { theme as ${entry.importId} } from ${JSON.stringify(`./${entry.fileBaseName}.js`)};`,
    );
  }
  lines.push("");
  lines.push("export const themeData: Record<string, ThemeData> = {");
  for (const entry of themeEntries) {
    lines.push(`  ${JSON.stringify(entry.id)}: ${entry.importId},`);
  }
  lines.push("};");
  lines.push("");
  lines.push("export const themeMetas: Record<string, ThemeMeta> = {");
  for (const [themeId, meta] of themeMetas) {
    lines.push(`  ${JSON.stringify(themeId)}: {`);
    lines.push(`    name: ${JSON.stringify(meta.name)},`);
    lines.push(`    modes: ${JSON.stringify(meta.modes)},`);
    lines.push(`    variations: ${JSON.stringify(meta.variations)},`);
    lines.push(`    fonts: ${JSON.stringify(meta.fonts)},`);
    lines.push("  },");
  }
  lines.push("};");
  lines.push("");
  return lines.join("\n");
}

async function readJsonIfExists(filePath) {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    if (error && error.code === "ENOENT") return null;
    throw error;
  }
}

async function clearOutputDirectory() {
  await fs.mkdir(outputDir, { recursive: true });
  const entries = await fs.readdir(outputDir, { withFileTypes: true });
  await Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".ts"))
      .map((entry) => fs.unlink(path.join(outputDir, entry.name))),
  );
}

async function main() {
  const { config } = await import(pathToFileURL(configPath).href);
  const configSource = await fs.readFile(configPath, "utf8");
  const aspectMap = buildAspectMap(configSource, config.length);

  const themesJson = JSON.parse(await fs.readFile(themesJsonPath, "utf8"));
  const themesMeta = themesJson.themes ?? {};

  const args = process.argv.slice(2).flatMap((arg) => arg.split(","));
  const filter = new Set(args.map((arg) => arg.trim()).filter(Boolean));

  const themeDirs = (await fs.readdir(resultsDir, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => (filter.size > 0 ? filter.has(name) : true));

  if (themeDirs.length === 0) {
    throw new Error("No themes matched the provided filter.");
  }

  await clearOutputDirectory();

  const themeEntries = [];
  const themeMetas = [];
  const usedIdentifiers = new Set();

  for (const themeId of themeDirs) {
    const themeDir = path.join(resultsDir, themeId);
    const darkData = await readJsonIfExists(path.join(themeDir, "dark.json"));
    const lightData = await readJsonIfExists(path.join(themeDir, "light.json"));
    const hasDark = Boolean(darkData);
    const hasLight = Boolean(lightData);
    if (!hasDark && !hasLight) {
      continue;
    }

    const themeMeta = themesMeta[themeId] ?? {};
    const metaModes = Array.isArray(themeMeta.modes)
      ? themeMeta.modes
      : hasDark && hasLight
        ? ["dark", "light"]
        : hasDark
          ? ["dark"]
          : ["light"];

    const meta = {
      name: themeId,
      modes: metaModes,
      variations: normalizeVariations(themeMeta.variations ?? []),
      fonts: normalizeFonts(themeMeta.fonts ?? []),
    };

    const bothModes = hasDark && hasLight;
    const darkAspectCSS = hasDark
      ? buildModeCSS(darkData, "dark", bothModes, config, aspectMap)
      : {};
    const lightAspectCSS = hasLight
      ? buildModeCSS(lightData, "light", bothModes, config, aspectMap)
      : {};

    const normalizedId = resolveThemeKey(themeId, themesMeta);
    const fileBaseName = normalizedId.replace(/[^a-zA-Z0-9-_]/g, "-");
    const outputPath = path.join(outputDir, `${fileBaseName}.ts`);

    const moduleContent = renderThemeModule({
      meta,
      dark: darkAspectCSS,
      light: lightAspectCSS,
    });

    await fs.writeFile(outputPath, moduleContent, "utf8");
    const baseId = toIdentifier(normalizedId);
    let importId = baseId;
    let suffix = 1;
    while (usedIdentifiers.has(importId)) {
      importId = `${baseId}_${suffix}`;
      suffix += 1;
    }
    usedIdentifiers.add(importId);

    themeEntries.push({ id: normalizedId, fileBaseName, importId });
    themeMetas.push([normalizedId, meta]);
  }

  themeEntries.sort((a, b) => a.id.localeCompare(b.id));
  themeMetas.sort((a, b) => a[0].localeCompare(b[0]));

  const registryContent = renderRegistry(themeEntries, themeMetas);
  await fs.writeFile(
    path.join(outputDir, "_registry.ts"),
    registryContent,
    "utf8",
  );

  console.log(
    `Generated ${themeEntries.length} theme modules and registry in ${path.relative(
      repoRoot,
      outputDir,
    )}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
