# Quartz Themes v5 Plugin: Detailed Implementation Plan

This plan is a self-contained handoff for continuing work on the Quartz v5 plugin conversion. It assumes the existing repo state described below and enumerates concrete steps, file changes, and verification. Follow in order.

---

## 0) Current State (Summary)

- Repo: `/home/saberzero1/Repos/quartz-themes`
- Goal: Convert quartz-themes into a Quartz v5 plugin (subdirectory `plugin/`) with per-theme selection, optional variation, per-aspect mix-and-match, aspect omission to shrink bundle, selective asset bundling (fonts/callouts/etc.), and retain `themes/` for v4 compatibility.
- Plugin architecture already scaffolded (uncommitted):
  - `plugin/package.json`
  - `plugin/tsconfig.json`
  - `plugin/tsup.config.ts`
  - `plugin/src/types.ts`
  - `plugin/src/registry.ts`
  - `plugin/src/composer.ts`
  - `plugin/src/transformer.ts`
  - `plugin/src/index.ts`
- **Critical missing piece**: `plugin/scripts/generate.js` (must be authored). It should generate theme modules from `runner/results/*/*.json` using mappings from `runner/scripts/config.js`.

## 1) Requirements & Decisions (Locked)

- Package name: `quartz-themes` (unscoped)
- Plugin location: `plugin/` subdirectory of this repo
- Plugin type: Quartz v5 Transformer plugin only (no component)
- Theme selection API: nested variation
  - `theme: "catppuccin", variation: "frappe"`
- Use Quartz built-in `Darkmode()` (no theme switcher UI)
- Keep `themes/` directory for v4 users (dual output)
- CSS output: **Pre-compiled CSS strings**
- Bundle strategy: **All themes in one package, tree-shakeable**

## 2) Architecture Overview

### 2.1 Plugin runtime

- A transformer `QuartzTheme()` composes CSS at build time from theme data and injects into `externalResources()` as inline CSS.
- Theme CSS is assembled by `composer.ts`, which:
  - loads a base theme module (generated),
  - merges per-aspect overrides (from other themes),
  - respects mode selection (dark/light/both).

### 2.2 Generated theme data

- Generated TS module per theme: `plugin/src/themes/{theme-id}.ts`
- Each module exports `theme: ThemeData`:

  ```ts
  export const theme: ThemeData = {
    meta: { name, modes, variations, fonts },
    dark: { base: "...", callouts: "...", ... },
    light: { base: "...", callouts: "...", ... },
  };
  ```

- `ThemeData.dark`/`light` are **AspectCSS** maps (strings of CSS), not merged with `light-dark()` functions.
- `base` aspect includes **all** body CSS variables (no filtering).

### 2.3 CSS wrapping

- When **both modes** exist for a theme:
  - Light variables in `:root:root { ... }`
  - Dark variables in `:root:root[saved-theme="dark"] { ... }`
- When **single mode only**: vars in `:root:root { ... }`
- Per-element selectors: always wrapped in
  - `body[data-slug] div#quartz-root.page { <selector> { ... } }`

## 3) Input Data Sources

### 3.1 Theme metadata

- `themes.json` contains all theme metadata (modes, variations, fonts).

### 3.2 Compiled theme style data

- `runner/results/{theme-id}/dark.json` and `light.json` are **flat JSON objects keyed by Obsidian selectors**:
  ```json
  {
    "body": { "--var": "value", "color": "..." },
    ".clickable-icon": { "color": "..." }
  }
  ```

### 3.3 Selector mapping

- `runner/scripts/config.js` exports `config` array with mappings:
  ```js
  {
    (obsidianSelector,
      publishSelector,
      quartzSelector,
      pseudoElement,
      properties);
  }
  ```

## 4) Aspect Taxonomy (Locked)

Use the following list and mapping (indexed to config.js line ranges). This is critical for the generator.

**Aspect keys** (must match `AspectKey` union in `plugin/src/types.ts`):

`base`, `typography`, `callouts`, `tables`, `code`, `links`, `blockquotes`, `checkboxes`, `images`, `embeds`, `cards`, `search`, `scrollbars`, `explorer`, `toc`, `graph`, `popover`, `footer`, `recentNotes`, `listPage`, `darkmode`, `breadcrumbs`, `lists`, `misc`.

**Config → Aspect mapping** (based on config.js line ranges; keep in generator):

- `base`: ~276–347
- `links`: ~348–398
- `typography`: ~399–471 and ~811–858
- `search`: ~473–809
- `lists`: ~532–583
- `code`: ~584–638 and ~2135–2182
- `checkboxes`: ~639–695 and ~1567–1693
- `blockquotes`: ~696–703
- `scrollbars`: ~970–1035
- `callouts`: ~1036–1284
- `tables`: ~1285–1341 and ~2104–2111
- `images`: ~1342–1377
- `embeds`: ~1378–1399 and ~2052–2089
- `misc/base`: ~1400–1536
- `explorer`: ~1749–1813
- `toc`: ~1814–1855
- `graph`: ~1856–1905
- `popover`: ~1906–1926
- `footer`: ~1927–1946
- `recentNotes`: ~1947–1976
- `listPage`: ~1977–2005
- `darkmode`: ~2006–2020
- `breadcrumbs`: ~2021–2035
- `misc`: ~2036–2222

**Note**: The generator should implement this mapping using **config array indices**, not line numbers (line numbers used only for initial mapping). Keep the mapping as index ranges once you count the config entries.

## 5) Implementation Plan

### Step 1 — Author `plugin/scripts/generate.js`

**Goal**: Convert compiled theme JSONs into per-aspect CSS strings and generate TS modules + registry.

**Inputs**:

