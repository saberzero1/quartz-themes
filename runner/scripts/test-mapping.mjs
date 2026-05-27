import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { config } from "./config.js";

const args = process.argv.slice(2);

const parseArgs = (input) => {
  const options = { all: false };

  for (let i = 0; i < input.length; i += 1) {
    const arg = input[i];

    if (arg === "--all") {
      options.all = true;
      continue;
    }

    if (arg === "--theme") {
      const value = input[i + 1];
      if (!value || value.startsWith("--")) {
        return { error: "Missing value for --theme" };
      }
      options.theme = value;
      i += 1;
      continue;
    }

    if (arg === "--mode") {
      const value = input[i + 1];
      if (!value || value.startsWith("--")) {
        return { error: "Missing value for --mode" };
      }
      options.mode = value;
      i += 1;
      continue;
    }

    if (arg === "--obsidian-selector") {
      const value = input[i + 1];
      if (!value || value.startsWith("--")) {
        return { error: "Missing value for --obsidian-selector" };
      }
      options.obsidianSelector = value;
      i += 1;
      continue;
    }

    if (arg === "--config-index") {
      const value = input[i + 1];
      if (!value || value.startsWith("--")) {
        return { error: "Missing value for --config-index" };
      }
      const parsed = Number.parseInt(value, 10);
      if (Number.isNaN(parsed)) {
        return { error: "Invalid value for --config-index" };
      }
      options.configIndex = parsed;
      i += 1;
      continue;
    }

    if (arg === "--aspect") {
      const value = input[i + 1];
      if (!value || value.startsWith("--")) {
        return { error: "Missing value for --aspect" };
      }
      options.aspect = value.toLowerCase();
      i += 1;
      continue;
    }

    return { error: `Unknown argument: ${arg}` };
  }

  const modeCount = [
    options.obsidianSelector,
    options.configIndex !== undefined,
    options.all,
    options.aspect,
  ].filter(Boolean).length;

  if (!options.theme || !options.mode) {
    return { error: "Both --theme and --mode are required" };
  }

  if (modeCount !== 1) {
    return {
      error:
        "Specify exactly one of --obsidian-selector, --config-index, --all, or --aspect",
    };
  }

  return { options };
};

const usage = () => {
  console.error(
    "Usage: node runner/scripts/test-mapping.mjs --theme <name> --mode <dark|light> (--obsidian-selector <selector> | --config-index <index> | --all | --aspect <name>)",
  );
};

const exitWith = (code, message) => {
  if (message) {
    console.error(message);
  }
  process.exit(code);
};

const result = parseArgs(args);
if (result.error) {
  usage();
  exitWith(3, result.error);
}

const { options } = result;

const themePath = path.resolve(
  process.cwd(),
  "runner",
  "results",
  options.theme,
  `${options.mode}.json`,
);

if (!fs.existsSync(themePath)) {
  exitWith(3, `Theme data not found: ${themePath}`);
}

const loadJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));

const themeData = loadJson(themePath);
const baselinePath = path.resolve(
  process.cwd(),
  "runner",
  "results",
  "_baseline",
  `${options.mode}.json`,
);
const baselineData = fs.existsSync(baselinePath)
  ? loadJson(baselinePath)
  : null;

const getAspect = (selector) => {
  const value = (selector || "").toLowerCase();
  if (value.includes("callout")) return "callouts";
  if (value.includes("code") || value.includes("pre")) return "code";
  if (
    value.includes("explorer") ||
    value.includes("folder") ||
    value.includes("nav-")
  ) {
    return "explorer";
  }
  if (value.includes("search") || value.includes("prompt")) return "search";
  if (
    value.includes("toc") ||
    value.includes("outline") ||
    value.includes("tree-item")
  ) {
    return "toc";
  }
  if (value.includes("graph")) return "graph";
  if (value.includes("footer")) return "footer";
  if (
    value.includes("heading") ||
    ["h1", "h2", "h3", "h4", "h5", "h6"].some((tag) => value.includes(tag))
  ) {
    return "typography";
  }
  if (
    value.includes("table") ||
    value.includes("thead") ||
    value.includes("tbody")
  ) {
    return "tables";
  }
  if (value.includes("blockquote")) return "blockquotes";
  if (value.includes("checkbox") || value.includes("task-list"))
    return "checkboxes";
  if (value.includes("popover")) return "popover";
  if (value.includes("tag")) return "links";
  if (value.includes("a.") || value.includes(" a ") || value.includes("a:")) {
    return "links";
  }
  return "misc/base";
};

