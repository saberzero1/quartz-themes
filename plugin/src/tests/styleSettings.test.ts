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
    const classMap = { "my-toggle": ".foo { color: red; }" };
    const result = processStyleSettings(
      { "my-theme@@my-toggle": true },
      "my-theme",
      classMap,
    );
    assert.ok(result.css.includes(".foo { color: red; }"));
  });

  test("class-toggle true without classSettings map is a no-op", () => {
    const result = processStyleSettings(
      { "my-theme@@my-toggle": true },
      "my-theme",
    );
    assert.equal(result.css, "");
  });

  test("class-toggle false is a no-op", () => {
    const classMap = { "my-toggle": ".foo { color: red; }" };
    const result = processStyleSettings(
      { "my-theme@@my-toggle": false },
      "my-theme",
      classMap,
    );
    assert.equal(result.css, "");
  });

  test("class-select value injects pre-extracted CSS for selected option", () => {
    const classMap = {
      "dark-default": ":root { --bg: #000; }",
      "dark-midnight": ":root { --bg: #0a0a2e; }",
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
});
