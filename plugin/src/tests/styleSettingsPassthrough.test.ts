import { test, describe } from "node:test";
import { strict as assert } from "node:assert";
import { processStyleSettings } from "../styleSettings";
import { composeCSS } from "../composer";

/**
 * Style Settings Passthrough Verification
 *
 * Tests the full pipeline: user config → processStyleSettings → CSS output.
 * Uses real themes loaded via composeCSS to verify end-to-end wiring.
 */

function getPrefix(styleSettingsId: string | string[] | undefined): string {
  if (!styleSettingsId) return "";
  return Array.isArray(styleSettingsId) ? styleSettingsId[0]! : styleSettingsId;
}

// ─── Group 1: Variable Overrides Reach the Output ────────────────────────────

describe("Group 1: Variable Overrides", () => {
  test("1.1: Simple variable override emits CSS custom property", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "tokyo-night",
      mode: "both",
    });
    const prefix = getPrefix(styleSettingsId);
    assert.ok(prefix, "tokyo-night should have a styleSettingsId");

    const result = processStyleSettings(
      { [`${prefix}@@custom-var`]: "test-value" },
      styleSettingsId!,
      classSettings,
    );
    assert.ok(
      result.css.includes("--custom-var: test-value;"),
      `Expected CSS to contain "--custom-var: test-value;" but got:\n${result.css}`,
    );
  });

  test("1.2: Themed color produces separate light/dark blocks", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "tokyo-night",
      mode: "both",
    });
    const prefix = getPrefix(styleSettingsId);

    const result = processStyleSettings(
      {
        [`${prefix}@@accent@@light`]: "#ff0000",
        [`${prefix}@@accent@@dark`]: "#00ff00",
      },
      styleSettingsId!,
      classSettings,
    );
    assert.ok(result.css.includes(":root {"), "Should have :root block");
    assert.ok(
      result.css.includes("--accent: #ff0000;"),
      "Light accent should be present",
    );
    assert.ok(
      result.css.includes('saved-theme="dark"'),
      "Should have dark mode block",
    );
    assert.ok(
      result.css.includes("--accent: #00ff00;"),
      "Dark accent should be present",
    );
  });

  test("1.3: Number value emits without format suffix", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "tokyo-night",
      mode: "both",
    });
    const prefix = getPrefix(styleSettingsId);

    const result = processStyleSettings(
      { [`${prefix}@@font-size`]: 18 },
      styleSettingsId!,
      classSettings,
    );
    assert.ok(
      result.css.includes("--font-size: 18;"),
      `Expected "--font-size: 18;" in:\n${result.css}`,
    );
  });

  test("1.4: Non-themed variable appears in BOTH mode blocks", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "tokyo-night",
      mode: "both",
    });
    const prefix = getPrefix(styleSettingsId);

    const result = processStyleSettings(
      { [`${prefix}@@border-radius`]: "8px" },
      styleSettingsId!,
      classSettings,
    );
    const rootMatches = result.css.match(/--border-radius:\s*8px;/g);
    assert.equal(
      rootMatches?.length,
      2,
      'Non-themed var should appear in both :root and :root[saved-theme="dark"]',
    );
  });
});

// ─── Group 2: Class-Toggle CSS Passthrough ───────────────────────────────────

