import { execSync } from "child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { performance } from "node:perf_hooks";
import process from "node:process";

const REFERENCE_THEMES = [
  "tokyo-night",
  "catppuccin",
  "minimal",
  "its-theme",
  "hidden-grotto",
  "aura",
  "80s-neon",
  "abecedarium",
  "comfort",
  "hackthebox",
  "everforest",
  "brutalist",
  "anuppuccin",
  "blue-topaz",
  "obsidian-gruvbox",
];

const RESULT_DIR = resolve("./runner/scripts/tests/verification-results");

const usage = () => {
  console.error(
    "Usage: node runner/scripts/agent-workflow.mjs --theme <name> [--aspect <name>] [--mode <dark|light>] --verify [--cross-theme]",
  );
};

const parseArgs = (argv) => {
  const args = argv.slice(2);
  const options = { aspect: "all", mode: "dark", verify: false };

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];

    if (arg === "--verify") {
      options.verify = true;
      continue;
    }

    if (arg === "--cross-theme") {
      options.crossTheme = true;
      continue;
    }

    if (arg === "--theme") {
      const value = args[i + 1];
      if (!value || value.startsWith("--")) {
        return { error: "Missing value for --theme" };
      }
      options.theme = value;
      i += 1;
      continue;
    }

    if (arg === "--aspect") {
      const value = args[i + 1];
      if (!value || value.startsWith("--")) {
        return { error: "Missing value for --aspect" };
      }
      options.aspect = value.toLowerCase();
      i += 1;
      continue;
    }

    if (arg === "--mode") {
      const value = args[i + 1];
      if (!value || value.startsWith("--")) {
        return { error: "Missing value for --mode" };
      }
      options.mode = value;
      i += 1;
      continue;
    }

    return { error: `Unknown argument: ${arg}` };
  }

  if (!options.verify) {
    return { error: "Missing required --verify flag" };
  }

  if (!options.theme) {
    return { error: "Missing required --theme" };
  }

  if (options.mode !== "dark" && options.mode !== "light") {
    return { error: "--mode must be dark or light" };
  }

  return { options };
};

const runCommand = (command) => {
  const start = performance.now();
  try {
    const stdout = execSync(command, { stdio: ["pipe", "pipe", "inherit"] });
    const durationMs = Math.round(performance.now() - start);
    const output = stdout?.length ? stdout.toString() : "";
    if (output) process.stderr.write(output);
    return { ok: true, durationMs, stdout: output };
  } catch (error) {
    const durationMs = Math.round(performance.now() - start);
    const output = error?.stdout?.length ? error.stdout.toString() : "";
    if (output) process.stderr.write(output);
    return { ok: false, durationMs, stdout: output, error };
  }
};

const parseStructureCounts = (stdout) => {
  const counts = { pass: 0, fail: 0, warn: 0 };
  const lines = stdout.split("\n").map((line) => line.trim());
  for (const line of lines) {
    if (!line) continue;
    if (line.startsWith("[PASS]")) counts.pass += 1;
    else if (line.startsWith("[FAIL]")) counts.fail += 1;
    else if (line.startsWith("[WARN]")) counts.warn += 1;
  }
  return counts;
};

const buildMappingSummary = (theme, mode) => {
  const outputPath = resolve(RESULT_DIR, `mapping-test-${theme}-${mode}.json`);
  const summary = { total: 0, fullyMapped: 0, partiallyMapped: 0, unmapped: 0 };

  if (!existsSync(outputPath)) {
    return summary;
  }

  try {
    const data = JSON.parse(readFileSync(outputPath, "utf8"));
    return { ...summary, ...(data?.summary ?? {}) };
  } catch (error) {
    console.error(`Failed to read mapping results: ${outputPath}`);
    return summary;
  }
};

const finalize = (report, code) => {
  mkdirSync(RESULT_DIR, { recursive: true });
  const outputPath = resolve(
    RESULT_DIR,
    `agent-workflow-${report.theme}-${report.mode}.json`,
  );
  writeFileSync(outputPath, JSON.stringify(report, null, 2));
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  process.exit(code);
};

const parsed = parseArgs(process.argv);
if (parsed.error) {
  usage();
  console.error(parsed.error);
  process.exit(1);
}

const { theme, aspect, mode, verify, crossTheme } = parsed.options;

const report = { theme, aspect, mode, stages: {}, overall: "pass" };

if (!verify) {
  usage();
  process.exit(1);
}

const compileResult = runCommand(
  `bun ./runner/scripts/compile.js "${theme}" --auto`,
);
report.stages.compile = {
  status: compileResult.ok ? "pass" : "fail",
  durationMs: compileResult.durationMs,
};
if (!compileResult.ok) {
  report.overall = "fail";
  finalize(report, 1);
}

const generateResult = runCommand(
  `bun --smol ./plugin/scripts/generate.js "${theme}" --auto --no-clear`,
);
report.stages.generate = {
  status: generateResult.ok ? "pass" : "fail",
  durationMs: generateResult.durationMs,
};
if (!generateResult.ok) {
  report.overall = "fail";
  finalize(report, 1);
}

const mappingArgs =
  aspect && aspect !== "all" ? `--aspect "${aspect}"` : "--all";
const mappingsResult = runCommand(
  `node runner/scripts/test-mapping.mjs --theme "${theme}" ${mappingArgs} --mode ${mode}`,
);
const mappingSummary = buildMappingSummary(theme, mode);
report.stages.mappings = {
  status: mappingsResult.ok ? "pass" : "warn",
  total: mappingSummary.total,
  fullyMapped: mappingSummary.fullyMapped,
  partiallyMapped: mappingSummary.partiallyMapped,
  unmapped: mappingSummary.unmapped,
};

const structureResult = runCommand(
  `node runner/scripts/assert-theme-structure.mjs --theme "${theme}"`,
);
const structureCounts = parseStructureCounts(structureResult.stdout || "");
report.stages.structure = {
  status: structureResult.ok ? "pass" : "fail",
  errors: structureCounts.fail,
  warnings: structureCounts.warn,
};
if (!structureResult.ok) {
  report.overall = "fail";
}

if (crossTheme) {
  const failed = [];
  for (const refTheme of REFERENCE_THEMES) {
    const result = runCommand(
      `node runner/scripts/assert-theme-structure.mjs --theme "${refTheme}"`,
    );
    if (!result.ok) {
      failed.push(refTheme);
    }
  }
  report.stages.crossTheme = {
    status: failed.length === 0 ? "pass" : "fail",
    checked: REFERENCE_THEMES.length,
    failed,
  };
  if (failed.length > 0) {
    report.overall = "fail";
  }
}

finalize(report, report.overall === "pass" ? 0 : 1);
