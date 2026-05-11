import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { buildSelectorImpactGraph } from "../../../util/style-settings-selector-impact.mjs";

describe("buildSelectorImpactGraph", () => {
  test("maps body-class-toggle effects to class-gated selectors", () => {
    const graph = buildSelectorImpactGraph({
      effectRecords: [
        {
          settingId: "fancy-toggle",
          sectionId: "main",
          settingType: "class-toggle",
          effects: [
            {
              settingId: "fancy-toggle",
              sectionId: "main",
              settingType: "class-toggle",
              effectKind: "body-class-toggle",
              targetKind: "body-class",
              operation: "toggle",
              mode: "both",
              className: "fancy",
              interactionGroup: "body-class:fancy",
              interactionMode: "additive",
            },
          ],
        },
      ],
      classSettings: { fancy: { general: ".fancy .callout { color: red; }" } },
      modeCss: {},
    });

    const record = graph[".fancy .callout"];
    assert.ok(record);
    assert.equal(record.impacts.length, 1);
    assert.equal(record.impacts[0].pathKind, "body-class");
    assert.equal(record.impacts[0].direct, true);
    assert.equal(record.impacts[0].className, "fancy");
  });

  test("tracks light/dark mode variable consumers", () => {
    const effects = [
      {
        settingId: "accent",
        sectionId: "main",
        settingType: "variable-themed-color",
        effects: [
          {
            settingId: "accent",
            sectionId: "main",
            settingType: "variable-themed-color",
            effectKind: "themed-css-variable",
            targetKind: "css-variable",
            operation: "set",
            mode: "light",
            variable: "--accent",
            variables: ["--accent"],
            interactionGroup: "css-variable:--accent",
            interactionMode: "override",
          },
          {
            settingId: "accent",
            sectionId: "main",
            settingType: "variable-themed-color",
            effectKind: "themed-css-variable",
            targetKind: "css-variable",
            operation: "set",
            mode: "dark",
            variable: "--accent",
            variables: ["--accent"],
            interactionGroup: "css-variable:--accent",
            interactionMode: "override",
          },
        ],
      },
    ];

    const graph = buildSelectorImpactGraph({
      effectRecords: effects,
      classSettings: {},
      modeCss: {
        light: ".title { color: var(--accent); }",
        dark: ".title { color: var(--accent); }",
      },
    });

    const modes = graph[".title"].impacts.map((impact) => impact.mode).sort();
    assert.deepEqual(modes, ["dark", "light"]);
  });

  test("distinguishes direct, derived, and gradient variable paths", () => {
    const graph = buildSelectorImpactGraph({
      effectRecords: [
        {
          settingId: "color-source",
          sectionId: "main",
          settingType: "variable-color",
          effects: [
            {
              settingId: "color-source",
              sectionId: "main",
              settingType: "variable-color",
              effectKind: "css-variable",
              targetKind: "css-variable",
              operation: "set",
              mode: "both",
              variable: "--base",
              variables: ["--base"],
              interactionGroup: "css-variable:--base",
              interactionMode: "override",
            },
            {
              settingId: "color-source",
              sectionId: "main",
              settingType: "variable-color",
              effectKind: "derived-css-variable",
              targetKind: "css-variable",
              operation: "set",
              mode: "both",
              variable: "--base-rgb",
              variables: ["--base-rgb"],
              sourceVariable: "--base",
              derivedFrom: "alt-format",
              interactionGroup: "css-variable:--base-rgb",
              interactionMode: "override",
            },
            {
              settingId: "color-source",
              sectionId: "main",
              settingType: "variable-color",
              effectKind: "gradient-output",
              targetKind: "css-variable",
              operation: "set-multi",
              mode: "both",
              variablePrefix: "--shade-",
              sourceVariables: ["--base", "--base-rgb"],
              derivedFrom: "gradient",
              interactionGroup: "css-variable-range:--shade-",
              interactionMode: "override",
            },
          ],
        },
      ],
      classSettings: {},
      modeCss: {
        light:
          ".note { color: var(--base); background: var(--base-rgb); border-color: var(--shade-3); }",
      },
    });

    const pathKinds = graph[".note"].impacts
      .map((impact) => impact.pathKind)
      .sort();
    assert.deepEqual(pathKinds, [
      "css-variable",
      "derived-variable",
      "gradient-variable",
    ]);
    assert.equal(
      graph[".note"].impacts.find(
        (impact) => impact.pathKind === "derived-variable",
      ).direct,
      false,
    );
  });

  test("adds interaction notes when multiple settings share a selector target group", () => {
    const graph = buildSelectorImpactGraph({
      effectRecords: [
        {
          settingId: "setting-a",
          sectionId: "main",
          settingType: "variable-text",
          effects: [
            {
              settingId: "setting-a",
              sectionId: "main",
              settingType: "variable-text",
              effectKind: "css-variable",
              targetKind: "css-variable",
              operation: "set",
              mode: "both",
              variable: "--text-color",
              variables: ["--text-color"],
              interactionGroup: "css-variable:--text-color",
              interactionMode: "override",
            },
          ],
        },
        {
          settingId: "setting-b",
          sectionId: "main",
          settingType: "variable-text",
          effects: [
            {
              settingId: "setting-b",
              sectionId: "main",
              settingType: "variable-text",
              effectKind: "css-variable",
              targetKind: "css-variable",
              operation: "set",
              mode: "both",
              variable: "--text-color",
              variables: ["--text-color"],
              interactionGroup: "css-variable:--text-color",
              interactionMode: "override",
            },
          ],
        },
      ],
      classSettings: {},
      modeCss: { light: ".body-copy { color: var(--text-color); }" },
    });

    const notes = graph[".body-copy"].interactionGroups;
    assert.equal(notes.length, 1);
    assert.deepEqual(notes[0].settingIds, ["setting-a", "setting-b"]);
  });
});
