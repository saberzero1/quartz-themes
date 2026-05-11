import { describe, test } from "node:test";
import assert from "node:assert/strict";
import {
  normalizeRuntimeEvidenceRecords,
  getVariableNumberProbeValues,
  enumerateRuntimeObservationPayloads,
  RUNTIME_OBSERVATION_TEXT_VALUE,
  RUNTIME_OBSERVATION_TEST_NUMBER,
  MAX_CLASS_SELECT_OPTIONS_PER_SETTING,
  MAX_VARIABLE_PROBES_PER_SETTING,
} from "../../../util/style-settings-runtime-evidence.mjs";

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

  test("normalizes formatVersion 2 multi-record sidecar", () => {
    const sidecar = {
      formatVersion: 2,
      mode: "dark",
      settingsObserved: 2,
      records: [
        {
          observedAt: "2024-01-01T00:00:00.000Z",
          settingId: "toggle-a",
          mode: "dark",
          selectors: [".foo"],
          diff: {
            changedBodyClasses: { added: ["toggle-a"], removed: [] },
            changedCssVariables: [],
            changedComputedStyles: [],
          },
        },
        {
          observedAt: "2024-01-01T00:00:01.000Z",
          settingId: "select-b",
          mode: "dark",
          selectors: [".bar"],
          diff: {
            changedBodyClasses: { added: ["option-1"], removed: [] },
            changedCssVariables: [{ name: "--accent", before: "red", after: "blue" }],
            changedComputedStyles: [
              { selector: ".bar", property: "color", before: "red", after: "blue" },
            ],
          },
        },
      ],
    };

    const records = normalizeRuntimeEvidenceRecords(sidecar);

    assert.equal(records.length, 2);
    assert.equal(records[0].settingId, "toggle-a");
    assert.deepEqual(records[0].changedBodyClasses, { added: ["toggle-a"], removed: [] });
    assert.equal(records[0].changedCssVariables.length, 0);

    assert.equal(records[1].settingId, "select-b");
    assert.equal(records[1].changedCssVariables.length, 1);
    assert.equal(records[1].changedComputedStyles.length, 1);
  });

  test("normalizes formatVersion 2 sidecar with many records across multiple settings", () => {
    const makeRecord = (id, i) => ({
      observedAt: `2024-01-01T00:00:0${i}.000Z`,
      settingId: id,
      mode: "light",
      selectors: [],
      diff: {
        changedBodyClasses: { added: [], removed: [] },
        changedCssVariables: [{ name: `--${id}`, before: "0", after: `${i}` }],
        changedComputedStyles: [],
      },
    });

    const records = normalizeRuntimeEvidenceRecords({
      formatVersion: 2,
      records: [
        makeRecord("slider-x", 1),
        makeRecord("slider-x", 13),
        makeRecord("slider-x", 100),
        makeRecord("toggle-y", 0),
      ],
    });

    assert.equal(records.length, 4);
    assert.equal(records[0].settingId, "slider-x");
    assert.equal(records[1].changedCssVariables[0].after, "13");
    assert.equal(records[3].settingId, "toggle-y");
  });
});

describe("getVariableNumberProbeValues", () => {
  test("returns [min, mid, max] when min and max are defined", () => {
    assert.deepEqual(getVariableNumberProbeValues({ min: 0, max: 100 }), [0, 50, 100]);
    assert.deepEqual(getVariableNumberProbeValues({ min: 10, max: 30 }), [10, 20, 30]);
  });

  test("deduplicates when min, mid, and max collapse", () => {
    // mid rounds to 10, same as min → [10, 20] not [10, 10, 20]
    assert.deepEqual(
      getVariableNumberProbeValues({ min: 10, max: 20 }),
      [10, 15, 20],
    );
  });

  test("caps at MAX_VARIABLE_PROBES_PER_SETTING", () => {
    const result = getVariableNumberProbeValues({ min: 0, max: 100 });
    assert.ok(result.length <= MAX_VARIABLE_PROBES_PER_SETTING);
  });

  test("falls back to min-relative probes when only min is defined", () => {
    const result = getVariableNumberProbeValues({ min: 5 });
    assert.equal(result[0], 5);
    assert.equal(result[1], 5 + RUNTIME_OBSERVATION_TEST_NUMBER);
    assert.ok(result.length <= MAX_VARIABLE_PROBES_PER_SETTING);
  });

  test("falls back to fixed probes when neither min nor max is defined", () => {
    assert.deepEqual(getVariableNumberProbeValues({}), [
      1,
      RUNTIME_OBSERVATION_TEST_NUMBER,
      100,
    ]);
    assert.deepEqual(getVariableNumberProbeValues(null), [
      1,
      RUNTIME_OBSERVATION_TEST_NUMBER,
      100,
    ]);
  });

  test("ignores max when max <= min", () => {
    // max === min → not strictly greater, so min-only fallback
    const sameResult = getVariableNumberProbeValues({ min: 50, max: 50 });
    assert.equal(sameResult[0], 50);

    // max < min → also falls back
    const invertedResult = getVariableNumberProbeValues({ min: 100, max: 10 });
    assert.equal(invertedResult[0], 100);
  });
});

