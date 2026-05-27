#!/usr/bin/env node

import { readFileSync, readdirSync, mkdirSync, writeFileSync } from "fs";
import { join, resolve } from "path";

const THEMES_DIR = resolve("./plugin/src/themes");
const REPORT_PATH = resolve(
  "./runner/scripts/tests/verification-results/structure-assertions.json",
);

const ASPECT_KEYS = [
  "base",
  "typography",
  "callouts",
  "tables",
  "code",
  "links",
  "blockquotes",
  "checkboxes",
  "images",
  "embeds",
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
  "lists",
  "canvas",
  "bases",
  "properties",
  "stacked",
  "misc",
];

const RULES = [
  { id: "META_VALID", severity: "error" },
  { id: "MODE_DATA_EXISTS", severity: "error" },
  { id: "BASE_HAS_VARS", severity: "error" },
  { id: "MODE_WRAP_CORRECT", severity: "error" },
  { id: "NO_INHERIT_LEAK", severity: "warning" },
  { id: "CALLOUT_RGB_FORMAT", severity: "warning" },
  { id: "FONT_FACE_MATCH", severity: "warning" },
  { id: "NO_EMPTY_BASE", severity: "error" },
  { id: "ASPECT_COVERAGE", severity: "info" },
];

function parseArgs(argv) {
  const args = argv.slice(2);
  const themeIndex = args.indexOf("--theme");
  const theme = themeIndex !== -1 ? args[themeIndex + 1] : null;
  const all = args.includes("--all");
  const report = args.includes("--report");
  return { theme, all, report };
}

function usageAndExit() {
  console.error(
    'Usage: node runner/scripts/assert-theme-structure.mjs --theme "name" | --all --report',
  );
  process.exit(1);
}

