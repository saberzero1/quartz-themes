import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "fs";
import { basename, dirname, join, resolve } from "path";

const FONTS_DIR = resolve("./fonts");

function sanitizeFontFilename(family, usedNames) {
  const base = family
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  if (!usedNames.has(base)) {
    usedNames.add(base);
    return base;
  }
  let n = 1;
  while (usedNames.has(`${base}-${n}`)) {
    n++;
  }
  const candidate = `${base}-${n}`;
  usedNames.add(candidate);
  return candidate;
}

function extractFontFaceBlocks(cssText) {
  const blocks = [];
  const regex = /@font-face\s*\{/gi;
  let match = regex.exec(cssText);

  while (match) {
    const braceStart = cssText.indexOf("{", match.index);
    if (braceStart === -1) {
      match = regex.exec(cssText);
      continue;
    }

    let depth = 1;
    let parenDepth = 0;
    let inString = false;
    let stringChar = "";
    let isEscaped = false;
    let i = braceStart + 1;

    for (; i < cssText.length; i++) {
      const char = cssText[i];

      if (isEscaped) {
        isEscaped = false;
        continue;
      }

      if (inString) {
        if (char === "\\") {
          isEscaped = true;
        } else if (char === stringChar) {
          inString = false;
        }
        continue;
      }

      if (char === '"' || char === "'") {
        inString = true;
        stringChar = char;
        continue;
      }

      if (char === "(") {
        parenDepth++;
        continue;
      }

      if (char === ")") {
        if (parenDepth > 0) parenDepth--;
        continue;
      }

      if (char === "{") {
        depth++;
        continue;
      }

      if (char === "}" && parenDepth === 0) {
        depth--;
        if (depth === 0) {
          i++;
          break;
        }
      }
    }

    if (depth === 0) {
      blocks.push(cssText.slice(match.index, i));
      regex.lastIndex = i;
    }

    match = regex.exec(cssText);
  }

  return blocks;
}

function extractCssPropertyValue(block, property) {
  const regex = new RegExp(`\\b${property}\\s*:`, "i");
  const match = regex.exec(block);
  if (!match) return null;

  let index = match.index + match[0].length;
  let value = "";
  let parenDepth = 0;
  let inString = false;
  let stringChar = "";
  let isEscaped = false;

  for (let i = index; i < block.length; i++) {
    const char = block[i];

    if (isEscaped) {
      value += char;
      isEscaped = false;
      continue;
    }

    if (inString) {
      value += char;
      if (char === "\\") {
        isEscaped = true;
      } else if (char === stringChar) {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'") {
      inString = true;
      stringChar = char;
      value += char;
      continue;
    }

    if (char === "(") {
      parenDepth++;
      value += char;
      continue;
    }

    if (char === ")") {
      if (parenDepth > 0) parenDepth--;
      value += char;
      continue;
    }

    if ((char === ";" || char === "}") && parenDepth === 0) {
      break;
    }

    value += char;
  }

  return value.trim();
}

function splitCssList(value) {
  const parts = [];
  let current = "";
  let parenDepth = 0;
  let inString = false;
  let stringChar = "";
  let isEscaped = false;

  for (let i = 0; i < value.length; i++) {
    const char = value[i];

    if (isEscaped) {
      current += char;
      isEscaped = false;
      continue;
    }

    if (inString) {
      current += char;
      if (char === "\\") {
        isEscaped = true;
      } else if (char === stringChar) {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'") {
      inString = true;
      stringChar = char;
      current += char;
      continue;
    }

    if (char === "(") {
      parenDepth++;
      current += char;
      continue;
    }

    if (char === ")") {
      if (parenDepth > 0) parenDepth--;
      current += char;
      continue;
    }

    if (char === "," && parenDepth === 0) {
      if (current.trim()) parts.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  if (current.trim()) parts.push(current.trim());
  return parts;
}

function normalizeFontFormat(value) {
  if (!value) return null;
  const normalized = value.toLowerCase().replace(/['\"]/g, "");
  if (normalized.includes("woff2")) return "woff2";
  if (normalized.includes("woff")) return "woff";
  if (normalized.includes("opentype") || normalized.includes("otf"))
    return "otf";
  if (normalized.includes("truetype") || normalized.includes("ttf"))
    return "ttf";
  return null;
}

function detectFontFormat(buffer, formatHint, mimeType, url) {
  if (buffer && buffer.length >= 4) {
    const magic = buffer.slice(0, 4).toString("ascii");
    if (magic === "wOF2") return "woff2";
    if (magic === "wOFF") return "woff";
    if (magic === "OTTO") return "otf";
    if (buffer.readUInt32BE(0) === 0x00010000) return "ttf";
  }

  const hintFormat = normalizeFontFormat(formatHint);
  if (hintFormat) return hintFormat;

  const mimeFormat = normalizeFontFormat(mimeType);
  if (mimeFormat) return mimeFormat;

  if (url) {
    const lower = url.toLowerCase();
    if (lower.endsWith(".woff2")) return "woff2";
    if (lower.endsWith(".woff")) return "woff";
    if (lower.endsWith(".otf")) return "otf";
    if (lower.endsWith(".ttf")) return "ttf";
  }

  return "ttf";
}

function selectBestFontSource(sources) {
  const rank = (format) => {
    if (format === "woff2") return 0;
    if (format === "woff") return 1;
    if (format === "ttf" || format === "otf") return 2;
    return 3;
  };

  return sources.slice().sort((a, b) => rank(a.format) - rank(b.format))[0];
}

async function tryConvertToWoff2(buffer) {
  try {
    const module = await import("wawoff2");
    const converter = module.default || module;
    if (typeof converter === "function") {
      return await converter(buffer);
    }
    if (converter && typeof converter.compress === "function") {
      return await converter.compress(buffer);
    }
    if (converter && typeof converter.toWoff2 === "function") {
      return await converter.toWoff2(buffer);
    }
  } catch {
    return null;
  }
  return null;
}

export async function extractFonts(themeName, sourceCSSPath) {
  const cssText = readFileSync(sourceCSSPath, "utf-8");
  const fontFaceBlocks = extractFontFaceBlocks(cssText);
  if (fontFaceBlocks.length === 0) return;

  const manifestFonts = [];
  const outputDir = join(FONTS_DIR, themeName);
  let outputDirCreated = false;
  const usedFilenames = new Set();

  for (const block of fontFaceBlocks) {
    const familyValue = extractCssPropertyValue(block, "font-family");
    if (!familyValue) continue;

    const fontFamily = familyValue.trim().replace(/^['\"]|['\"]$/g, "");
    const fontStyle = (
      extractCssPropertyValue(block, "font-style") || "normal"
    ).trim();
    const fontWeight = (
      extractCssPropertyValue(block, "font-weight") || "400"
    ).trim();
    const unicodeRangeValue = extractCssPropertyValue(block, "unicode-range");
    const unicodeRange = unicodeRangeValue ? unicodeRangeValue.trim() : null;
    const srcValue = extractCssPropertyValue(block, "src");
    if (!srcValue) continue;

    const srcParts = splitCssList(srcValue);
    const sources = [];

    for (const part of srcParts) {
      if (/^local\(/i.test(part)) continue;

      const urlMatch = part.match(/url\(([^)]+)\)/i);
      if (!urlMatch) continue;

      const rawUrl = urlMatch[1].trim().replace(/^['\"]|['\"]$/g, "");
      const formatMatch = part.match(/format\(([^)]+)\)/i);
      const formatHint = formatMatch
        ? formatMatch[1].trim().replace(/^['\"]|['\"]$/g, "")
        : null;

      if (rawUrl.startsWith("data:")) {
        const dataMatch = rawUrl.match(
          /^data:([^;,]+)(?:;[^;,]*)*;base64,(.+)$/i,
        );
        if (!dataMatch) continue;
        const mimeType = dataMatch[1].toLowerCase();
        const base64 = dataMatch[2].replace(/\s+/g, "");
        const buffer = Buffer.from(base64, "base64");
        const format = detectFontFormat(buffer, formatHint, mimeType, null);
        sources.push({ type: "base64", buffer, format, mimeType });
        continue;
      }

      if (rawUrl.startsWith("https://")) {
        const format =
          normalizeFontFormat(formatHint) || normalizeFontFormat(rawUrl);
        sources.push({ type: "cdn", url: rawUrl, format, formatHint });
      }
    }

    if (sources.length === 0) continue;

    const source = selectBestFontSource(sources);
    if (!source) continue;

    try {
      let buffer = source.buffer;
      let detectedFormat = source.format;
      let sourceType = source.type === "cdn" ? "cdn" : "base64";
      let sourceUrl = source.type === "cdn" ? source.url : null;

      if (source.type === "cdn") {
        const response = await fetch(source.url);
        if (!response.ok) {
          throw new Error(`Failed to download font: ${response.status}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        buffer = Buffer.from(arrayBuffer);
        detectedFormat = detectFontFormat(
          buffer,
          source.formatHint,
          response.headers.get("content-type"),
          source.url,
        );
      }

      let finalBuffer = buffer;
      let finalFormat = detectedFormat || "ttf";

      if (finalFormat !== "woff2") {
        const converted = await tryConvertToWoff2(buffer);
        if (converted) {
          finalBuffer = Buffer.from(converted);
          finalFormat = "woff2";
        }
      }

      const filenameBase = sanitizeFontFilename(fontFamily, usedFilenames);
      const extension =
        finalFormat === "woff2"
          ? "woff2"
          : finalFormat === "woff"
            ? "woff"
            : finalFormat === "otf"
              ? "otf"
              : "ttf";
      const filename = `${filenameBase}.${extension}`;

      if (!outputDirCreated) {
        mkdirSync(outputDir, { recursive: true });
        outputDirCreated = true;
      }

      writeFileSync(join(outputDir, filename), finalBuffer);
      manifestFonts.push({
        family: fontFamily,
        style: fontStyle,
        weight: fontWeight,
        file: filename,
        format: finalFormat,
        unicodeRange,
        sourceType,
        sourceUrl,
      });
    } catch (error) {
      console.warn(
        `  Font extraction failed for ${fontFamily}: ${error.message}`,
      );
    }
  }

  if (manifestFonts.length === 0) return;
  if (!outputDirCreated) {
    mkdirSync(outputDir, { recursive: true });
  }

  const sourceTheme = basename(dirname(sourceCSSPath));
  const manifest = {
    extractedAt: new Date().toISOString(),
    sourceTheme,
    fonts: manifestFonts,
  };

  writeFileSync(
    join(outputDir, "manifest.json"),
    JSON.stringify(manifest, null, 2),
  );
}

export function resolveManifest(themeName) {
  const manifestPath = join(FONTS_DIR, themeName, "manifest.json");
  if (!existsSync(manifestPath)) return null;
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  if (manifest.base) {
    return resolveManifest(manifest.base);
  }
  return manifest;
}

export function resolveManifestPath(themeName) {
  const manifestPath = join(FONTS_DIR, themeName, "manifest.json");
  if (!existsSync(manifestPath)) return null;
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  if (manifest.base) {
    return resolveManifestPath(manifest.base);
  }
  return { manifest, themeName };
}

function writeVariationManifest(variationName, baseName) {
  const outputDir = join(FONTS_DIR, variationName);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(
    join(outputDir, "manifest.json"),
    JSON.stringify({ base: baseName }, null, 2),
  );
}

export function extractFontsFromDir(themesDir) {
  const dirs = readdirSync(themesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const themes = [];
  for (const dir of dirs) {
    const cssPath = join(themesDir, dir, "theme.css");
    const legacyPath = join(themesDir, dir, "obsidian.css");
    const sourcePath = existsSync(cssPath)
      ? cssPath
      : existsSync(legacyPath)
        ? legacyPath
        : null;
    if (sourcePath) {
      themes.push({ name: dir, sourcePath });
    }
  }
  return themes;
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error(
      "Usage: node font-extractor.js <theme-css-path> <output-name>",
    );
    console.error(
      "       node font-extractor.js --vault <vault-path> [theme-name...]",
    );
    console.error("       node font-extractor.js --all <vault-path>");
    process.exit(1);
  }

  if (args[0] === "--all") {
    const vaultPath = args[1] || resolve("./runner/vault");
    const themesDir = join(vaultPath, ".obsidian/themes");
    if (!existsSync(themesDir)) {
      console.error(`Themes directory not found: ${themesDir}`);
      process.exit(1);
    }

    const themes = extractFontsFromDir(themesDir);
    console.log(`Found ${themes.length} themes with CSS files`);

    const installedLower = new Set(themes.map((t) => t.name.toLowerCase()));

    let extracted = 0;
    let skipped = 0;
    for (const theme of themes) {
      const outputName = theme.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      try {
        await extractFonts(outputName, theme.sourcePath);
        const manifestPath = join(FONTS_DIR, outputName, "manifest.json");
        if (existsSync(manifestPath)) {
          const m = JSON.parse(readFileSync(manifestPath, "utf8"));
          console.log(`  ${theme.name} → ${m.fonts.length} fonts`);
          extracted++;
        } else {
          console.log(`  ${theme.name} → no fonts`);
          skipped++;
        }
      } catch (error) {
        console.warn(`  ${theme.name} → error: ${error.message}`);
        skipped++;
      }
    }

    const themesJsonPath = resolve("./themes.json");
    let variationCount = 0;
    if (existsSync(themesJsonPath)) {
      const themesConfig = JSON.parse(readFileSync(themesJsonPath, "utf8"));
      const themeKeys = Object.keys(themesConfig.themes || {});

      for (const key of themeKeys) {
        if (!key.includes(".")) continue;
        const baseName = key.split(".")[0];
        const baseManifest = join(FONTS_DIR, baseName, "manifest.json");
        if (!existsSync(baseManifest)) continue;

        writeVariationManifest(key, baseName);
        variationCount++;
      }

      if (variationCount > 0) {
        console.log(`\nLinked ${variationCount} variations to base themes`);
      }
    }

    console.log(
      `\nDone: ${extracted} extracted, ${skipped} skipped, ${variationCount} variations linked`,
    );
    return;
  }

  if (args[0] === "--vault") {
    const vaultPath = args[1] || resolve("./runner/vault");
    const themeNames = args.slice(2);
    const themesDir = join(vaultPath, ".obsidian/themes");

    if (themeNames.length === 0) {
      console.error("Specify one or more theme names after --vault <path>");
      process.exit(1);
    }

    for (const name of themeNames) {
      const themeDir = join(themesDir, name);
      const cssPath = join(themeDir, "theme.css");
      const legacyPath = join(themeDir, "obsidian.css");
      const sourcePath = existsSync(cssPath)
        ? cssPath
        : existsSync(legacyPath)
          ? legacyPath
          : null;

      if (!sourcePath) {
        console.warn(`No CSS found for theme: ${name}`);
        continue;
      }

      const outputName = name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      try {
        await extractFonts(outputName, sourcePath);
        const manifestPath = join(FONTS_DIR, outputName, "manifest.json");
        if (existsSync(manifestPath)) {
          const m = JSON.parse(readFileSync(manifestPath, "utf8"));
          console.log(`${name} → ${m.fonts.length} fonts`);
        } else {
          console.log(`${name} → no fonts`);
        }
      } catch (error) {
        console.error(`${name} → error: ${error.message}`);
      }
    }
    return;
  }

  const sourcePath = args[0];
  const outputName = args[1];
  if (!outputName) {
    console.error(
      "Usage: node font-extractor.js <theme-css-path> <output-name>",
    );
    process.exit(1);
  }
  if (!existsSync(sourcePath)) {
    console.error(`File not found: ${sourcePath}`);
    process.exit(1);
  }

  await extractFonts(outputName, sourcePath);
  const manifestPath = join(FONTS_DIR, outputName, "manifest.json");
  if (existsSync(manifestPath)) {
    const m = JSON.parse(readFileSync(manifestPath, "utf8"));
    console.log(`Extracted ${m.fonts.length} fonts → fonts/${outputName}/`);
  } else {
    console.log("No fonts found in source CSS");
  }
}

const isDirectRun =
  import.meta.url === `file://${process.argv[1]}` ||
  import.meta.url === new URL(process.argv[1], "file://").href;

if (isDirectRun) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