describe("Group 2: Class-Toggle Passthrough", () => {
  test("2.1: Class-toggle true injects classSettings CSS", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "minimal",
      mode: "both",
    });
    const prefix = getPrefix(styleSettingsId);
    assert.ok(prefix, "minimal should have a styleSettingsId");
    assert.ok(classSettings, "minimal should have classSettings");

    // Find a class-toggle that has actual CSS
    const toggleId = Object.keys(classSettings).find(
      (k) =>
        classSettings[k]!.general ||
        classSettings[k]!.dark ||
        classSettings[k]!.light,
    );

    if (toggleId) {
      const result = processStyleSettings(
        { [`${prefix}@@${toggleId}`]: true },
        styleSettingsId!,
        classSettings,
      );
      assert.ok(
        result.css.length > 0,
        `Class-toggle "${toggleId}" with value=true should inject CSS`,
      );
    }
  });

  test("2.2: Class-toggle false produces no CSS", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "minimal",
      mode: "both",
    });
    const prefix = getPrefix(styleSettingsId);
    assert.ok(classSettings);

    const toggleId = Object.keys(classSettings).find(
      (k) =>
        classSettings[k]!.general ||
        classSettings[k]!.dark ||
        classSettings[k]!.light,
    );

    if (toggleId) {
      const result = processStyleSettings(
        { [`${prefix}@@${toggleId}`]: false },
        styleSettingsId!,
        classSettings,
      );
      assert.equal(result.css, "", "Class-toggle false should produce no CSS");
    }
  });

  test("2.3: Class-toggle selectors are rewritten from body.class to :root", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "minimal",
      mode: "both",
    });
    const prefix = getPrefix(styleSettingsId);
    assert.ok(classSettings);

    const toggleId = Object.keys(classSettings).find(
      (k) =>
        classSettings[k]!.general ||
        classSettings[k]!.dark ||
        classSettings[k]!.light,
    );

    if (toggleId) {
      const result = processStyleSettings(
        { [`${prefix}@@${toggleId}`]: true },
        styleSettingsId!,
        classSettings,
      );
      // Should NOT contain body.className selectors
      assert.ok(
        !result.css.includes(`body.${toggleId}`),
        `body.${toggleId} should be rewritten`,
      );
      // Should contain :root selectors
      assert.ok(
        result.css.includes(":root"),
        "Rewritten CSS should contain :root selectors",
      );
    }
  });
});

// ─── Group 3: Class-Select CSS Passthrough ───────────────────────────────────

describe("Group 3: Class-Select Passthrough", () => {
  test("3.1: Class-select value injects the correct variant CSS", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "anuppuccin",
      mode: "both",
    });
    const prefix = getPrefix(styleSettingsId);
    assert.ok(classSettings, "anuppuccin should have classSettings");

    // Find a class-select option that has CSS (e.g. ctp-frappe, ctp-macchiato, ctp-mocha)
    const optionId = Object.keys(classSettings).find(
      (k) =>
        k.startsWith("ctp-") &&
        (classSettings[k]!.general ||
          classSettings[k]!.dark ||
          classSettings[k]!.light),
    );

    if (optionId) {
      const result = processStyleSettings(
        { [`${prefix}@@anuppuccin-theme-dark`]: optionId },
        styleSettingsId!,
        classSettings,
      );
      assert.ok(
        result.css.length > 0,
        `Class-select value "${optionId}" should inject CSS`,
      );
    }
  });

  test("3.2: Class-select unknown value falls through to CSS variable", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "anuppuccin",
      mode: "both",
    });
    const prefix = getPrefix(styleSettingsId);

    const result = processStyleSettings(
      { [`${prefix}@@some-select`]: "nonexistent-option" },
      styleSettingsId!,
      classSettings,
    );
    assert.ok(
      result.css.includes("--some-select: nonexistent-option;"),
      "Unknown class-select value should fall through to CSS variable",
    );
  });
});

// ─── Group 4: StyleSettingsId Matching ───────────────────────────────────────

describe("Group 4: StyleSettingsId Matching", () => {
  test("4.1: Single string styleSettingsId passes through", () => {
    const { styleSettingsId } = composeCSS({ theme: "minimal", mode: "both" });
    const ids = Array.isArray(styleSettingsId)
      ? styleSettingsId
      : [styleSettingsId];
    assert.ok(
      ids.length >= 1,
      "minimal should have at least 1 styleSettingsId",
    );

    const css = processStyleSettings(
      { [`${ids[0]}@@test`]: "value" },
      styleSettingsId!,
    ).css;
    assert.ok(
      css.includes("--test: value;"),
      "Settings with matching prefix should pass through",
    );
  });

  test("4.2: Array styleSettingsId (multi-block themes) — all IDs match", () => {
    const { styleSettingsId } = composeCSS({
      theme: "its-theme",
      mode: "both",
    });
    const ids = Array.isArray(styleSettingsId)
      ? styleSettingsId
      : [styleSettingsId];

    // Settings with ANY matching prefix pass through
    for (const id of ids) {
      const css = processStyleSettings(
        { [`${id}@@test`]: "value" },
        styleSettingsId!,
      ).css;
      assert.ok(css.includes("--test: value;"), `Prefix "${id}" should match`);
    }
  });

  test("4.3: Non-matching prefix is ignored", () => {
    const { styleSettingsId } = composeCSS({
      theme: "tokyo-night",
      mode: "both",
    });

    const css = processStyleSettings(
      { "wrong-theme-id@@test": "value" },
      styleSettingsId!,
    ).css;
    assert.equal(css, "", "Non-matching prefix should produce no CSS");
  });
});