const isDefaultValue = (value, property) => {
  if (value === undefined || value === null) return true;
  const normalized = String(value).trim().toLowerCase();
  if (
    normalized === "" ||
    normalized === "inherit" ||
    normalized === "initial"
  ) {
    return true;
  }
  if (normalized === "unset") return true;
  if (normalized === "none" && property !== "display") return true;
  return false;
};

const selectorExists = (data, selector) =>
  Object.prototype.hasOwnProperty.call(data, selector);

const evaluateMapping = (entry, index) => {
  const obsidianSelector = entry.obsidianSelector;
  const quartzSelector = entry.quartzSelector || "";
  const aspect = getAspect(quartzSelector);
  const hasSelector = selectorExists(themeData, obsidianSelector);
  const selectorData = hasSelector ? themeData[obsidianSelector] : undefined;
  const baselineSelector =
    baselineData && selectorExists(baselineData, obsidianSelector)
      ? baselineData[obsidianSelector]
      : undefined;

  const properties = {};
  const missing = [];
  let mappingHasValues = true;

  const hasBodyVariables =
    obsidianSelector === "body" &&
    selectorData &&
    Object.keys(selectorData).some((key) => key.startsWith("--"));

  for (const property of entry.properties) {
    const value = selectorData?.[property];
    let status = "missing";
    let baselineValue;
    let resolvedValue = value;

    if (hasSelector && !isDefaultValue(value, property)) {
      if (baselineSelector && baselineSelector[property] !== undefined) {
        baselineValue = baselineSelector[property];
        if (value === baselineValue) {
          status = "default";
        } else {
          status = "found";
        }
      } else {
        status = "found";
      }
    }

    if (status === "missing" && hasBodyVariables) {
      status = "found";
      resolvedValue = "(body variables)";
    }

    if (status !== "found") {
      mappingHasValues = false;
      missing.push(`${obsidianSelector}:${property}`);
    }

    if (status === "found") {
      properties[property] = { status, value: resolvedValue };
    } else if (status === "default") {
      properties[property] = { status, value, baseline: baselineValue };
    } else {
      properties[property] = { status };
    }
  }

  return {
    configIndex: index,
    obsidianSelector,
    quartzSelector,
    aspect,
    properties,
    mappingHasValues,
    missing,
    selectorFound: hasSelector,
  };
};

let entries = [];
if (options.all) {
  entries = config.map((entry, index) => ({ entry, index }));
} else if (options.aspect) {
  entries = config
    .map((entry, index) => ({ entry, index }))
    .filter(
      ({ entry }) => getAspect(entry.quartzSelector || "") === options.aspect,
    );
  if (entries.length === 0) {
    exitWith(3, `No mappings found for aspect: ${options.aspect}`);
  }
} else if (options.configIndex !== undefined) {
  const entry = config[options.configIndex];
  if (!entry) {
    exitWith(3, `Config index out of range: ${options.configIndex}`);
  }
  entries = [{ entry, index: options.configIndex }];
} else if (options.obsidianSelector) {
  const index = config.findIndex(
    (entry) => entry.obsidianSelector === options.obsidianSelector,
  );
  if (index === -1) {
    exitWith(
      3,
      `Config entry not found for selector: ${options.obsidianSelector}`,
    );
  }
  entries = [{ entry: config[index], index }];
}

const details = entries.map(({ entry, index }) =>
  evaluateMapping(entry, index),
);