- `themes.json`
- `runner/results/{theme}/dark.json` and `light.json`
- `runner/scripts/config.js` (import `config` array)

**Outputs**:

- `plugin/src/themes/{theme-id}.ts`
- `plugin/src/themes/_registry.ts`

**Algorithm** (high-level):

1. Load `themes.json` and build a map of theme metadata.
2. Import `config` from `runner/scripts/config.js`.
3. Build `aspectByConfigIndex[]` using the mapping in section 4 (index ranges). Any entry not covered should default to `misc`.
4. For each `theme-id` in `runner/results/`:
   - Read `dark.json` and/or `light.json` if present.
   - For each mode data:
     - Extract **body CSS vars** from `data["body"]` keys starting with `--` → place into `base` aspect (variables only).
     - For each config entry:
       - Look up `data[obsidianSelector]`.
       - For each `property` in `properties`, if value exists and is not `"inherit"`, store under `aspect` and `quartzSelector`.
     - Convert each aspect’s selector map into CSS:
       - Build `:root:root{...}` or `:root:root[saved-theme="dark"]{...}` containing only CSS vars (from body extraction).
       - Build `body[data-slug] div#quartz-root.page { selector { prop: value; } }` for per-element styles.
       - Concatenate sections with `\n` (root vars first).
   - Build `ThemeData` object with `meta` from `themes.json` entry.
   - Write module `plugin/src/themes/{theme-id}.ts` exporting `theme`.

**Registry file**:

- `plugin/src/themes/_registry.ts` should export two objects:
  - `themeMetas`: map id → meta (name, modes, variations, fonts)
  - `themeImports`: map id → lazy loader
    ```ts
    export const themeImports = {
      "tokyo-night": () => import("./tokyo-night.js"),
    } as const;
    ```

**Important formatting details**:

- Ensure generated files use **ESM** imports/exports.
- Escape backticks in CSS strings (use template literals and replace `\``).
- Keep CSS strings minimal and deterministic (stable ordering of properties and selectors).
- Ensure files are written with LF and no extra trailing whitespace.

### Step 2 — Fix composer/transformer async behavior

Current `transformer.ts` uses `externalResources()` sync API. But `composeCSS()` is async.

**Options**:

1. Pre-resolve CSS at plugin initialization: create a `resolvedCSSPromise` and block via `await` inside an async `beforeBuild` hook (if Quartz provides one), or
2. Change compose to sync by pre-loading generated theme data maps synchronously (if possible), or
3. Cache Promise and return empty CSS until resolved (risky, likely wrong).

**Recommended**: Investigate Quartz v5 transformer lifecycle in plugin template; align with recommended pattern. Update `transformer.ts` to properly await CSS composition before resources are needed.

### Step 3 — Add generate recipe to `justfile`

Add a recipe like:

```
generate-plugin:
  node plugin/scripts/generate.js
  (cd plugin && npm run build)
```

### Step 4 — Run a small proof-of-concept generation

Generate 2–3 themes only (e.g., `tokyo-night`, `catppuccin`, `minimal`) to verify correctness.

### Step 5 — Build & verify plugin

- In `plugin/`:
  - `npm install`
  - `npm run build` (tsup)

### Step 6 — Generate all themes

- Run generator for all theme dirs in `runner/results/`.

### Step 7 — Validate output integrity

- Sanity check:
  - `plugin/src/themes/_registry.ts` includes all generated themes
  - Sample theme file contains both modes and correct root wrapping
  - Base aspect includes body vars
  - No `inherit` values emitted

### Step 8 — Commit

- Commit all plugin scaffolding + generate output when user requests.

## 6) Detailed Implementation Notes for `generate.js`

### 6.1 File layout

- Put generator in `plugin/scripts/generate.js` (Node ESM or CJS; consistent with root config).
- Use `path`/`fs` only. Avoid external deps.

### 6.2 Stable ordering

- Sort selectors and properties to keep deterministic output.
- Use consistent ordering of aspects: same order as `ASPECT_ORDER` in `composer.ts`.

### 6.3 Theme id normalization

- Theme dirs may include dots (e.g., `catppuccin.frappe`). Use file name same as dir name, but ensure valid TS import path and object key.

### 6.4 Variations

- In `themes.json`, `variations` may be `[{ name, injects }]` or dot-notation theme names. The generator should store variations list in `meta.variations` exactly as defined.

### 6.5 CSS variables and body

- Only use `data["body"]` for CSS variables. Do not attempt to use `html` since `html` is skipped in extraction.

### 6.6 Serialization of CSS values

- Values already string; output as `prop: value;` with exact string.
- Skip null/undefined/empty strings.
- Skip `inherit`.

## 7) Verification Checklist

- `npm run build` in `plugin/` passes
- `node plugin/scripts/generate.js` produces theme files + registry
- `lsp_diagnostics` for `plugin/src/**/*.ts` has no errors
- Sample theme file includes:
  - `:root:root` and `:root:root[saved-theme="dark"]` for dual-mode
  - `body[data-slug] div#quartz-root.page` wrapping
- Generated registry matches number of theme directories

## 8) Risks & Pitfalls

- **Async composition**: Must resolve before Quartz tries to inject CSS.
- **Aspect mapping**: Incorrect index ranges will mix aspects. Validate by spot checking callouts/tables.
- **Body vars**: If `body` selector is missing in theme JSON, base vars might be empty; ensure generator handles missing keys gracefully.
- **Determinism**: Non-deterministic ordering will create noisy diffs; sort keys.

---

## 9) Immediate Next Action

Implement `plugin/scripts/generate.js` as described in Section 5 Step 1. Then run proof-of-concept generation on a few themes and fix any issues before generating all themes.