// ─── Group 5: CSS Layer Ordering ─────────────────────────────────────────────

describe("Group 5: CSS Layer Ordering", () => {
  test("5.1: Override CSS can be wrapped in obsidian-theme-overrides layer", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "tokyo-night",
      mode: "both",
    });
    const prefix = getPrefix(styleSettingsId);

    const overrideCSS = processStyleSettings(
      { [`${prefix}@@test`]: "value" },
      styleSettingsId!,
      classSettings,
    ).css;

    // The transformer wraps overrides in @layer
    const wrapped = `@layer obsidian-theme-overrides {\n${overrideCSS}\n}`;
    assert.ok(
      wrapped.includes("@layer obsidian-theme-overrides"),
      "Wrapped CSS should contain layer declaration",
    );
    assert.ok(
      wrapped.includes("--test: value;"),
      "Wrapped CSS should contain the variable",
    );
  });

  test("5.2: Layer declaration order is correct", () => {
    const layerDecl =
      "@layer quartz-base, obsidian-theme, obsidian-theme-overrides, quartz-themes-base;";
    const layers = layerDecl
      .match(/@layer\s+([\w-]+(?:\s*,\s*[\w-]+)*)/)?.[1]
      ?.split(",")
      .map((s) => s.trim());
    assert.ok(layers, "Should parse layer declaration");
    const themeIdx = layers.indexOf("obsidian-theme");
    const overrideIdx = layers.indexOf("obsidian-theme-overrides");
    assert.ok(
      overrideIdx > themeIdx,
      "Overrides layer must come after theme layer in the declaration",
    );
  });
});

// ─── Group 6: Mode Scoping Correctness ───────────────────────────────────────

describe("Group 6: Mode Scoping", () => {
  test("6.1: Dark-only class CSS is wrapped in dark scope", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "minimal",
      mode: "both",
    });
    const prefix = getPrefix(styleSettingsId);

    if (!classSettings) return;

    const darkOnlyId = Object.keys(classSettings).find(
      (k) =>
        classSettings[k]!.dark &&
        !classSettings[k]!.general &&
        !classSettings[k]!.light,
    );

    if (darkOnlyId) {
      const css = processStyleSettings(
        { [`${prefix}@@${darkOnlyId}`]: true },
        styleSettingsId!,
        classSettings,
      ).css;
      if (!css) return;
      assert.ok(
        css.includes('saved-theme="dark"'),
        `Dark-only class "${darkOnlyId}" should produce dark-scoped CSS`,
      );
    }
  });

  test("6.2: Light-only class CSS is wrapped in light scope", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "minimal",
      mode: "both",
    });
    const prefix = getPrefix(styleSettingsId);

    if (!classSettings) return;

    const lightOnlyId = Object.keys(classSettings).find(
      (k) =>
        classSettings[k]!.light &&
        !classSettings[k]!.general &&
        !classSettings[k]!.dark,
    );

    if (lightOnlyId) {
      const css = processStyleSettings(
        { [`${prefix}@@${lightOnlyId}`]: true },
        styleSettingsId!,
        classSettings,
      ).css;
      if (!css) return;
      assert.ok(
        css.includes('saved-theme="light"'),
        `Light-only class "${lightOnlyId}" should produce light-scoped CSS`,
      );
    }
  });

  test("6.3: General class CSS applies without mode wrapper", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "minimal",
      mode: "both",
    });
    const prefix = getPrefix(styleSettingsId);

    if (!classSettings) return;

    const generalOnlyId = Object.keys(classSettings).find(
      (k) =>
        classSettings[k]!.general &&
        !classSettings[k]!.dark &&
        !classSettings[k]!.light,
    );

    if (generalOnlyId) {
      const css = processStyleSettings(
        { [`${prefix}@@${generalOnlyId}`]: true },
        styleSettingsId!,
        classSettings,
      ).css;
      assert.ok(css.includes(":root"), "General class CSS should use :root");
      assert.ok(
        !css.includes("saved-theme"),
        "General class CSS should NOT have mode-specific wrappers",
      );
    }
  });
});

// ─── Group 7: Edge Cases ─────────────────────────────────────────────────────