describe("enumerateRuntimeObservationPayloads", () => {
  const themeId = "my-theme";

  test("emits one payload for a class-toggle setting", () => {
    const settings = [{ id: "fancy", type: "class-toggle" }];
    const effectSettingIds = new Set(["fancy"]);
    const payloads = enumerateRuntimeObservationPayloads(themeId, settings, effectSettingIds);
    assert.equal(payloads.length, 1);
    assert.equal(payloads[0].settingId, "fancy");
    assert.deepEqual(payloads[0].payload, { "my-theme@@fancy": true });
  });

  test("emits one payload per non-none option for class-select", () => {
    const settings = [
      {
        id: "mode",
        type: "class-select",
        options: [
          { value: "none" },
          { value: "option-a" },
          { value: "option-b" },
        ],
      },
    ];
    const effectSettingIds = new Set(["mode"]);
    const payloads = enumerateRuntimeObservationPayloads(themeId, settings, effectSettingIds);
    assert.equal(payloads.length, 2);
    assert.deepEqual(payloads[0].payload, { "my-theme@@mode": "option-a" });
    assert.deepEqual(payloads[1].payload, { "my-theme@@mode": "option-b" });
  });

  test("caps class-select options at MAX_CLASS_SELECT_OPTIONS_PER_SETTING", () => {
    const options = Array.from({ length: 20 }, (_, i) => ({ value: `opt-${i}` }));
    const settings = [{ id: "big-select", type: "class-select", options }];
    const effectSettingIds = new Set(["big-select"]);
    const payloads = enumerateRuntimeObservationPayloads(themeId, settings, effectSettingIds);
    assert.ok(payloads.length <= MAX_CLASS_SELECT_OPTIONS_PER_SETTING);
  });

  test("emits multiple probe payloads for variable-number (with min/max)", () => {
    const settings = [{ id: "font-size", type: "variable-number", min: 12, max: 24, format: "px" }];
    const effectSettingIds = new Set(["font-size"]);
    const payloads = enumerateRuntimeObservationPayloads(themeId, settings, effectSettingIds);
    assert.ok(payloads.length >= 2);
    assert.ok(payloads.every((p) => p.settingId === "font-size"));
    // First payload should be min value with format suffix
    assert.equal(payloads[0].payload["my-theme@@font-size"], "12px");
    // Last payload should be max value
    assert.equal(payloads[payloads.length - 1].payload["my-theme@@font-size"], "24px");
  });

  test("emits multiple probe payloads for variable-number-slider (no range)", () => {
    const settings = [{ id: "opacity", type: "variable-number-slider" }];
    const effectSettingIds = new Set(["opacity"]);
    const payloads = enumerateRuntimeObservationPayloads(themeId, settings, effectSettingIds);
    assert.ok(payloads.length >= 2);
    assert.ok(payloads.every((p) => p.settingId === "opacity"));
  });

  test("emits one payload for variable-text with the fixed probe token", () => {
    const settings = [{ id: "custom-font", type: "variable-text" }];
    const effectSettingIds = new Set(["custom-font"]);
    const payloads = enumerateRuntimeObservationPayloads(themeId, settings, effectSettingIds);
    assert.equal(payloads.length, 1);
    assert.equal(
      payloads[0].payload["my-theme@@custom-font"],
      RUNTIME_OBSERVATION_TEXT_VALUE,
    );
  });

  test("skips settings not in effectSettingIds", () => {
    const settings = [
      { id: "known", type: "class-toggle" },
      { id: "unknown", type: "class-toggle" },
    ];
    const effectSettingIds = new Set(["known"]);
    const payloads = enumerateRuntimeObservationPayloads(themeId, settings, effectSettingIds);
    assert.equal(payloads.length, 1);
    assert.equal(payloads[0].settingId, "known");
  });

  test("skips settings with unsupported or missing types", () => {
    const settings = [
      { id: "color-a", type: "variable-color" },
      { id: "heading", type: "heading" },
      { id: null, type: "class-toggle" },
      { id: "no-type" },
    ];
    const effectSettingIds = new Set(["color-a", "heading"]);
    const payloads = enumerateRuntimeObservationPayloads(themeId, settings, effectSettingIds);
    assert.equal(payloads.length, 0);
  });

  test("returns empty array when settings list is empty", () => {
    assert.deepEqual(
      enumerateRuntimeObservationPayloads(themeId, [], new Set(["x"])),
      [],
    );
    assert.deepEqual(
      enumerateRuntimeObservationPayloads(themeId, null, new Set(["x"])),
      [],
    );
  });

  test("produces deterministic ordering across multiple setting types", () => {
    const settings = [
      { id: "toggle-a", type: "class-toggle" },
      { id: "select-b", type: "class-select", options: [{ value: "opt-1" }, { value: "opt-2" }] },
      { id: "slider-c", type: "variable-number-slider", min: 0, max: 10 },
      { id: "text-d", type: "variable-text" },
    ];
    const effectSettingIds = new Set(["toggle-a", "select-b", "slider-c", "text-d"]);

    const first = enumerateRuntimeObservationPayloads(themeId, settings, effectSettingIds);
    const second = enumerateRuntimeObservationPayloads(themeId, settings, effectSettingIds);

    assert.deepEqual(first, second);
    assert.equal(first[0].settingId, "toggle-a");
    assert.equal(first[1].settingId, "select-b");
    assert.equal(first[2].settingId, "select-b");
    assert.equal(first[first.length - 1].settingId, "text-d");
  });
});
