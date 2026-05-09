import { test, describe } from "node:test";
import { strict as assert } from "node:assert";
import { processStyleSettings } from "../styleSettings";

describe("processStyleSettings", () => {
  test("variable override emits CSS custom property", () => {
    const result = processStyleSettings(
      { "my-theme@@bg1": "#1e1e2e" },
      "my-theme",
    );
    assert.ok(result.css.includes("--bg1: #1e1e2e;"));
  });

  test("themed color emits separate light/dark blocks", () => {
    const result = processStyleSettings(
      {
        "my-theme@@red@@light": "rgb(200, 50, 50)",
        "my-theme@@red@@dark": "rgb(255, 80, 80)",
      },
      "my-theme",
    );
    assert.ok(result.css.includes(":root {"));
    assert.ok(result.css.includes('saved-theme="dark"'));
    assert.ok(result.css.includes("--red: rgb(200, 50, 50);"));
    assert.ok(result.css.includes("--red: rgb(255, 80, 80);"));
  });

  test("hsl-split emits three variables", () => {
    const result = processStyleSettings(
      {
        "my-theme@@color-h@@light": "210",
        "my-theme@@color-s@@light": "50%",
        "my-theme@@color-l@@light": "90%",
      },
      "my-theme",
    );
    assert.ok(result.css.includes("--color-h: 210;"));
    assert.ok(result.css.includes("--color-s: 50%;"));
    assert.ok(result.css.includes("--color-l: 90%;"));
  });

  test("class-toggle true injects pre-extracted CSS", () => {
    const classMap = { "my-toggle": { general: ".my-toggle { color: red; }" } };
    const result = processStyleSettings(
      { "my-theme@@my-toggle": true },
      "my-theme",
      classMap,
    );
    assert.ok(result.css.includes("color: red;"));
  });

  test("class-toggle true without classSettings map is a no-op", () => {
    const result = processStyleSettings(
      { "my-theme@@my-toggle": true },
      "my-theme",
    );
    assert.equal(result.css, "");
  });

  test("class-toggle false is a no-op", () => {
    const classMap = { "my-toggle": { general: ".my-toggle { color: red; }" } };
    const result = processStyleSettings(
      { "my-theme@@my-toggle": false },
      "my-theme",
      classMap,
    );
    assert.equal(result.css, "");
  });

  test("class-select value injects pre-extracted CSS for selected option", () => {
    const classMap = {
      "dark-default": { general: ":root { --bg: #000; }" },
      "dark-midnight": { general: ":root { --bg: #0a0a2e; }" },
    };
    const result = processStyleSettings(
      { "my-theme@@theme-variant": "dark-midnight" },
      "my-theme",
      classMap,
    );
    assert.ok(result.css.includes("--bg: #0a0a2e;"));
    assert.ok(!result.css.includes("--bg: #000;"));
  });

  test("class-select value not in classSettings falls through to CSS variable", () => {
    const result = processStyleSettings(
      { "my-theme@@some-option": "some-value" },
      "my-theme",
      {},
    );
    assert.ok(result.css.includes("--some-option: some-value;"));
  });

  test("keys not matching themeId are skipped", () => {
    const result = processStyleSettings(
      { "other-theme@@bg1": "#fff" },
      "my-theme",
    );
    assert.equal(result.css, "");
  });

  test("empty input returns empty string", () => {
    const result = processStyleSettings({}, "my-theme");
    assert.equal(result.css, "");
  });

  test("non-themed variable applies to both light and dark", () => {
    const result = processStyleSettings(
      { "my-theme@@font-size": 16 },
      "my-theme",
    );
    assert.ok(result.css.includes(":root {"));
    assert.ok(result.css.includes('saved-theme="dark"'));
    const matches = result.css.match(/--font-size: 16;/g);
    assert.equal(matches?.length, 2);
  });

  test("class-toggle rewrites Obsidian explorer selectors to Quartz", () => {
    const classMap = {
      "bold-folders": {
        general:
          ".bold-folders .nav-folder-title-content {\nfont-weight: bold;\n}",
      },
    };
    const result = processStyleSettings(
      { "my-theme@@bold-folders": true },
      "my-theme",
      classMap,
    );
    assert.ok(
      result.css.includes(".explorer .folder-container > div"),
      `Expected Quartz explorer selector but got:\n${result.css}`,
    );
    assert.ok(
      !result.css.includes(".nav-folder-title-content"),
      "Obsidian selector should have been rewritten",
    );
    assert.ok(result.css.includes("font-weight: bold;"));
  });

  test("class-toggle drops rules with Obsidian-only selectors", () => {
    const classMap = {
      "my-opt": {
        general: [
          ".my-opt {\n--my-var: red;\n}",
          ".my-opt .workspace-tab-header {\ncolor: blue;\n}",
        ].join("\n"),
      },
    };
    const result = processStyleSettings(
      { "my-theme@@my-opt": true },
      "my-theme",
      classMap,
    );
    assert.ok(
      result.css.includes("--my-var: red;"),
      "Variable-only block should survive",
    );
    assert.ok(
      !result.css.includes("workspace-tab-header"),
      "Obsidian-only selector should be dropped",
    );
    assert.ok(
      !result.css.includes("color: blue;"),
      "Properties from dropped rule should not appear",
    );
  });

  test("class-toggle with only Obsidian-only selectors produces empty output", () => {
    const classMap = {
      "editor-opt": {
        general: ".editor-opt .cm-editor {\nfont-size: 14px;\n}",
      },
    };
    const result = processStyleSettings(
      { "my-theme@@editor-opt": true },
      "my-theme",
      classMap,
    );
    assert.equal(
      result.css,
      "",
      "All-Obsidian class toggle should produce empty CSS",
    );
  });
});