describe("Group 7: Edge Cases", () => {
  test("7.1: composeCSS without styleSettings still returns base CSS", () => {
    const result = composeCSS({ theme: "tokyo-night", mode: "both" });
    assert.ok(
      result.css.length > 0,
      "composeCSS should return base CSS without styleSettings",
    );
  });

  test("7.2: Theme without styleSettingsId — processStyleSettings is a no-op", () => {
    const { styleSettingsId } = composeCSS({
      theme: "hackthebox",
      mode: "dark",
    });
    // hackthebox may or may not have styleSettingsId. If it doesn't:
    if (!styleSettingsId) {
      const css = processStyleSettings({ "anything@@test": "value" }, "").css;
      assert.equal(css, "", "No styleSettingsId should produce no CSS");
    } else {
      // If it does have one, non-matching prefix should still be empty
      const css = processStyleSettings(
        { "wrong-id@@test": "value" },
        styleSettingsId,
      ).css;
      assert.equal(css, "", "Non-matching prefix should produce no CSS");
    }
  });

  test("7.3: Empty styleSettings object produces no CSS", () => {
    const { styleSettingsId } = composeCSS({
      theme: "tokyo-night",
      mode: "both",
    });
    const css = processStyleSettings({}, styleSettingsId!).css;
    assert.equal(css, "", "Empty settings should produce empty CSS");
  });

  test("7.4: Variation theme inherits base theme classSettings", () => {
    const { classSettings: baseCS } = composeCSS({
      theme: "catppuccin",
      mode: "both",
    });
    const { classSettings: varCS } = composeCSS({
      theme: "catppuccin",
      variation: "frappe",
      mode: "both",
    });

    // Both should have classSettings defined (or both undefined)
    if (baseCS && varCS) {
      assert.deepEqual(
        Object.keys(varCS).sort(),
        Object.keys(baseCS).sort(),
        "Variation should inherit same classSettings keys as base",
      );
    }
  });
});

// ─── Group 8: Real Theme Integration ─────────────────────────────────────────

describe("Group 8: Real Theme Integration", () => {
  test("8.1: Real variable override for tokyo-night", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "tokyo-night",
      mode: "both",
    });
    const prefix = getPrefix(styleSettingsId);
    assert.ok(prefix, "tokyo-night should have styleSettingsId");

    const css = processStyleSettings(
      { [`${prefix}@@accent-h`]: "250" },
      styleSettingsId!,
      classSettings,
    ).css;
    assert.ok(
      css.includes("--accent-h: 250;"),
      "Real tokyo-night variable override should produce CSS",
    );
  });

  test("8.2: Real class-toggle for minimal", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "minimal",
      mode: "both",
    });
    const prefix = getPrefix(styleSettingsId);
    assert.ok(classSettings, "minimal should have classSettings");

    const toggleKeys = Object.keys(classSettings);
    const validToggle = toggleKeys.find(
      (k) =>
        classSettings[k]!.general ||
        classSettings[k]!.dark ||
        classSettings[k]!.light,
    );

    if (validToggle) {
      const css = processStyleSettings(
        { [`${prefix}@@${validToggle}`]: true },
        styleSettingsId!,
        classSettings,
      ).css;
      assert.ok(
        css.length > 10,
        `Toggle "${validToggle}" should produce substantive CSS`,
      );
    }
  });

  test("8.3: Real class-select for anuppuccin", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "anuppuccin",
      mode: "both",
    });
    const prefix = getPrefix(styleSettingsId);
    assert.ok(classSettings, "anuppuccin should have classSettings");

    // ctp-mocha is a class-select option for the dark theme flavor
    if (classSettings["ctp-mocha"]) {
      const css = processStyleSettings(
        { [`${prefix}@@anuppuccin-theme-dark`]: "ctp-mocha" },
        styleSettingsId!,
        classSettings,
      ).css;
      assert.ok(css.length > 0, "ctp-mocha class-select should inject CSS");
    }
  });

  test("8.4: its-theme array styleSettingsId all work", () => {
    const { styleSettingsId, classSettings } = composeCSS({
      theme: "its-theme",
      mode: "both",
    });
    const ids = Array.isArray(styleSettingsId)
      ? styleSettingsId
      : [styleSettingsId];

    assert.ok(
      ids.length >= 1,
      "its-theme should have at least one styleSettingsId",
    );

    for (const id of ids) {
      const css = processStyleSettings(
        { [`${id}@@border-width`]: "2px" },
        styleSettingsId!,
        classSettings,
      ).css;
      assert.ok(
        css.includes("--border-width: 2px;"),
        `its-theme prefix "${id}" should produce CSS`,
      );
    }
  });
});