const summary = details.reduce(
  (acc, detail) => {
    acc.total += 1;
    const propStatuses = Object.values(detail.properties);
    const hasAnyFound = propStatuses.some((p) => p.status === "found");
    const hasAllFound = detail.mappingHasValues;
    if (hasAllFound) {
      acc.fullyMapped += 1;
    } else if (hasAnyFound) {
      acc.partiallyMapped += 1;
    } else {
      acc.unmapped += 1;
    }
    return acc;
  },
  { total: 0, fullyMapped: 0, partiallyMapped: 0, unmapped: 0 },
);

const aspects = {};
for (const detail of details) {
  const aspect = detail.aspect;
  if (!aspects[aspect]) {
    aspects[aspect] = {
      total: 0,
      fullyMapped: 0,
      partiallyMapped: 0,
      unmapped: 0,
      missing: [],
    };
  }
  aspects[aspect].total += 1;
  const hasAnyFound = Object.values(detail.properties).some(
    (p) => p.status === "found",
  );
  if (detail.mappingHasValues) {
    aspects[aspect].fullyMapped += 1;
  } else if (hasAnyFound) {
    aspects[aspect].partiallyMapped += 1;
  } else {
    aspects[aspect].unmapped += 1;
    aspects[aspect].missing.push(...detail.missing);
  }
}

if (options.all || options.aspect) {
  for (const aspect of Object.keys(aspects).sort()) {
    const stats = aspects[aspect];
    const mapped = stats.fullyMapped + stats.partiallyMapped;
    const percent = stats.total ? Math.round((mapped / stats.total) * 100) : 0;
    const label = `Aspect: ${aspect}`.padEnd(18, " ");
    const count = `${String(mapped).padStart(3, " ")}/${String(
      stats.total,
    ).padEnd(3, " ")}`;
    const breakdown = `(${stats.fullyMapped} full, ${stats.partiallyMapped} partial, ${stats.unmapped} empty)`;
    console.log(
      `${label}— ${count} have theme values  (${percent}%) ${breakdown}`,
    );
  }
  const totalMapped = summary.fullyMapped + summary.partiallyMapped;
  const overallPercent = summary.total
    ? Math.round((totalMapped / summary.total) * 100)
    : 0;
  console.log(
    `Overall: ${totalMapped}/${summary.total} mappings have theme values (${overallPercent}%) [${summary.fullyMapped} full, ${summary.partiallyMapped} partial, ${summary.unmapped} empty]`,
  );
} else {
  const detail = details[0];
  if (!detail.selectorFound) {
    exitWith(2, `Selector not found: ${detail.obsidianSelector}`);
  }
  console.log(
    `Mapping: ${detail.obsidianSelector} (${detail.aspect}) [config ${detail.configIndex}]`,
  );
  for (const [property, info] of Object.entries(detail.properties)) {
    if (info.status === "found") {
      console.log(`  ${property}: found (${info.value})`);
    } else if (info.status === "default") {
      console.log(
        `  ${property}: default (${info.value}) baseline (${info.baseline})`,
      );
    } else {
      console.log(`  ${property}: missing`);
    }
  }
}

const outputPath = path.resolve(
  process.cwd(),
  "runner",
  "scripts",
  "tests",
  "verification-results",
  `mapping-test-${options.theme}-${options.mode}.json`,
);
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(
  outputPath,
  JSON.stringify(
    {
      theme: options.theme,
      mode: options.mode,
      timestamp: new Date().toISOString(),
      summary,
      aspects,
      details: details.map(
        ({ mappingHasValues, missing, selectorFound, ...rest }) => rest,
      ),
    },
    null,
    2,
  ),
  "utf8",
);

if (options.all || options.aspect) {
  if (summary.unmapped > 0) {
    process.exit(1);
  }
  process.exit(0);
}

const single = details[0];
if (!single.selectorFound) {
  exitWith(2, `Selector not found: ${single.obsidianSelector}`);
}
if (!single.mappingHasValues) {
  process.exit(1);
}
process.exit(0);
