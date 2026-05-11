import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { normalizeRuntimeEvidenceRecords } from "../../../util/style-settings-runtime-evidence.mjs";

describe("normalizeRuntimeEvidenceRecords", () => {
  test("normalizes wrapped records arrays", () => {
    const records = normalizeRuntimeEvidenceRecords({
      formatVersion: 1,
      records: [
        {
          settingId: "a",
          mode: "light",
          diff: {
            changedBodyClasses: { added: ["x"], removed: [] },
            changedCssVariables: [{ name: "--v", before: "1", after: "2" }],
            changedComputedStyles: [
              {
                selector: ".a",
                property: "color",
                before: "red",
                after: "blue",
              },
            ],
          },
        },
      ],
    });

    assert.equal(records.length, 1);
    assert.equal(records[0].settingId, "a");
    assert.equal(records[0].mode, "light");
    assert.deepEqual(records[0].changedBodyClasses, {
      added: ["x"],
      removed: [],
    });
    assert.equal(records[0].changedCssVariables.length, 1);
    assert.equal(records[0].changedComputedStyles.length, 1);
  });

  test("normalizes single legacy sidecar object", () => {
    const records = normalizeRuntimeEvidenceRecords({
      settingId: "legacy",
      mode: "dark",
      diff: {
        changedBodyClasses: { added: [], removed: ["y"] },
        changedCssVariables: [],
        changedComputedStyles: [],
      },
    });

    assert.equal(records.length, 1);
    assert.equal(records[0].settingId, "legacy");
    assert.equal(records[0].mode, "dark");
    assert.deepEqual(records[0].changedBodyClasses, {
      added: [],
      removed: ["y"],
    });
  });

  test("returns empty array for missing or invalid records", () => {
    assert.deepEqual(normalizeRuntimeEvidenceRecords(null), []);
    assert.deepEqual(normalizeRuntimeEvidenceRecords({}), []);
    assert.deepEqual(
      normalizeRuntimeEvidenceRecords({
        records: [{ settingId: "missing-diff" }],
      }),
      [],
    );
  });
});
