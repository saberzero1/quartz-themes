# CLI Extraction Differences Analysis

This document analyzes the differences between the old WebdriverIO-based extraction and the new CLI-based extraction for Quartz themes.

## Executive Summary

The new CLI extraction is **missing CSS custom properties (variables)** from the `body` element. This is the primary cause of the massive line deletions in the compiled output (~1.8M lines removed).

| Metric                | Old (WebdriverIO) | New (CLI)    | Difference |
| --------------------- | ----------------- | ------------ | ---------- |
| CSS variables in body | 278               | 0            | **-278**   |
| Selectors             | 146               | 146          | Same       |
| Standard properties   | ~2,350            | ~2,627       | +277       |
| Compiled \_index.scss | ~2,800 lines      | ~1,000 lines | **-64%**   |

## Root Cause: Missing CSS Variables

### The Problem

The CLI extractor's `getAllCssVars()` function in `generateFullExtractionScript()` is supposed to extract CSS custom properties from the `body` element, but these are being lost somewhere in the pipeline.

**Old dark.json body structure:**

```json
{
  "body": {
    "background-color": "rgb(60, 60, 60)",
    "color": "rgb(179, 179, 179)",
    "--accent-h": "0",
    "--accent-l": "75%",
    "--accent-s": "0%",
    "--background-primary": "#3c3c3c",
    "--text-normal": "#b3b3b3"
    // ... 275 more CSS variables
  }
}
```

**New dark.json body structure:**

```json
{
  "body": {
    "background-color": "rgb(60, 60, 60)",
    "color": "rgb(179, 179, 179)",
    "font-family": "..."
    // NO CSS variables!
  }
}
```

### Impact on Compiled Output

The `compile.js` script calls `getAllVariables(themeName, optionSetName, isDarkMode, "body")` to retrieve CSS variables from the database. Since no variables are being stored, the compiled output is missing:

1. **`:root:root` variables block** - All `--accent-*`, `--background-*`, `--text-*`, `--color-*`, etc.
2. **`publish.css` variables** - Same variables needed for Obsidian Publish compatibility
3. **Graph colors** - `--quartz-graph-*` mappings depend on theme variables
4. **Code colors** - `--code-*` syntax highlighting colors

## Investigation Findings

### 1. CSS Variable Extraction Logic

**Location:** `runner/scripts/cli-extractor.js`, lines 417-427

```javascript
function getAllCssVars(style) {
  const vars = {};
  for (let i = 0; i < style.length; i++) {
    const prop = style[i];
    if (prop.startsWith("--")) {
      const val = style.getPropertyValue(prop);
      if (val && val.trim()) vars[prop] = val.trim();
    }
  }
  return vars;
}
```

**Issue:** The `style.length` iteration may not be capturing CSS variables properly. In Electron/Chromium, CSS custom properties may not appear in the `CSSStyleDeclaration` iterator by default.

### 2. Baseline Deduplication

**Location:** `runner/scripts/cli-extractor.js`, lines 517-538

The deduplication logic removes properties that match the baseline. If CSS variables were being extracted but matched the baseline exactly, they would be removed.

**However:** The baseline also shows 0 CSS variables, suggesting the extraction itself is failing, not the deduplication.

### 3. Property Filtering

**Location:** `runner/scripts/cli-extractor.js`, lines 63-133

The `STYLE_PROPERTIES` whitelist only includes standard CSS properties, not CSS custom properties. This is intentional as CSS variables should be handled by `getAllCssVars()`.

## Additional Differences Found

### Missing Standard Properties

The CLI extractor's `STYLE_PROPERTIES` whitelist is missing several properties that WebdriverIO extracted:

| Missing Property  | Usage                |
| ----------------- | -------------------- |
| `appearance`      | Button/input styling |
| `cursor`          | Interactive elements |
| `display`         | Layout control       |
| `overflow-x`      | Scroll behavior      |
| `pointer-events`  | Click handling       |
| `position`        | Positioning          |
| `scrollbar-color` | Scrollbar theming    |
| `scrollbar-width` | Scrollbar sizing     |
| `transform`       | Animations/effects   |
| `transition`      | Animations           |
| `user-select`     | Text selection       |
| `vertical-align`  | Text alignment       |
| `width`           | Sizing               |
| `-webkit-mask-*`  | Masking effects      |

### Missing Pseudo-Element Extraction

WebdriverIO extracted styles from pseudo-elements:

- `::before`
- `::after`
- `::selection`
- `::marker`
- `::placeholder`

The CLI extractor does not handle pseudo-elements at all.

### Missing HTML Element Variables

WebdriverIO extracted CSS variables from both `html` and `body` elements. CLI only extracts from `body`.

## Recommended Fixes

### Priority 1: Fix CSS Variable Extraction (Critical)

The CSS variable extraction needs to be fixed. Options:

**Option A: Use `getComputedStyle().getPropertyValue()` for known variables**

```javascript
const KNOWN_CSS_VARS = [
  "--accent-h",
  "--accent-l",
  "--accent-s",
  "--background-primary",
  "--background-secondary",
  // ... enumerate all known Obsidian CSS variables
];

for (const varName of KNOWN_CSS_VARS) {
  const val = style.getPropertyValue(varName);
  if (val && val.trim()) vars[varName] = val.trim();
}
```

**Option B: Use DOM inspection to get declared variables**

```javascript
// Get all style sheets and extract declared custom properties
const sheets = document.styleSheets;
const declaredVars = new Set();
for (const sheet of sheets) {
  for (const rule of sheet.cssRules) {
    if (rule.style) {
      for (const prop of rule.style) {
        if (prop.startsWith("--")) declaredVars.add(prop);
      }
    }
  }
}
```

**Option C: Parse theme.css directly**
Extract CSS variable declarations from the theme's CSS file using a CSS parser.

### Priority 2: Add Missing Standard Properties

Add these to `STYLE_PROPERTIES`:

```javascript
const STYLE_PROPERTIES = [
  // ... existing properties ...
  "appearance",
  "cursor",
  "display",
  "overflow-x",
  "pointer-events",
  "position",
  "scrollbar-color",
  "scrollbar-width",
  "transform",
  "transition",
  "user-select",
  "vertical-align",
  "width",
  "-webkit-mask-image",
  "-webkit-mask-position",
  "-webkit-mask-repeat",
  "-webkit-mask-size",
];
```

### Priority 3: Add Pseudo-Element Support

Implement pseudo-element extraction:

```javascript
const PSEUDO_ELEMENTS = [
  "::before",
  "::after",
  "::selection",
  "::marker",
  "::placeholder",
];

for (const pseudo of PSEUDO_ELEMENTS) {
  const style = window.getComputedStyle(el, pseudo);
  // Extract properties...
}
```

### Priority 4: Extract from HTML Element

Add HTML element CSS variable extraction alongside body.

## Verification Steps

After fixes are implemented:

1. Run extraction on a single theme: `just cli-extract-force theme="Brutalist"`
2. Check CSS variable count: `cat runner/results/brutalist/dark.json | jq '.body | keys | map(select(startswith("--"))) | length'`
3. Expected: ~278 CSS variables
4. Re-run full compilation pipeline
5. Compare compiled output line counts with previous version

## Files Modified by This Analysis

- `runner/scripts/cli-extractor.js` - Main extraction script needing fixes
- `runner/results/*/dark.json` - Theme extraction output (missing CSS vars)
- `runner/results/*/_index.scss` - Compiled output (missing CSS var declarations)
- `runner/results/*/publish.css` - Publish output (missing CSS var declarations)
