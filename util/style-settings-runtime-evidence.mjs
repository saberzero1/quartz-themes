/**
 * Fixed deterministic probe text value for runtime evidence observations.
 * This token is intentionally unique and grep-friendly in emitted evidence files.
 */
export const RUNTIME_OBSERVATION_TEXT_VALUE = "__qt_runtime_evidence__";

/**
 * Fixed deterministic probe number for runtime evidence observations.
 * 13 is intentionally non-zero/non-default to maximize chance of visible style deltas.
 */
export const RUNTIME_OBSERVATION_TEST_NUMBER = 13;

/**
 * Maximum number of non-default meaningful class-select options to probe per setting.
 * Bounds per-setting observation cost while still covering all distinct non-default UI states
 * for settings with large option lists.
 */
export const MAX_CLASS_SELECT_OPTIONS_PER_SETTING = 8;

/**
 * Maximum number of probe values to test per variable-number / variable-number-slider setting.
 * Covers min / midpoint / max (or fixed deterministic probes when range is unavailable).
 */
export const MAX_VARIABLE_PROBES_PER_SETTING = 3;

/**
 * Supported runtime evidence sidecar modes. Order matters for deterministic
 * per-theme live verification and report output.
 */
export const RUNTIME_EVIDENCE_MODES = ["dark", "light"];

function normalizeClassDiff(diff) {
  const added = Array.isArray(diff?.added) ? diff.added : [];
  const removed = Array.isArray(diff?.removed) ? diff.removed : [];
  return { added, removed };
}

function normalizeRecord(record) {
  if (!record?.settingId || !record?.diff) return null;
  return {
    settingId: record.settingId,
    mode: record.mode,
    changedBodyClasses: normalizeClassDiff(record.diff.changedBodyClasses),
    changedCssVariables: Array.isArray(record.diff.changedCssVariables)
      ? record.diff.changedCssVariables
      : [],
    changedComputedStyles: Array.isArray(record.diff.changedComputedStyles)
      ? record.diff.changedComputedStyles
      : [],
  };
}

/**
 * Normalize runtime evidence sidecar content into buildSelectorImpactGraph records.
 * Supports:
 * - null/undefined
 * - single legacy record object (formatVersion 1 compat)
 * - array of legacy record objects
 * - sidecar wrapper object with `records: []` (formatVersion 1 or 2)
 *
 * The formatVersion 2 sidecar contains many records per theme/mode, one per
 * single-setting observation; this function flattens them all into the flat
 * shape expected by buildSelectorImpactGraph.
 *
 * @param {unknown} sidecar
 * @returns {Array<{
 *   settingId: string;
 *   mode?: "both" | "dark" | "light";
 *   changedBodyClasses: { added: string[]; removed: string[] };
 *   changedCssVariables: Array<{ name: string; before?: string; after?: string }>;
 *   changedComputedStyles: Array<{
 *     selector: string;
 *     property: string;
 *     before?: string;
 *     after?: string;
 *   }>;
 * }>}
 */
export function normalizeRuntimeEvidenceRecords(sidecar) {
  if (!sidecar) return [];

  const candidateRecords = Array.isArray(sidecar)
    ? sidecar
    : Array.isArray(sidecar.records)
      ? sidecar.records
      : [sidecar];

  return candidateRecords.map((record) => normalizeRecord(record)).filter(Boolean);
}

/**
 * Resolve the supported runtime evidence modes for a theme.
 *
 * Theme metadata normally declares one or both of "dark" / "light". When the
 * metadata is missing or malformed, fall back to light-mode verification to
 * preserve the verifier's historical behavior instead of skipping runtime
 * coverage entirely.
 *
 * @param {unknown} modes
 * @returns {Array<"dark" | "light">}
 */
export function resolveRuntimeEvidenceModes(modes) {
  const normalized = Array.isArray(modes)
    ? RUNTIME_EVIDENCE_MODES.filter((mode) => modes.includes(mode))
    : [];
  // Compatibility fallback: preserve the verifier's historical single-mode
  // behavior instead of silently skipping runtime evidence when metadata is absent.
  return normalized.length > 0 ? normalized : ["light"];
}

/**
 * Validate runtime evidence sidecar hygiene for readiness/preflight checks.
 *
 * @param {unknown} sidecar
 * @param {"dark" | "light"} expectedMode
 * @returns {{ valid: boolean; recordCount: number; invalidRecordCount: number; errors: string[] }}
 */
