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
 * - single legacy record object
 * - array of legacy record objects
 * - sidecar wrapper object with `records: []`
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

