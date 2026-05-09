import { createHash } from "crypto";
import {
  createReadStream,
  createWriteStream,
  existsSync,
  readdirSync,
  readFileSync,
  renameSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from "fs";

import { join } from "path";
import postcss from "postcss";
import calc from "postcss-calc";
import {
  default as validateColor,
  validateHTMLColorHex,
} from "../../lib/validate-color.mjs";
import w3colorToRgb from "../../lib/w3color.mjs";

const HASH_CACHE_FILE = "./runner/results/.prep-hashes.json";
const FORCE_PREP = process.env.FORCE_PREP === "true";

// V8 max string length is 0x1fffffe8 (~512MB). Use a conservative threshold.
const MAX_SYNC_FILE_SIZE = 400 * 1024 * 1024; // 400MB

function loadHashCache() {
  if (existsSync(HASH_CACHE_FILE)) {
    try {
      return JSON.parse(readFileSync(HASH_CACHE_FILE, "utf-8"));
    } catch {
      return {};
    }
  }
  return {};
}

function saveHashCache(cache) {
  const sortedCache = {};
  for (const key of Object.keys(cache).sort()) {
    sortedCache[key] = cache[key];
  }
  writeFileSync(HASH_CACHE_FILE, JSON.stringify(sortedCache, null, 2));
}

function getFileHash(content) {
  return createHash("md5").update(content).digest("hex");
}

/**
 * Compute file hash via streaming to avoid loading full content into a string.
 * Produces identical md5 hex output as getFileHash(readFileSync(file, "utf-8")).
 */
function getFileHashStreaming(filePath) {
  return new Promise((resolve, reject) => {
    const hash = createHash("md5");
    const stream = createReadStream(filePath, { encoding: "utf-8" });
    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("end", () => resolve(hash.digest("hex")));
    stream.on("error", reject);
  });
}

// from: https://github.com/Kyza/color-regex/
// const colorRegex = /(#)(?:([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?|([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])?)|(rgb|rgba)\((?:\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s*,\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s*,\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)(?:\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s+(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s+(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s*|\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*|\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s+(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s+(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)(?:\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*)\)/gi;
const colorRegex =
  /(#)(?:([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?|([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])?)|(rgb|rgba)\((?:\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s*,\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s*,\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)(?:\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s+(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s+(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s*|\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*|\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s+(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s+(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)(?:\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*)\)/gi;
const hslColorRegex =
  /(hsl|hsla)\((?:\s*(-?[0-9]+(?:\.[0-9]+)?(?:deg|rad|grad|turn)?)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(-?[0-9]+(?:\.[0-9]+)?(?:deg|rad|grad|turn)?)\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(-?[0-9]+(?:\.[0-9]+)?(?:deg|rad|grad|turn)?)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*)\)/gi;
const vendorPrefixes = [
  "ah",
  "apple",
  "atsc",
  "epub",
  "hp",
  "khtml",
  "moz",
  "ms",
  "o",
  "rim",
  "ro",
  "tc",
  "wap",
  "webkit",
  "xv",
];

const files = getFilesUnderDirectory("./runner/results/").filter(
  (f) =>
    (f.endsWith("dark.json") || f.endsWith("light.json")) &&
    !f.includes("-variables.json") &&
    !f.includes("-responsive.json") &&
    !f.includes("-diff.json"),
);

const hashCache = loadHashCache();
let processedCount = 0;
let skippedCount = 0;

/**
 * Process a single entry (top-level key-value pair) from the JSON.
 * Applies vendor prefix removal, calc resolution, and color conversion
 * to all CSS variable key-value pairs within the entry.
 */
function processEntry(value) {
  const result = {};
  Object.entries(value).forEach(([cssVariable, cssValue]) => {
    cssVariable = removeVendorPrefix(cssVariable);
    cssValue = removeVendorPrefix(cssValue);
    cssValue = resolveCalcExpressions(cssValue);
    cssValue = stringToRgb(cssValue);
    result[cssVariable.trim()] = cssValue.trim();
  });
  return result;
}

/**
 * Process a file that fits within V8 string limits using the original
 * synchronous approach (iterates until stable).
 */
function processFileSmall(file, content) {
  let processedContent = content;
  let contentCompare = null;
  let iteration = 0;
  while (contentCompare !== processedContent && iteration < 1000) {
    contentCompare = processedContent;
    const result = {};
    Object.entries(JSON.parse(processedContent)).forEach(([key, value]) => {
      result[key] = processEntry(value);
    });
    processedContent = JSON.stringify(result);
    iteration++;
  }
  return { processedContent, iteration };
}

/**
 * Stream-process a large JSON file that exceeds V8 string limits.
 *
 * Uses raw Buffer-based chunk reading with a byte-level state machine
 * to avoid creating any strings longer than a single entry.
 * Works on both pretty-printed and single-line (minified) JSON.
 *
 * The JSON structure is a flat object of objects:
 *   { "selector": { "var": "val", ... }, ... }
 *
 * Each top-level entry is extracted, parsed, processed, and written
 * incrementally to a temp file.
 */
function processFileLarge(file) {
  return new Promise((resolve, reject) => {
    const tmpFile = file + ".prep-tmp";
    const ws = createWriteStream(tmpFile, { encoding: "utf-8" });
    const rs = createReadStream(file); // raw Buffers, no encoding

    // Byte constants
    const QUOTE = 0x22; // "
    const BACKSLASH = 0x5c; // \
    const LBRACE = 0x7b; // {
    const RBRACE = 0x7d; // }
    const COLON = 0x3a; // :
    const COMMA = 0x2c; // ,
    const SPACE = 0x20;
    const TAB = 0x09;
    const CR = 0x0d;
    const LF = 0x0a;

    // State machine
    let rootOpened = false; // have we seen the opening { of the root object?
    let inString = false; // are we inside a JSON string?
    let escaped = false; // was the previous char a backslash inside a string?
    let depth = 0; // brace nesting depth (0 = root level)

    // Parsing phases at root level (depth === 0):
    //   'key'       - reading the key string
    //   'awaitColon' - expecting ':'
    //   'awaitBrace' - expecting '{'
    //   'value'     - inside the value object (depth >= 1)
    //   null        - waiting for next key or end of root
    let phase = null;

    let keyChunks = []; // Buffer chunks for the current key string
    let keyStart = -1; // start offset within current chunk for key
    let entryChunks = []; // Buffer chunks for the current entry value
    let entryStart = -1; // start offset within current chunk for entry
    let isFirstEntry = true;

    ws.write("{");

    function isWhitespace(b) {
      return b === SPACE || b === TAB || b === CR || b === LF;
    }

    function flushEntry() {
      try {
        const keyBuf = Buffer.concat(keyChunks);
        // keyBuf includes the surrounding quotes; parse to get unescaped key
        const entryKey = JSON.parse(keyBuf.toString("utf-8"));

        const entryBuf = Buffer.concat(entryChunks);
        const entryStr = entryBuf.toString("utf-8").trim();
        // Remove trailing comma if present
        const cleanEntry = entryStr.endsWith(",")
          ? entryStr.slice(0, -1)
          : entryStr;

        const entryValue = JSON.parse(cleanEntry);
        const processed = processEntry(entryValue);
        const prefix = isFirstEntry ? "\n" : ",\n";
        ws.write(
          prefix + JSON.stringify(entryKey) + ":" + JSON.stringify(processed),
        );
        isFirstEntry = false;
      } catch (parseErr) {
        // If parsing fails, write back as-is
        const keyBuf = Buffer.concat(keyChunks);
        const entryBuf = Buffer.concat(entryChunks);
        const prefix = isFirstEntry ? "\n" : ",\n";
        ws.write(
          prefix + keyBuf.toString("utf-8") + ":" + entryBuf.toString("utf-8"),
        );
        isFirstEntry = false;
      }
      keyChunks = [];
      entryChunks = [];
    }

    rs.on("data", (chunk) => {
      // chunk is a Buffer
      for (let i = 0; i < chunk.length; i++) {
        const b = chunk[i];

        // Handle string state (applies in all phases)
        if (inString) {
          if (escaped) {
            escaped = false;
            continue;
          }
          if (b === BACKSLASH) {
            escaped = true;
            continue;
          }
          if (b === QUOTE) {
            inString = false;
            // If we're reading a key at root level, end of key string
            if (phase === "key" && depth === 0) {
              // Capture the rest of the key including closing quote
              keyChunks.push(chunk.subarray(keyStart, i + 1));
              keyStart = -1;
              phase = "awaitColon";
            }
          }
          continue;
        }

        // Not inside a string
        if (!rootOpened) {
          // Looking for the opening { of the root object
          if (b === LBRACE) {
            rootOpened = true;
          }
          continue;
        }

        // We're inside the root object
        if (phase === null) {
          // At root level, waiting for a key or closing brace
          if (isWhitespace(b) || b === COMMA) continue;
          if (b === RBRACE) {
            // End of root object
            continue;
          }
          if (b === QUOTE) {
            // Start of a key string
            inString = true;
            phase = "key";
            keyChunks = [];
            keyStart = i; // include the opening quote
            continue;
          }
          continue;
        }

        if (phase === "key") {
          // We're inside the key string — handled by string state above
          // This shouldn't be reached because inString is true during key reading
          continue;
        }

        if (phase === "awaitColon") {
          if (isWhitespace(b)) continue;
          if (b === COLON) {
            phase = "awaitBrace";
            continue;
          }
          // Unexpected byte — skip
          continue;
        }

        if (phase === "awaitBrace") {
          if (isWhitespace(b)) continue;
          if (b === LBRACE) {
            depth = 1;
            phase = "value";
            entryChunks = [];
            entryStart = i; // include the opening {
            continue;
          }
          // Unexpected — skip
          continue;
        }

        if (phase === "value") {
          // Inside the entry value object
          if (b === QUOTE) {
            inString = true;
            continue;
          }
          if (b === LBRACE) {
            depth++;
            continue;
          }
          if (b === RBRACE) {
            depth--;
            if (depth === 0) {
              // End of this entry — capture through closing }
              entryChunks.push(chunk.subarray(entryStart, i + 1));
              entryStart = -1;
              flushEntry();
              phase = null;
            }
          }
          continue;
        }
      }

      // End of chunk — save partial data for key/entry that spans chunks
      if (phase === "key" && keyStart >= 0) {
        keyChunks.push(chunk.subarray(keyStart));
        keyStart = 0;
      }
      if (
        (phase === "value" ||
          phase === "awaitBrace" ||
          phase === "awaitColon") &&
        entryStart >= 0
      ) {
        entryChunks.push(chunk.subarray(entryStart));
        entryStart = 0;
      } else if (phase === "value" && entryStart === -1) {
        // Entry continues from a previous chunk and we haven't set entryStart
        // This means the entire chunk is part of the entry
        entryChunks.push(chunk);
      }
    });

    rs.on("end", () => {
      // Flush any remaining entry (shouldn't happen with well-formed JSON)
      if (phase === "value" && entryChunks.length > 0) {
        flushEntry();
      }
      ws.write("\n}");
      ws.end(() => {
        try {
          unlinkSync(file);
          renameSync(tmpFile, file);
        } catch (err) {
          reject(err);
          return;
        }
        resolve(1);
      });
    });

    rs.on("error", reject);
    ws.on("error", reject);
  });
}

for (const file of files) {
  const fileSize = statSync(file).size;
  const isLarge = fileSize > MAX_SYNC_FILE_SIZE;

  let inputHash;
  if (isLarge) {
    inputHash = await getFileHashStreaming(file);
  } else {
    const content = readFileSync(file, "utf-8");
    inputHash = getFileHash(content);

    if (!FORCE_PREP && hashCache[file] === inputHash) {
      skippedCount++;
      continue;
    }

    console.log(`Reading file: ${file}`);
    const themeName = file
      .replace("runner/results/", "")
      .replace("/dark.json", "")
      .replace("/light.json", "");
    console.log(`Processing file: ${file}`);
    const { processedContent, iteration } = processFileSmall(file, content);
    console.log(`(${iteration} iterations) Prepped theme: ${themeName}`);
    writeFileSync(file, processedContent, "utf-8");

    hashCache[file] = inputHash;
    saveHashCache(hashCache);
    processedCount++;
    console.log(`Prepped entries for file: ${file}`);
    continue;
  }

  // Large file path
  if (!FORCE_PREP && hashCache[file] === inputHash) {
    skippedCount++;
    continue;
  }

  console.log(`Reading file: ${file} (large file: streaming mode)`);
  const themeName = file
    .replace("runner/results/", "")
    .replace("/dark.json", "")
    .replace("/light.json", "");
  console.log(`Processing file: ${file}`);
  const iteration = await processFileLarge(file);
  console.log(`(${iteration} iterations) Prepped theme: ${themeName}`);

  // Store hash of the *processed* output so the second run skips it
  hashCache[file] = await getFileHashStreaming(file);
  saveHashCache(hashCache);
  processedCount++;
  console.log(`Prepped entries for file: ${file}`);
}

console.log(
  `Prep complete. Processed: ${processedCount}, Skipped: ${skippedCount}`,
);

function resolveCalcExpressions(cssValue) {
  const result = postcss()
    .use(calc({ preserve: false }))
    .process(`:root { --temp: ${cssValue}; }`, { from: undefined });

  return result.root.nodes[0].nodes[0].value
    .replace("--temp: ", "")
    .replace(";", "")
    .trim();
}

function removeVendorPrefix(cssProperty) {
  if (cssProperty.startsWith("-")) {
    for (const prefix of vendorPrefixes) {
      if (cssProperty.startsWith(`-${prefix}-`)) {
        return cssProperty.replace(`-${prefix}-`, "");
      }
    }
  }
  return cssProperty;
}

function stringToRgb(cssValue) {
  // replace all colors in the string with their rgb() equivalent
  // unless they are already in hex format (w3colors does not support hexa)
  const matches = cssValue.match(colorRegex);
  for (const match of matches || []) {
    // fix all hsl colors with float percentages
    if (hslColorRegex.test(match)) {
      match.replace(/(\d+\.\d+)%/g, (_, p1) => {
        const rounded = Math.round(parseFloat(p1));
        cssValue = cssValue.replace(`${p1}%`, `${rounded}%`);
        return _;
      });
    }
    if (validateColor(match) && !validateHTMLColorHex(match)) {
      const rgb = w3colorToRgb(match);
      if (rgb) {
        cssValue = cssValue.replace(match, rgb);
      }
    }
  }
  return cssValue;
}

function getFilesUnderDirectory(dirPath) {
  try {
    // Read the directory contents
    const items = readdirSync(dirPath).sort();

    // Initialize an array to hold the file paths
    const files = [];
    // Iterate over each item in the directory
    items.forEach((item) => {
      const itemPath = join(dirPath, item);
      const stats = statSync(itemPath);

      // Check if the item is a file
      if (stats.isFile()) {
        // Add the file path to the array
        files.push(itemPath);
      } else if (stats.isDirectory()) {
        // If it's a directory, recursively get files from it
        const subFiles = getFilesUnderDirectory(itemPath);
        files.push(...subFiles);
      }
    });

    return files;
  } catch (error) {
    throw new Error(`Error reading directory: ${error.message}`);
  }
}
