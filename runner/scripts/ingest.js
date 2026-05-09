import {
  createReadStream,
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
} from "fs";
import { join } from "path";
import {
  closeDb,
  initializeDb,
  preparedStatements,
} from "./database/driver.js";

const BASELINE_DIR = "./runner/results/_baseline";
const MAX_SYNC_FILE_SIZE = 400 * 1024 * 1024; // 400 MB — below V8 string limit (~512 MB)

function loadBaseline(mode) {
  const baselinePath = `${BASELINE_DIR}/${mode}.json`;
  if (existsSync(baselinePath)) {
    try {
      return JSON.parse(readFileSync(baselinePath, "utf-8"));
    } catch {
      return null;
    }
  }
  return null;
}

function mergeBaselineWithDiff(baseline, diff) {
  if (!baseline) return diff;

  const merged = JSON.parse(JSON.stringify(baseline));

  for (const [selector, props] of Object.entries(diff)) {
    if (!merged[selector]) {
      merged[selector] = {};
    }
    for (const [prop, value] of Object.entries(props)) {
      merged[selector][prop] = value;
    }
  }

  return merged;
}

/**
 * Merge a single selector entry from the diff with the baseline.
 * Returns the merged properties object for that selector.
 */
function mergeBaselineSelector(baseline, selector, diffProps) {
  if (!baseline || !baseline[selector]) return diffProps;
  const merged = { ...baseline[selector] };
  for (const [prop, value] of Object.entries(diffProps)) {
    merged[prop] = value;
  }
  return merged;
}

/**
 * Build insertion entries from a single selector and its properties.
 */
function buildInsertionEntries(themeName, isDarkMode, selector, props) {
  const entries = [];
  for (const [cssVariable, cssValue] of Object.entries(props)) {
    entries.push({
      theme: themeName,
      optionSet: "default",
      isDarkMode: isDarkMode,
      selector: selector,
      property: cssVariable.trim(),
      value: cssValue.trim(),
    });
  }
  return entries;
}

/**
 * Stream-process a large JSON file for database ingestion.
 *
 * Uses raw Buffer-based chunk reading with a byte-level state machine
 * (adapted from prep.js) to avoid creating any strings longer than a
 * single entry — bypassing V8's ~512 MB string limit.
 *
 * For each top-level entry { "selector": { "prop": "val", ... } },
 * merges with baseline on-the-fly and inserts into the database.
 */
function processFileLargeForIngest(file, themeName, isDarkMode, baseline) {
  return new Promise((resolve, reject) => {
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
    let rootOpened = false;
    let inString = false;
    let escaped = false;
    let depth = 0;

    // Parsing phases at root level (depth === 0):
    //   'key'        - reading the key string
    //   'awaitColon' - expecting ':'
    //   'awaitBrace' - expecting '{'
    //   'value'      - inside the value object (depth >= 1)
    //   null         - waiting for next key or end of root
    let phase = null;

    let keyChunks = [];
    let keyStart = -1;
    let entryChunks = [];
    let entryStart = -1;

    let totalInserted = 0;

    function isWhitespace(b) {
      return b === SPACE || b === TAB || b === CR || b === LF;
    }

    function flushEntry() {
      try {
        const keyBuf = Buffer.concat(keyChunks);
        const selector = JSON.parse(keyBuf.toString("utf-8"));

        const entryBuf = Buffer.concat(entryChunks);
        const entryStr = entryBuf.toString("utf-8").trim();
        const cleanEntry = entryStr.endsWith(",")
          ? entryStr.slice(0, -1)
          : entryStr;

        const diffProps = JSON.parse(cleanEntry);
        const mergedProps = mergeBaselineSelector(
          baseline,
          selector,
          diffProps,
        );
        const insertionEntries = buildInsertionEntries(
          themeName,
          isDarkMode,
          selector,
          mergedProps,
        );

        if (insertionEntries.length > 0) {
          preparedStatements.insertBulkStylesTransaction(insertionEntries);
          totalInserted += insertionEntries.length;
        }
      } catch (parseErr) {
        // Log and skip malformed entries
        console.warn(
          `Warning: Failed to parse entry in ${file}: ${parseErr.message}`,
        );
      }
      keyChunks = [];
      entryChunks = [];
    }

    rs.on("data", (chunk) => {
      for (let i = 0; i < chunk.length; i++) {
        const b = chunk[i];

        // Handle string state
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
            if (phase === "key" && depth === 0) {
              keyChunks.push(chunk.subarray(keyStart, i + 1));
              keyStart = -1;
              phase = "awaitColon";
            }
          }
          continue;
        }

        // Not inside a string
        if (!rootOpened) {
          if (b === LBRACE) {
            rootOpened = true;
          }
          continue;
        }

        // Inside the root object
        if (phase === null) {
          if (isWhitespace(b) || b === COMMA) continue;
          if (b === RBRACE) {
            continue;
          }
          if (b === QUOTE) {
            inString = true;
            phase = "key";
            keyChunks = [];
            keyStart = i;
            continue;
          }
          continue;
        }

        if (phase === "key") {
          continue;
        }

        if (phase === "awaitColon") {
          if (isWhitespace(b)) continue;
          if (b === COLON) {
            phase = "awaitBrace";
            continue;
          }
          continue;
        }

        if (phase === "awaitBrace") {
          if (isWhitespace(b)) continue;
          if (b === LBRACE) {
            depth = 1;
            phase = "value";
            entryChunks = [];
            entryStart = i;
            continue;
          }
          continue;
        }

        if (phase === "value") {
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
              entryChunks.push(chunk.subarray(entryStart, i + 1));
              entryStart = -1;
              flushEntry();
              phase = null;
            }
          }
          continue;
        }
      }

      // End of chunk — save partial data for key/entry spanning chunks
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
        entryChunks.push(chunk);
      }
    });

    rs.on("end", () => {
      if (phase === "value" && entryChunks.length > 0) {
        flushEntry();
      }
      resolve(totalInserted);
    });

    rs.on("error", reject);
  });
}