function readThemeJson(themeName) {
  const filePath = join(THEMES_DIR, `${themeName}.json`);
  try {
    const raw = readFileSync(filePath, "utf-8");
    return { data: JSON.parse(raw), raw, error: null };
  } catch (error) {
    return { data: null, raw: null, error };
  }
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function resolveModes(meta) {
  if (!meta || typeof meta !== "object") {
    return { modes: [], valid: false, message: "meta is missing" };
  }
  const modes = Array.isArray(meta.modes) ? meta.modes : null;
  if (!modes || modes.length === 0) {
    return { modes: [], valid: false, message: "meta.modes is missing" };
  }
  const normalized = modes.map((mode) => String(mode));
  const invalid = normalized.filter(
    (mode) => mode !== "dark" && mode !== "light",
  );
  if (invalid.length > 0) {
    return {
      modes: normalized,
      valid: false,
      message: `meta.modes has invalid entries: ${invalid.join(", ")}`,
    };
  }
  return { modes: normalized, valid: true, message: "" };
}

function collectAspectStrings(themeData) {
  const entries = [];
  for (const mode of ["dark", "light"]) {
    const modeData = themeData?.[mode];
    if (!modeData || typeof modeData !== "object") continue;
    for (const [key, value] of Object.entries(modeData)) {
      if (typeof value === "string") {
        entries.push({ location: `${mode}.${key}`, value });
      }
    }
  }
  return entries;
}

function themeHasFontFace(themeData) {
  const aspectStrings = collectAspectStrings(themeData);
  if (typeof themeData?.extras === "string") {
    aspectStrings.push({ location: "extras", value: themeData.extras });
  }
  return aspectStrings.some((entry) => /@font-face/i.test(entry.value));
}

function runAssertions(themeName, themeData, parseError) {
  const assertions = [];
  const meta = themeData?.meta;
  const metaNameValid = typeof meta?.name === "string" && meta.name.trim();
  const modeInfo = resolveModes(meta);
  const modes = modeInfo.modes;

  if (parseError) {
    assertions.push({
      rule: "META_VALID",
      severity: "error",
      status: "fail",
      message: `Failed to parse JSON: ${parseError.message}`,
    });
  } else if (!meta || typeof meta !== "object") {
    assertions.push({
      rule: "META_VALID",
      severity: "error",
      status: "fail",
      message: "meta is missing",
    });
  } else if (!metaNameValid) {
    assertions.push({
      rule: "META_VALID",
      severity: "error",
      status: "fail",
      message: "meta.name is missing or not a string",
    });
  } else if (!modeInfo.valid) {
    assertions.push({
      rule: "META_VALID",
      severity: "error",
      status: "fail",
      message: modeInfo.message,
    });
  } else {
    assertions.push({
      rule: "META_VALID",
      severity: "error",
      status: "pass",
      message: `meta.name=${meta.name}, modes=${modes.join(", ")}`,
    });
  }

  if (!modeInfo.valid) {
    assertions.push({
      rule: "MODE_DATA_EXISTS",
      severity: "error",
      status: "fail",
      message: "meta.modes invalid; cannot validate mode objects",
    });
  } else {
    const missingModes = modes.filter(
      (mode) => !themeData?.[mode] || typeof themeData[mode] !== "object",
    );
    if (missingModes.length > 0) {
      assertions.push({
        rule: "MODE_DATA_EXISTS",
        severity: "error",
        status: "fail",
        message: `Missing mode data: ${missingModes.join(", ")}`,
      });
    } else {
      assertions.push({
        rule: "MODE_DATA_EXISTS",
        severity: "error",
        status: "pass",
        message: "Mode objects present",
      });
    }
  }

  if (!modeInfo.valid) {
    assertions.push({
      rule: "BASE_HAS_VARS",
      severity: "error",
      status: "fail",
      message: "meta.modes invalid; cannot validate base variables",
    });
  } else {
    const failures = [];
    for (const mode of modes) {
      const base = themeData?.[mode]?.base;
      const matches = typeof base === "string" ? base.match(/--[\w-]+:/g) : [];
      const count = matches ? matches.length : 0;
      if (count < 5) failures.push(`${mode} (${count})`);
    }
    if (failures.length > 0) {
      assertions.push({
        rule: "BASE_HAS_VARS",
        severity: "error",
        status: "fail",
        message: `Base vars < 5 for: ${failures.join(", ")}`,
      });
    } else {
      assertions.push({
        rule: "BASE_HAS_VARS",
        severity: "error",
        status: "pass",
        message: "Base aspects have CSS variables",
      });
    }
  }

  if (!modeInfo.valid) {
    assertions.push({
      rule: "MODE_WRAP_CORRECT",
      severity: "error",
      status: "fail",
      message: "meta.modes invalid; cannot validate mode wrappers",
    });
  } else {
    const failures = [];
    for (const mode of modes) {
      const base = themeData?.[mode]?.base;
      const value = typeof base === "string" ? base : "";
      if (mode === "dark") {
        const hasSavedTheme =
          value.includes('saved-theme="dark"') ||
          value.includes('saved-theme=\\"dark\\"');
        const hasRoot = value.includes(":root:root");
        const allowRootOnly = modes.length === 1 && modes[0] === "dark";
        const ok = allowRootOnly ? hasSavedTheme || hasRoot : hasSavedTheme;
        if (!ok) failures.push("dark wrapper invalid");
      }
      if (mode === "light") {
        const hasRoot = value.includes(":root:root");
        const hasDark =
          value.includes('saved-theme="dark"') ||
          value.includes('saved-theme=\\"dark\\"');
        if (!hasRoot || hasDark) {
          failures.push("light wrapper invalid");
        }
      }
    }
    if (failures.length > 0) {
      assertions.push({
        rule: "MODE_WRAP_CORRECT",
        severity: "error",
        status: "fail",
        message: failures.join("; "),
      });
    } else {
      assertions.push({
        rule: "MODE_WRAP_CORRECT",
        severity: "error",
        status: "pass",
        message: "Mode wrappers look correct",
      });
    }
  }

  const inheritLeak = collectAspectStrings(themeData).find((entry) =>
    entry.value.includes(": inherit;"),
  );
  if (inheritLeak) {
    assertions.push({
      rule: "NO_INHERIT_LEAK",
      severity: "warning",
      status: "fail",
      message: `Found ': inherit;' in ${inheritLeak.location}`,
    });
  } else {
    assertions.push({
      rule: "NO_INHERIT_LEAK",
      severity: "warning",
      status: "pass",
      message: "No inherit leaks found",
    });
  }

  let calloutFailure = null;
  for (const mode of modes.length > 0 ? modes : ["dark", "light"]) {
    const callouts = themeData?.[mode]?.callouts;
    if (!isNonEmptyString(callouts)) continue;
    const regex = /--callout-[\w-]+\s*:\s*([^;]+);/g;
    let match;
    while ((match = regex.exec(callouts)) !== null) {
      const value = match[1].trim();
      const rgbTriplet = /^\d+(\.\d+)?\s*,\s*\d+(\.\d+)?\s*,\s*\d+(\.\d+)?$/;
      if (!rgbTriplet.test(value)) {
        calloutFailure = `${mode}.callouts has non-RGB value: ${value}`;
        break;
      }
    }
    if (calloutFailure) break;
  }
  if (calloutFailure) {
    assertions.push({
      rule: "CALLOUT_RGB_FORMAT",
      severity: "warning",
      status: "fail",
      message: calloutFailure,
    });
  } else {
    assertions.push({
      rule: "CALLOUT_RGB_FORMAT",
      severity: "warning",
      status: "pass",
      message: "Callout RGB format looks consistent",
    });
  }

  const fontEntries = Array.isArray(meta?.fonts)
    ? meta.fonts.filter(
        (font) =>
          typeof font === "string" &&
          font.trim().length > 0 &&
          !font.startsWith("icons/"),
      )
    : [];
  if (fontEntries.length > 0) {
    if (themeHasFontFace(themeData)) {
      assertions.push({
        rule: "FONT_FACE_MATCH",
        severity: "warning",
        status: "pass",
        message: "Font-face declarations found",
      });
    } else {
      assertions.push({
        rule: "FONT_FACE_MATCH",
        severity: "warning",
        status: "fail",
        message: "meta.fonts present but no @font-face found",
      });
    }
  } else {
    assertions.push({
      rule: "FONT_FACE_MATCH",
      severity: "warning",
      status: "pass",
      message: "No custom fonts declared",
    });
  }

  if (!modeInfo.valid) {
    assertions.push({
      rule: "NO_EMPTY_BASE",
      severity: "error",
      status: "fail",
      message: "meta.modes invalid; cannot validate base length",
    });
  } else {
    const emptyBases = [];
    for (const mode of modes) {
      const base = themeData?.[mode]?.base;
      const length = typeof base === "string" ? base.length : 0;
      if (length <= 100) emptyBases.push(`${mode} (${length})`);
    }
    if (emptyBases.length > 0) {
      assertions.push({
        rule: "NO_EMPTY_BASE",
        severity: "error",
        status: "fail",
        message: `Base too short: ${emptyBases.join(", ")}`,
      });
    } else {
      assertions.push({
        rule: "NO_EMPTY_BASE",
        severity: "error",
        status: "pass",
        message: "Base aspects are non-empty",
      });
    }
  }

  const modesForCoverage = modeInfo.valid ? modes : [];
  let covered = 0;
  for (const key of ASPECT_KEYS) {
    const ok = modesForCoverage.length
      ? modesForCoverage.every((mode) =>
          isNonEmptyString(themeData?.[mode]?.[key]),
        )
      : false;
    if (ok) covered++;
  }
  const total = ASPECT_KEYS.length;
  const percentage = total === 0 ? 0 : Math.round((covered / total) * 100);
  assertions.push({
    rule: "ASPECT_COVERAGE",
    severity: "info",
    status: "info",
    message: `${covered}/${total} aspects have CSS (${percentage}%)`,
  });

  const ordered = RULES.map((rule) =>
    assertions.find((entry) => entry.rule === rule.id),
  ).filter(Boolean);

  const errors = ordered.filter(
    (entry) => entry.severity === "error" && entry.status === "fail",
  ).length;
  const warnings = ordered.filter(
    (entry) => entry.severity === "warning" && entry.status === "fail",
  ).length;
  const info = ordered.filter((entry) => entry.severity === "info").length;

  return { theme: themeName, errors, warnings, info, assertions: ordered };
}

function formatLine(assertion) {
  const { rule, severity, status, message } = assertion;
  if (severity === "info") return `[INFO] ${rule}: ${message}`;
  if (severity === "warning") {
    return status === "fail"
      ? `[WARN] ${rule}: ${message}`
      : `[PASS] ${rule}: ${message}`;
  }
  return status === "fail"
    ? `[FAIL] ${rule}: ${message}`
    : `[PASS] ${rule}: ${message}`;
}

function buildReportEntry(result) {
  return {
    errors: result.errors,
    warnings: result.warnings,
    info: result.info,
    assertions: result.assertions.map((entry) => {
      const base = {
        rule: entry.rule,
        severity: entry.severity,
        status: entry.status,
      };
      if (entry.status !== "pass" || entry.severity === "info") {
        base.message = entry.message;
      }
      return base;
    }),
  };
}

function listThemes() {
  return readdirSync(THEMES_DIR)
    .filter((name) => name.endsWith(".json"))
    .map((name) => name.replace(/\.json$/, ""))
    .sort((a, b) => a.localeCompare(b));
}

function runSingle(themeName) {
  const { data, error } = readThemeJson(themeName);
  const result = runAssertions(themeName, data, error);
  for (const assertion of result.assertions) {
    process.stdout.write(`${formatLine(assertion)}\n`);
  }
  process.exit(result.errors > 0 ? 1 : 0);
}

function runBatch() {
  const themes = listThemes();
  const results = {};
  const errorThemes = [];
  let warningThemes = 0;
  let cleanThemes = 0;

  for (const themeName of themes) {
    const { data, error } = readThemeJson(themeName);
    const result = runAssertions(themeName, data, error);
    results[themeName] = buildReportEntry(result);

    if (result.errors > 0) {
      errorThemes.push(themeName);
    }
    if (result.warnings > 0) {
      warningThemes += 1;
    }
    if (result.errors === 0 && result.warnings === 0) {
      cleanThemes += 1;
    }
  }

  const summaryLines = [
    `Checked ${themes.length} themes:`,
    `  Errors: ${errorThemes.length} themes${
      errorThemes.length > 0 ? ` (${errorThemes.join(", ")})` : ""
    }`,
    `  Warnings: ${warningThemes} themes`,
    `  Clean: ${cleanThemes} themes`,
  ];
  process.stdout.write(`${summaryLines.join("\n")}\n`);

  mkdirSync(resolve("./runner/scripts/tests/verification-results"), {
    recursive: true,
  });
  const report = {
    timestamp: new Date().toISOString(),
    totalThemes: themes.length,
    results,
  };
  writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

  const hasErrors = errorThemes.length > 0;
  process.exit(hasErrors ? 1 : 0);
}

const { theme, all, report } = parseArgs(process.argv);
if (theme && (all || report)) usageAndExit();
if (!theme && !all) usageAndExit();
if (all && !report) usageAndExit();

if (theme) {
  runSingle(theme);
} else {
  runBatch();
}