export function validateRuntimeEvidenceSidecar(sidecar, expectedMode) {
  const errors = [];
  if (!sidecar || typeof sidecar !== "object") {
    return {
      valid: false,
      recordCount: 0,
      invalidRecordCount: 0,
      errors: ["sidecar is missing or invalid JSON"],
    };
  }

  const normalizedRecords = normalizeRuntimeEvidenceRecords(sidecar);
  const rawRecords = Array.isArray(sidecar.records)
    ? sidecar.records
    : Array.isArray(sidecar)
      ? sidecar
      : sidecar?.settingId
        ? [sidecar]
        : [];
  const invalidRecordCount = Math.max(0, rawRecords.length - normalizedRecords.length);

  if (sidecar.mode && sidecar.mode !== expectedMode) {
    errors.push(`sidecar.mode expected ${expectedMode}, got ${sidecar.mode}`);
  }

  for (const record of rawRecords) {
    if (record?.mode && record.mode !== expectedMode) {
      errors.push(
        `record mode expected ${expectedMode}, got ${record.mode} for ${record.settingId || "unknown-setting"}`,
      );
      break;
    }
  }

  if (invalidRecordCount > 0) {
    errors.push(`${invalidRecordCount} runtime evidence record(s) failed normalization`);
  }

  return {
    valid: errors.length === 0,
    recordCount: normalizedRecords.length,
    invalidRecordCount,
    errors,
  };
}

/**
 * Generate representative numeric probe values for a variable-number or
 * variable-number-slider setting.
 *
 * Scaling strategy:
 * - If both min and max are defined: [min, midpoint, max] — covers the full range.
 * - If only min is defined: [min, min+13, min+100] — deterministic above-min spread.
 * - Otherwise: [1, 13, 100] — fixed fallback probes.
 *
 * Capped at MAX_VARIABLE_PROBES_PER_SETTING to keep runtime cost bounded while
 * still providing meaningful coverage of the effective value range.
 *
 * @param {{ min?: number; max?: number; }} setting
 * @returns {number[]}
 */
export function getVariableNumberProbeValues(setting) {
  const min = typeof setting?.min === "number" ? setting.min : null;
  const max = typeof setting?.max === "number" ? setting.max : null;

  if (min !== null && max !== null && max > min) {
    const mid = Math.round((min + max) / 2);
    return [...new Set([min, mid, max])].slice(0, MAX_VARIABLE_PROBES_PER_SETTING);
  }
  if (min !== null) {
    return [min, min + RUNTIME_OBSERVATION_TEST_NUMBER, min + 100].slice(
      0,
      MAX_VARIABLE_PROBES_PER_SETTING,
    );
  }
  return [1, RUNTIME_OBSERVATION_TEST_NUMBER, 100].slice(
    0,
    MAX_VARIABLE_PROBES_PER_SETTING,
  );
}

/**
 * Enumerate all single-setting runtime observation payloads for broad single-setting coverage.
 *
 * Scaling strategy (single-setting only — no pairwise or higher-order combinations):
 * - class-toggle: one observation per eligible setting (the enabled/true state).
 * - class-select: one observation per non-default non-"none" option, capped at
 *   MAX_CLASS_SELECT_OPTIONS_PER_SETTING per setting.
 * - variable-number / variable-number-slider: representative probe values via
 *   getVariableNumberProbeValues(), capped at MAX_VARIABLE_PROBES_PER_SETTING per setting.
 * - variable-text: one observation per eligible setting with a fixed probe token.
 *
 * Only settings whose IDs appear in effectSettingIds (derived from the selector-impact
 * graph) are included; settings without any known impact are skipped entirely.
 *
 * The output is deterministic: given the same inputs the same payloads are always
 * produced in the same order, making large one-time extraction runs reproducible and
 * debuggable.
 *
 * @param {string} themeId - Style Settings root id (prefix for payload keys, e.g. "Appearance")
 * @param {Array<{
 *   id: string;
 *   type: string;
 *   options?: Array<{ value: string }>;
 *   format?: string;
 *   min?: number;
 *   max?: number;
 * }>} settings - Theme settings to enumerate
 * @param {Set<string>} effectSettingIds - Setting IDs that have known selector impacts
 * @returns {Array<{ settingId: string; payload: Record<string, unknown> }>}
 */
export function enumerateRuntimeObservationPayloads(themeId, settings, effectSettingIds) {
  const results = [];

  for (const setting of settings || []) {
    if (!setting?.id || !setting?.type) continue;
    if (!effectSettingIds.has(setting.id)) continue;

    const key = `${themeId}@@${setting.id}`;

    if (setting.type === "class-toggle") {
      results.push({ settingId: setting.id, payload: { [key]: true } });
    } else if (setting.type === "class-select" && Array.isArray(setting.options)) {
      const meaningfulOptions = setting.options
        .filter((entry) => entry?.value && entry.value !== "none")
        .slice(0, MAX_CLASS_SELECT_OPTIONS_PER_SETTING);
      for (const option of meaningfulOptions) {
        results.push({ settingId: setting.id, payload: { [key]: option.value } });
      }
    } else if (
      setting.type === "variable-number" ||
      setting.type === "variable-number-slider"
    ) {
      for (const value of getVariableNumberProbeValues(setting)) {
        const formatted = `${value}${setting.format || ""}`;
        results.push({ settingId: setting.id, payload: { [key]: formatted } });
      }
    } else if (setting.type === "variable-text") {
      results.push({
        settingId: setting.id,
        payload: { [key]: RUNTIME_OBSERVATION_TEXT_VALUE },
      });
    }
  }

  return results;
}