initializeDb();

const darkBaseline = loadBaseline("dark");
const lightBaseline = loadBaseline("light");

if (darkBaseline) {
  console.log(
    `Loaded dark baseline with ${Object.keys(darkBaseline).length} selectors`,
  );
} else {
  console.log("No dark baseline found, using diffs as full styles");
}

if (lightBaseline) {
  console.log(
    `Loaded light baseline with ${Object.keys(lightBaseline).length} selectors`,
  );
} else {
  console.log("No light baseline found, using diffs as full styles");
}

const files = getFilesUnderDirectory("./runner/results/").filter(
  (f) =>
    (f.endsWith("dark.json") || f.endsWith("light.json")) &&
    !f.includes("_baseline") &&
    !f.includes("-variables.json") &&
    !f.includes("-responsive.json") &&
    !f.includes("-diff.json"),
);

(async () => {
  for (const file of files) {
    console.log(`Reading file: ${file}`);
    const isDarkMode = file.endsWith("dark.json");
    const themeName = file
      .replace("runner/results/", "")
      .replace("/dark.json", "")
      .replace("/light.json", "");

    const fileSize = statSync(file).size;
    const baseline = isDarkMode ? darkBaseline : lightBaseline;

    if (fileSize > MAX_SYNC_FILE_SIZE) {
      // Large file — use streaming reader to avoid V8 string limit
      console.log(
        `File ${file} is ${(fileSize / (1024 * 1024)).toFixed(0)} MB, using streaming reader`,
      );
      console.log(`Processing file: ${file}`);
      console.log(`Inserting theme: ${themeName}`);
      const insertedCount = await processFileLargeForIngest(
        file,
        themeName,
        isDarkMode,
        baseline,
      );
      console.log(`Inserted ${insertedCount} entries for file: ${file}`);
    } else {
      // Small file — use existing sync path
      const diffContent = JSON.parse(readFileSync(file, "utf-8"));
      const content = mergeBaselineWithDiff(baseline, diffContent);

      const insertionEntries = [];
      console.log(`Processing file: ${file}`);
      Object.entries(content).forEach(([key, value]) => {
        Object.entries(value).forEach(([cssVariable, cssValue]) => {
          insertionEntries.push({
            theme: themeName,
            optionSet: "default",
            isDarkMode: isDarkMode,
            selector: key,
            property: cssVariable.trim(),
            value: cssValue.trim(),
          });
        });
      });
      console.log(`Inserting theme: ${themeName}`);
      preparedStatements.insertBulkStylesTransaction(insertionEntries);
      console.log(
        `Inserted ${insertionEntries.length} entries for file: ${file}`,
      );
    }
  }

  closeDb();
})();

function getFilesUnderDirectory(dirPath) {
  try {
    const items = readdirSync(dirPath).sort();

    const files = [];
    items.forEach((item) => {
      const itemPath = join(dirPath, item);
      const stats = statSync(itemPath);

      if (stats.isFile()) {
        files.push(itemPath);
      } else if (stats.isDirectory()) {
        const subFiles = getFilesUnderDirectory(itemPath);
        files.push(...subFiles);
      }
    });

    return files;
  } catch (error) {
    throw new Error(`Error reading directory: ${error.message}`);
  }
}
