# Quartz v5 Theme Mapping Improvements — Implementation Plan

Cross-reference: [`MISSING_MAPPINGS.md`](./MISSING_MAPPINGS.md) for current gap inventory.

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Phase 0: Extraction Pipeline Enhancements](#phase-0-extraction-pipeline-enhancements)
- [Phase 1: Quick Wins (Hours)](#phase-1-quick-wins-hours)
- [Phase 2: Syntax Highlighting Overhaul](#phase-2-syntax-highlighting-overhaul)
- [Phase 3: Explorer Full Mapping](#phase-3-explorer-full-mapping)
- [Phase 4: Search, TOC, and Partial-Mapping Completions](#phase-4-search-toc-and-partial-mapping-completions)
- [Phase 5: New Aspect Categories](#phase-5-new-aspect-categories)
- [Phase 6: Quartz v5 Plugin Build-Time Transforms](#phase-6-quartz-v5-plugin-build-time-transforms)
- [Appendix A: Obsidian → Quartz Selector Reference](#appendix-a-obsidian--quartz-selector-reference)
- [Appendix B: Quartz v5 Plugin Extension Points](#appendix-b-quartz-v5-plugin-extension-points)

---

## Architecture Overview

### Current Pipeline

```
Obsidian (running instance)
  │
  ├─ obsidian eval  ←── cli-extractor.js
  │   ├─ getComputedStyle() on all config.js selectors
  │   ├─ CSS custom property discovery from all stylesheets
  │   ├─ Pseudo-element extraction (::before, ::after, ::selection, ::marker, ::placeholder)
  │   ├─ Checkbox icon extraction (mask-image, content, color)
  │   └─ Baseline deduplication (only theme-specific overrides kept)
  │
  ├─ Results: runner/results/{theme}/{dark|light}.json
  │
  ├─ compile.js  ←── reads results, applies config.js mappings
  │   ├─ Obsidian selector → Quartz selector translation
  │   ├─ Property transformations (caret-color → color, etc.)
  │   ├─ Callout icon resolution (Lucide name → SVG data URI)
  │   ├─ Checkbox CSS transformation (input::after → li::before)
  │   └─ PostCSS optimization
  │
  └─ Output: plugin/src/themes/{theme}.ts  (AspectCSS per mode)
```

### How `cli-extractor.js` Works

The CLI extractor uses Obsidian's `eval` command (v1.12+) to execute JavaScript directly in the running Obsidian renderer process. Key mechanism:

```javascript
// ObsidianCLI.eval() runs arbitrary JS in Obsidian's context
cli.exec(`obsidian eval code='...'`);
```

The extraction script (`generateFullExtractionScript()`) runs inside Obsidian and:

1. Discovers all CSS custom property names from `document.styleSheets`
2. Iterates every selector from `config.js` via `document.querySelector()`
3. Calls `window.getComputedStyle(el)` to extract 173 standard CSS properties
4. Calls `window.getComputedStyle(el, '::before')` etc. for pseudo-elements
5. Writes results to a temporary JSON file that the Node.js side polls for

This means **any data accessible from Obsidian's DOM is extractable**. We are not limited to CSS — we can extract innerHTML, element attributes, computed layout, or any other DOM property.

### Proposed Extension: DOM Structure Extraction

Since `obsidian eval` gives us full DOM access, we can extend the extraction script to also capture:

- **Element innerHTML** — rendered HTML structure of callouts, code blocks, file explorer
- **Element attributes** — `data-callout`, `data-callout-icon`, class lists
- **Computed properties** — `getComputedStyle()` for elements not currently in `config.js`

This avoids any new dependencies (no WebdriverIO, no CDP, no Playwright). We use the same `obsidian eval` mechanism that already works.

---

## Phase 0: Extraction Pipeline Enhancements

### 0.1 Add DOM Structure Extraction to `cli-extractor.js`

**Goal**: Extend `generateFullExtractionScript()` to capture rendered DOM structure alongside computed styles.

**Implementation**:

Add a new function inside the extraction script that serializes DOM fragments:

```javascript
// Inside generateFullExtractionScript():
function extractDOMStructure(selectors) {
  const domResults = {};
  for (const selector of selectors) {
    const el = document.querySelector(selector);
    if (!el) continue;
    domResults[selector] = {
      tagName: el.tagName.toLowerCase(),
      classList: Array.from(el.classList),
      attributes: Object.fromEntries(
        Array.from(el.attributes).map((a) => [a.name, a.value]),
      ),
      innerHTML: el.innerHTML.substring(0, 10000), // cap size
      childElementCount: el.childElementCount,
    };
  }
  return domResults;
}
```

**Output**: Save alongside existing results as `{theme}/{mode}-dom.json`.

**Files to modify**:

- `runner/scripts/cli-extractor.js` — add DOM extraction to `generateFullExtractionScript()`
- `runner/scripts/cli-extractor.js` — save DOM results in `saveResults()`

**Effort**: Low. Same mechanism, new data captured.

### 0.2 Add Callout Icon Attribute Extraction

**Goal**: Capture `--callout-icon` values directly from rendered callout elements.

Currently, the extraction script grabs computed styles from callout elements, but `--callout-icon` is a CSS custom property set on the callout container. The CSS variable discovery in `discoverCssVarNames()` already finds all `--*` properties from stylesheets, and `getAllCssVars()` reads them via `style.getPropertyValue()`. The issue is that `--callout-icon` is **commented out** in config.js's property list (line 264), so it never reaches `compile.js`.

**Implementation**:

1. In `config.js` line ~264, uncomment `--callout-icon` from the callout container property set
2. Verify the callout selectors in `config.js` include all standard + custom callout types
3. Confirm `compile.js`'s `resolveCalloutIconUri()` handles the extracted values

No changes needed to `cli-extractor.js` — it already extracts all CSS custom properties from matched elements. The fix is entirely in the config/compile layer.

**Files to modify**:

- `runner/scripts/config.js` — uncomment `--callout-icon` (~line 264)
- `runner/scripts/mappings/quartz/callouts.js` — add `--callout-icon` to icon element values
- `runner/scripts/compile.js` — verify `resolveCalloutIconUri()` handles all icon formats

**Effort**: Very low. The code exists, just needs enabling.

### 0.3 Add Syntax Highlighting Color Map Extraction

**Goal**: During extraction, capture the relationship between Obsidian's code token colors and their semantic meaning (keyword, string, comment, etc.).

**Implementation**:

Add a new extraction file to the vault: `theme-code/syntax-samples.md` containing code blocks in multiple languages. In the extraction script, add specialized code block extraction:

```javascript
// Inside generateFullExtractionScript():
function extractCodeTokenColors() {
  const codeBlocks = document.querySelectorAll(
    ".markdown-preview-view pre code .cm-keyword, " +
      ".markdown-preview-view pre code .cm-string, " +
      ".markdown-preview-view pre code .cm-comment, " +
      ".markdown-preview-view pre code .cm-number, " +
      ".markdown-preview-view pre code .cm-operator, " +
      ".markdown-preview-view pre code .cm-property, " +
      ".markdown-preview-view pre code .cm-variable, " +
      ".markdown-preview-view pre code .cm-tag, " +
      ".markdown-preview-view pre code .cm-attribute, " +
      ".markdown-preview-view pre code .cm-type, " +
      ".markdown-preview-view pre code .cm-builtin, " +
      ".markdown-preview-view pre code .cm-def, " +
      ".markdown-preview-view pre code .cm-atom",
  );

  const tokenColors = {};
  for (const el of codeBlocks) {
    const classes = Array.from(el.classList).filter((c) => c.startsWith("cm-"));
    const color = window.getComputedStyle(el).color;
    for (const cls of classes) {
      const tokenName = cls.replace("cm-", "");
      if (!tokenColors[tokenName]) {
        tokenColors[tokenName] = color;
      }
    }
  }
  return tokenColors;
}
```

**Output**: `{theme}/{mode}-code-tokens.json` mapping CodeMirror token types to their computed colors. Example:

```json
{
  "keyword": "rgb(187, 154, 247)",
  "string": "rgb(158, 206, 106)",
  "comment": "rgb(86, 95, 137)",
  "number": "rgb(255, 158, 100)",
  "operator": "rgb(255, 117, 127)"
}
```

**This becomes the bridge** between Obsidian's CodeMirror tokens and the post-process rehype plugin (Phase 2).

**Vault changes**:

- Add `runner/vault/theme-code/syntax-samples.md` with code blocks in JS, Python, HTML, CSS, Rust, etc.
- Ensure the Obsidian vault is in **reading view** (not live preview) for accurate code rendering

**Files to modify**:

- `runner/scripts/cli-extractor.js` — add `extractCodeTokenColors()` to extraction script
- `runner/scripts/cli-extractor.js` — add `theme-code/syntax-samples.md` to `EXTRACTION_FILES`
- `runner/scripts/cli-extractor.js` — save code token results in `saveResults()`

**Effort**: Medium. New extraction logic + vault test files.

### 0.4 Add Explorer/Navigation Variable Extraction

**Goal**: Extract Obsidian's file explorer CSS variables (`--nav-item-color`, `--nav-item-background-hover`, etc.) that aren't currently in `config.js`.

**Implementation**:

Obsidian exposes navigation-specific CSS variables on `:root` / `body`:

| Variable                         | Purpose                     |
| -------------------------------- | --------------------------- |
| `--nav-item-color`               | File/folder text color      |
| `--nav-item-color-hover`         | Hover text color            |
| `--nav-item-color-active`        | Active/click text color     |
| `--nav-item-color-selected`      | Selected item text color    |
| `--nav-item-background-hover`    | Hover background            |
| `--nav-item-background-active`   | Active background           |
| `--nav-item-background-selected` | Selected background         |
| `--nav-item-weight`              | Font weight                 |
| `--nav-collapse-icon-color`      | Chevron/collapse icon color |
| `--nav-indentation-guide-color`  | Indent line color           |
| `--nav-indentation-guide-width`  | Indent line width           |

These are already captured by `discoverCssVarNames()` + `getAllCssVars()` in the extraction script (it discovers ALL `--*` properties from all stylesheets). They appear in the `html` or `body` entry of the results JSON.

The gap is in `config.js` — there's no mapping that uses these variables. Add new mappings:

```javascript
// config.js — new explorer mappings
{
  obsidianSelector: "body",
  quartzSelector: ".folder-container div > a",
  properties: { "color": "--nav-item-color" }
},
{
  obsidianSelector: ".nav-folder-title:hover",
  quartzSelector: ".folder-container div > a:hover",
  properties: { "color": "--nav-item-color-hover" }
}
// ... etc.
```

However, many themes don't set these variables — they override `.nav-folder-title` directly with `color: #abc`. The extraction already captures computed styles for any selector in `config.js`. We need to add the Obsidian file explorer selectors:

**New selectors for config.js**:

- `.nav-folder-title` — folder text styling
- `.nav-folder-title:hover` — folder hover (requires hover simulation via `dispatchEvent`)
- `.nav-file-title` — file text styling
- `.nav-file-title.is-active` — active file
- `.collapse-icon svg.svg-icon` — chevron color
- `.nav-folder-children` — indent border
- `.nav-files-container` — container background

**Files to modify**:

- `runner/scripts/config.js` — add explorer selector mappings
- `runner/scripts/mappings/quartz/` — add new `explorer.js` mapping file
- `runner/scripts/cli-extractor.js` — add hover simulation for `:hover` selectors (similar to existing `hoverOverLink()`)

**Effort**: Medium. New selectors + hover simulation.

---

## Phase 1: Quick Wins (Hours)

### 1.1 Enable Callout Icon Extraction

**What**: Uncomment `--callout-icon` in config.js line 264.

**Why**: The resolution pipeline (`resolveCalloutIconUri()` in compile.js) already handles Lucide names → SVG data URIs, raw SVG data URIs, and emoji detection. It just never receives data because extraction is disabled.

**Steps**:

1. Edit `runner/scripts/config.js` ~line 264: uncomment `"--callout-icon"`
2. Edit `runner/scripts/mappings/quartz/callouts.js`: add `"--callout-icon"` to the icon element's `values` array
3. Run extraction on 3 test themes: `tokyo-night`, `catppuccin`, `abecedarium`
4. Verify `compile.js` output includes `--callout-icon` overrides in the callout aspect CSS
5. Test rendered callouts show theme-specific icons

**Validation**: Compare rendered callout icons before/after. Default Quartz pencil icon should be replaced by theme's icon.

### 1.2 Add Code Block Line Number Color Extraction

**What**: Extract line number color from themes instead of using hardcoded `rgba(115, 138, 148, 0.6)`.

**Steps**:

1. Add selector to config.js: `.cm-gutters` → `.line-number` (or appropriate Quartz selector for code line numbers)
2. Extract `color` and `background-color` from `.cm-gutters` / `.cm-lineNumbers`
3. Add mapping in compile.js to emit line number color in the `code` aspect

### 1.3 Fix Checkbox Base Styling Conflicts

**What**: Ensure theme-extracted checkbox styles override Quartz core's hardcoded values.

**Steps**:

1. Audit `base.scss` lines 359-389 for hardcoded checkbox properties
2. Ensure the `checkboxes` aspect CSS has sufficient specificity to override core defaults
3. Add `!important` only if specificity wars are unavoidable (document why)

---

## Phase 2: Syntax Highlighting Overhaul

### Problem Statement

Obsidian uses CodeMirror 6 for syntax highlighting. Quartz uses Shiki via `rehype-pretty-code`. These are fundamentally different tokenizers:

- CodeMirror: outputs `.cm-keyword`, `.cm-string`, etc. with theme colors
- Shiki: outputs inline `style="color:#FF7B72"` using TextMate grammar scopes

The current quartz-themes plugin defines ~12 `--code-*` CSS variables but Shiki ignores them entirely, producing inline styles.

### Recommended Approach: Post-Process Rehype Plugin

**Architecture**: Let Shiki highlight normally, then rewrite its output to use CSS variables referencing Obsidian theme colors.

```
Shiki (rehype-pretty-code, order 20)
  ↓ outputs: <span style="color:#FF7B72">const</span>
  ↓
rehypeObsidianCodeTheme (order 25, our plugin)
  ↓ rewrites: <span class="qt-code-keyword">const</span>
  ↓
Theme CSS: .qt-code-keyword { color: var(--code-keyword); }
  ↓
--code-keyword: rgb(187, 154, 247); /* from extracted theme */
```

### 2.1 Extraction: Build Color→Token Mapping Table

**Where**: Extraction pipeline (Phase 0.3)

For each theme, extract a mapping of CodeMirror token types to their computed colors. This runs once per theme during extraction — compute-intensive but precomputed.

**Output** (`{theme}/{mode}-code-tokens.json`):

```json
{
  "keyword": "rgb(187, 154, 247)",
  "string": "rgb(158, 206, 106)",
  "comment": "rgb(86, 95, 137)",
  "function": "rgb(224, 175, 104)",
  "number": "rgb(255, 158, 100)",
  "operator": "rgb(255, 117, 127)",
  "property": "rgb(125, 207, 255)",
  "tag": "rgb(255, 117, 127)",
  "attribute": "rgb(187, 154, 247)",
  "type": "rgb(224, 175, 104)",
  "variable": "rgb(192, 202, 245)",
  "punctuation": "rgb(169, 177, 214)",
  "builtin": "rgb(125, 207, 255)",
  "def": "rgb(224, 175, 104)",
  "atom": "rgb(255, 158, 100)"
}
```

### 2.2 Compilation: Generate Token CSS Variables

**Where**: `compile.js`

Transform the code token map into CSS variable declarations in the `code` aspect:

```css
html[saved-theme="dark"] body {
  --qt-code-keyword: rgb(187, 154, 247);
  --qt-code-string: rgb(158, 206, 106);
  --qt-code-comment: rgb(86, 95, 137);
  --qt-code-function: rgb(224, 175, 104);
  --qt-code-number: rgb(255, 158, 100);
  --qt-code-operator: rgb(255, 117, 127);
  --qt-code-property: rgb(125, 207, 255);
  --qt-code-tag: rgb(255, 117, 127);
  --qt-code-attribute: rgb(187, 154, 247);
  --qt-code-type: rgb(224, 175, 104);
  --qt-code-variable: rgb(192, 202, 245);
  --qt-code-punctuation: rgb(169, 177, 214);
  --qt-code-builtin: rgb(125, 207, 255);
  --qt-code-default: rgb(192, 202, 245);
}
```

Also generate the class→variable mapping CSS:

```css
.qt-code-keyword {
  color: var(--qt-code-keyword);
}
.qt-code-string {
  color: var(--qt-code-string);
}
.qt-code-comment {
  color: var(--qt-code-comment);
  font-style: italic;
}
/* ... etc for all token types */
```

### 2.3 Plugin: Rehype Transform

**Where**: `plugin/src/transformer.ts` — add to `htmlPlugins()`

Create a rehype plugin that runs after `rehype-pretty-code` (order > 20) and rewrites Shiki's inline color spans to use CSS classes:

```typescript
import { visit } from "unist-util-visit";

const rehypeObsidianCodeTheme =
  (colorMap: Record<string, string>) => () => (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "span" || !node.properties?.style) return;

      const style = String(node.properties.style);
      const colorMatch = style.match(
        /color:\s*(#[0-9a-fA-F]{3,8}|rgb[a]?\([^)]+\))/,
      );
      if (!colorMatch) return;

      const inlineColor = normalizeColor(colorMatch[1]);
      const tokenType = findClosestToken(inlineColor, colorMap);

      if (tokenType) {
        node.properties.className = [
          ...(node.properties.className || []),
          `qt-code-${tokenType}`,
        ];
        // Remove inline color from style, keep other properties
        node.properties.style =
          style.replace(/color:\s*[^;]+;?/, "").trim() || undefined;
      }
    });
  };
```

**Color matching strategy**: Since Shiki and Obsidian may use slightly different RGB values for "the same" color (e.g., `#bb9af7` vs `rgb(187, 154, 247)`), use normalized RGB comparison with a small tolerance (delta E < 5 in Lab color space, or simpler: Euclidean RGB distance < 15).

The `colorMap` is loaded from the precomputed theme data. Each theme ships its Shiki-color → token-type mapping, built during compilation by:

1. Running a reference code sample through Shiki with its default theme
2. Comparing Shiki's output colors against the extracted Obsidian token colors
3. Building a color→token lookup table

### 2.4 Fallback: Shiki CSS Variables Theme

If the post-process approach proves too fragile (color matching edge cases), the fallback is to **replace** Shiki's theme with a CSS variables theme:

```typescript
import { createCssVariablesTheme } from "shiki";

const obsidianTheme = createCssVariablesTheme({
  name: "obsidian-bridge",
  variablePrefix: "--qt-code-",
  variableDefaults: {},
});
```

This makes Shiki output `style="color: var(--qt-code-keyword)"` directly. Simpler, but requires the quartz-themes plugin to configure the syntax-highlighting plugin's Shiki theme — which may conflict with user configuration.

**Recommendation**: Start with 2.3 (post-process). Fall back to 2.4 only if color matching proves unreliable across >10% of themes.

---

## Phase 3: Explorer Full Mapping

### Problem Statement

The Quartz explorer plugin has 238 lines of SCSS with 16+ selectors, but quartz-themes only maps `font-weight` on folder containers. The Quartz explorer is a **custom component** — it does NOT use Obsidian's `.nav-file`/`.nav-folder` classes.

### Mapping Strategy

Extract from Obsidian's file explorer variables and selectors, then map to Quartz's explorer classes:

| Obsidian Source                            | Quartz Target                           | Property            |
| ------------------------------------------ | --------------------------------------- | ------------------- |
| `--nav-item-color`                         | `.folder-container div > a`             | `color`             |
| `--nav-item-color-hover`                   | `.folder-container div > a:hover`       | `color`             |
| `--nav-item-color-active`                  | `.explorer-content ul li > a.active`    | `color`             |
| `--nav-item-background-hover`              | `.folder-container div > a:hover`       | `background-color`  |
| `--nav-collapse-icon-color`                | `.folder-icon`                          | `stroke`            |
| `--nav-indentation-guide-color`            | `.folder-outer > ul`                    | `border-left-color` |
| `.nav-file-title` (computed color)         | `.explorer-content ul li > a`           | `color`, `opacity`  |
| `.nav-folder-title` (computed font-weight) | `.folder-container div > button > span` | `font-weight`       |

### 3.1 Add Explorer Selectors to `config.js`

Add Obsidian file explorer selectors to the extraction config. These capture computed styles from themes that override selectors directly (not via CSS variables):

```javascript
// runner/scripts/config.js — new entries
{ obsidianSelector: ".nav-folder-title", quartzSelector: ".folder-container div > a", properties: ["color", "font-weight", "font-family"] },
{ obsidianSelector: ".nav-file-title", quartzSelector: ".explorer-content ul li > a", properties: ["color", "opacity", "font-weight"] },
{ obsidianSelector: ".nav-file-title.is-active", quartzSelector: ".explorer-content ul li > a.active", properties: ["color", "opacity", "font-weight"] },
{ obsidianSelector: ".collapse-icon svg", quartzSelector: ".folder-icon", properties: ["color", "stroke", "fill"] },
{ obsidianSelector: ".nav-folder-children", quartzSelector: ".folder-outer > ul", properties: ["border-left-color", "border-left-width"] },
```

### 3.2 Add Hover Extraction for Explorer

The CLI extractor needs to simulate hover on file explorer items. Add a function similar to existing `hoverOverLink()`:

```javascript
async hoverOverExplorerItem(cli) {
  await cli.eval(`
    const folderTitle = document.querySelector(".nav-folder-title");
    if (folderTitle) {
      folderTitle.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
      folderTitle.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
    }
  `);
  await cli.sleep(300);
}
```

Then extract computed styles from the hovered state.

### 3.3 Update `compile.js` Explorer Mapping

Add the explorer selector translations so extracted Obsidian values map to Quartz selectors in the `explorer` aspect CSS.

### 3.4 Handle CSS Variable Fallbacks

Many themes set `--nav-item-color` but some override `.nav-folder-title { color: ... }` directly. The extraction captures both:

- CSS variables from `html`/`body` entries
- Computed styles from element selectors

`compile.js` should prefer computed element styles over CSS variable values when both exist.

---

## Phase 4: Search, TOC, and Partial-Mapping Completions

### 4.1 Search Plugin — 7 New Mappings

Add to `config.js`:

| Obsidian Selector                  | Quartz Selector              | Properties                                 |
| ---------------------------------- | ---------------------------- | ------------------------------------------ |
| `.search-result-container`         | `.search-container`          | `backdrop-filter`                          |
| `.search-result-file-match`        | `.preview-container`         | `color`, `font-weight`, `background-color` |
| `.search-result-file-matched-text` | `.highlight`                 | `background-color`, `border-radius`        |
| `.suggestion-item.is-selected`     | `.tag-suggestion-item:hover` | `background-color`, `color`                |
| (N/A — Quartz-specific)            | `.search-scroll-target`      | Use `--tertiary` variable                  |
| (N/A — Quartz-specific)            | `.ghost-text`                | Use `--gray` variable                      |
| `.search-input`                    | `input:focus`                | `border-color`, `box-shadow`               |

For Quartz-specific selectors with no Obsidian equivalent, use the theme's CSS variables (`--tertiary`, `--gray`) which are already extracted.

### 4.2 TOC Plugin — 4 New Mappings

| Obsidian Selector                    | Quartz Selector                 | Properties                         |
| ------------------------------------ | ------------------------------- | ---------------------------------- |
| `.outline .tree-item-self.is-active` | `.toc-content > li > a.in-view` | `color`, `opacity`, `font-weight`  |
| `.tree-item-self .tree-item-icon`    | `.fold`                         | `color`, `transform`, `transition` |
| `details summary::marker`            | `details.toc summary::marker`   | `color`                            |
| (collapse state)                     | `.toc:has(button.collapsed)`    | `flex`                             |

### 4.3 Content Meta — Trivial

Already inherits `--darkgray`. Add explicit mapping for:

- `.content-meta` → `color: var(--darkgray)` in the `misc` aspect

### 4.4 Reader Mode — Low Priority

Already inherits `--darkgray` for icon. Add:

- `.readermode svg` → `color: var(--darkgray)`, `stroke: var(--darkgray)`

### 4.5 Article Title

Add:

- `h1.article-title` → `color`, `font-size`, `font-weight`, `text-decoration`

---

## Phase 5: New Aspect Categories

### 5.1 Canvas Page — New `canvas` Aspect

**SCSS surface**: 558 lines, 45+ themeable properties.

**New `AspectKey`**: Add `"canvas"` to `plugin/src/types.ts`:

```typescript
export type AspectKey /* existing */ = "canvas";
```

**Extraction selectors** (add to config.js):

| Obsidian Selector         | Quartz Selector           | Properties                                                        |
| ------------------------- | ------------------------- | ----------------------------------------------------------------- |
| `.canvas-node`            | `.canvas-node`            | `border-color`, `border-radius`, `box-shadow`, `background-color` |
| `.canvas-node-content`    | `.canvas-node-content`    | `color`                                                           |
| `.canvas-edge-label`      | `.canvas-edge-label`      | `color`, `background-color`                                       |
| `.canvas-controls button` | `.canvas-controls button` | `background-color`, `border-color`, `color`                       |
| `.canvas-sidebar`         | `.canvas-sidebar`         | `background-color`, `border-color`, `box-shadow`                  |

Note: Many canvas properties use standard Quartz CSS variables (`--light`, `--lightgray`, `--darkgray`, `--secondary`). Only `--canvas-node-color` is plugin-specific.

For themes that don't have canvas-specific overrides, the aspect CSS will be empty (no harm).

### 5.2 Bases Page — New `bases` Aspect

**SCSS surface**: 423 lines, 4 view types (table, card, gallery, board).

**New `AspectKey`**: Add `"bases"` to `plugin/src/types.ts`.

**Key selectors**: Similar approach to canvas — extract table headers, card borders, gallery overlays, board columns. Most use standard CSS variables.

### 5.3 Note Properties — New `properties` Aspect

**SCSS surface**: 141 lines.

**New `AspectKey`**: Add `"properties"` to `plugin/src/types.ts`.

**Key selectors**: `.note-properties`, `.note-properties-row`, `.note-properties-tags`, `.note-properties-link`.

### 5.4 Stacked Pages

**SCSS surface**: 187 lines. Extract from Obsidian's stacked tabs or similar UI:

- `.stacked-page` borders and shadows
- `.stacked-page.active` highlight
- Page overlap/shadow styling

---

## Phase 6: Quartz v5 Plugin Build-Time Transforms

### Available Extension Points

Quartz v5's transformer plugin API:

```typescript
export type QuartzTransformerPluginInstance = {
  name: string;
  textTransform?: (ctx: BuildCtx, src: string) => string; // order: pre-parse
  markdownPlugins?: (ctx: BuildCtx) => PluggableList; // order: remark
  htmlPlugins?: (ctx: BuildCtx) => PluggableList; // order: rehype
  externalResources?: (ctx: BuildCtx) => Partial<StaticResources>; // order: build output
};
```

Plugin execution order is controlled by `order` field in config. Syntax highlighting runs at order 20.

### 6.1 Syntax Highlighting Transform

**Hook**: `htmlPlugins()` at order > 20

As described in Phase 2.3, add a rehype plugin that transforms Shiki's inline-style spans into CSS-class spans referencing theme variables.

### 6.2 Callout Icon Override

**Hook**: `htmlPlugins()` or `externalResources()`

If the extraction pipeline provides theme-specific callout icons (Phase 0.2), inject them via `externalResources()` as CSS overrides:

```css
.callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,...");
}
.callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,...");
}
```

This is already how the plugin injects theme CSS — just add callout icon variables to the output.

### 6.3 Code Block Class Injection

**Hook**: `htmlPlugins()`

If the rehype post-process approach (2.3) is adopted, this is where the transform lives. The plugin adds the rehype plugin to the build pipeline.

### 6.4 Future: `treeTransforms` for Dynamic Theming

Quartz v5 PageType plugins support `treeTransforms` — HAST tree mutations at render time with access to `allFiles` and `componentData`. This could enable:

- Per-page theme adjustments
- Conditional class injection based on frontmatter
- Dynamic code block language detection and styling

Not needed for initial implementation, but available for future enhancements.

---

## Appendix A: Obsidian → Quartz Selector Reference

### File Explorer

| Obsidian                        | Quartz                                      | Notes              |
| ------------------------------- | ------------------------------------------- | ------------------ |
| `.nav-folder-title`             | `.folder-container div > a`                 | Folder label       |
| `.nav-folder-title:hover`       | `.folder-container div > a:hover`           | Requires hover sim |
| `.nav-file-title`               | `.explorer-content ul li > a`               | File label         |
| `.nav-file-title.is-active`     | `.explorer-content ul li > a.active`        | Current page       |
| `.collapse-icon svg`            | `.folder-icon`                              | Chevron icon       |
| `.nav-folder-children`          | `.folder-outer > ul`                        | Indent border      |
| `--nav-item-color`              | `color` on explorer links                   | CSS variable       |
| `--nav-item-background-hover`   | `background-color` on hover                 | CSS variable       |
| `--nav-collapse-icon-color`     | `stroke`/`color` on `.folder-icon`          | CSS variable       |
| `--nav-indentation-guide-color` | `border-left-color` on `.folder-outer > ul` | CSS variable       |

### Callouts

| Obsidian                     | Quartz                         | Notes              |
| ---------------------------- | ------------------------------ | ------------------ |
| `.callout[data-callout="X"]` | `.callout[data-callout="X"]`   | Same selector      |
| `--callout-color`            | `--color`, `--border`, `--bg`  | Color split        |
| `--callout-icon`             | `--callout-icon`               | Currently disabled |
| `.callout-icon`              | `.callout-title .callout-icon` | Icon element       |

### Code Blocks

| Obsidian (CodeMirror) | Quartz (Shiki → rehype) | Mapping              |
| --------------------- | ----------------------- | -------------------- |
| `.cm-keyword`         | `.qt-code-keyword`      | Post-process rewrite |
| `.cm-string`          | `.qt-code-string`       | Post-process rewrite |
| `.cm-comment`         | `.qt-code-comment`      | Post-process rewrite |
| `.cm-number`          | `.qt-code-number`       | Post-process rewrite |
| `.cm-operator`        | `.qt-code-operator`     | Post-process rewrite |
| `.cm-property`        | `.qt-code-property`     | Post-process rewrite |
| `.cm-variable`        | `.qt-code-variable`     | Post-process rewrite |
| `.cm-tag`             | `.qt-code-tag`          | Post-process rewrite |
| `.cm-attribute`       | `.qt-code-attribute`    | Post-process rewrite |
| `.cm-type`            | `.qt-code-type`         | Post-process rewrite |
| `.cm-builtin`         | `.qt-code-builtin`      | Post-process rewrite |
| `.cm-def`             | `.qt-code-def`          | Post-process rewrite |
| `.cm-atom`            | `.qt-code-atom`         | Post-process rewrite |

---

## Appendix B: Quartz v5 Plugin Extension Points

### Transformer Plugin (what quartz-themes uses)

```typescript
{
  name: "QuartzTheme",
  textTransform(ctx, src) { /* pre-parse text manipulation */ },
  markdownPlugins(ctx) { /* remark plugins for mdast */ return []; },
  htmlPlugins(ctx) { /* rehype plugins for hast */ return [rehypeObsidianCodeTheme]; },
  externalResources(ctx) { /* CSS/JS injection */ return { css: [...] }; },
}
```

### PageType Plugin (for treeTransforms)

```typescript
{
  name: "CustomPageType",
  match: { /* page matcher */ },
  layout: "default",
  body: MyComponent,
  treeTransforms(ctx) {
    return [(root, slug, componentData) => {
      // Mutate HAST tree at render time
    }];
  },
}
```

### Plugin Execution Order

| Order  | Plugin                       | Hooks                                       |
| ------ | ---------------------------- | ------------------------------------------- |
| 5      | note-properties              | markdownPlugins                             |
| 10     | created-modified-date        | markdownPlugins                             |
| 20     | syntax-highlighting          | htmlPlugins (rehype-pretty-code)            |
| **25** | **quartz-themes (proposed)** | **htmlPlugins (rehypeObsidianCodeTheme)**   |
| 30     | obsidian-flavored-markdown   | textTransform, markdownPlugins, htmlPlugins |
| 40     | github-flavored-markdown     | markdownPlugins, htmlPlugins                |
| 50     | table-of-contents            | htmlPlugins                                 |
| 60     | crawl-links                  | htmlPlugins                                 |

### Key Dependencies

- `unist-util-visit` — HAST tree traversal (already in Quartz)
- `rehype-pretty-code` — Shiki wrapper (community plugin, order 20)
- `hast-util-to-jsx-runtime` — HAST → Preact JSX (already in Quartz)

---

## Implementation Priority

| #   | Phase                            | Effort | Impact       | Dependencies         |
| --- | -------------------------------- | ------ | ------------ | -------------------- |
| 1   | 1.1 Callout icons                | Hours  | High         | None                 |
| 2   | 0.2 Callout icon extraction      | Hours  | High         | None (enables 1.1)   |
| 3   | 0.3 Code token extraction        | Days   | Critical     | New vault test files |
| 4   | 2.1-2.3 Syntax highlighting      | Days   | Critical     | 0.3                  |
| 5   | 0.4 Explorer variable extraction | Day    | High         | None                 |
| 6   | 3.1-3.4 Explorer mapping         | Days   | High         | 0.4                  |
| 7   | 4.1 Search completions           | Hours  | Medium       | None                 |
| 8   | 4.2 TOC completions              | Hours  | Medium       | None                 |
| 9   | 5.3 Note properties aspect       | Day    | Medium       | None                 |
| 10  | 5.1 Canvas aspect                | Days   | Medium       | None                 |
| 11  | 5.2 Bases aspect                 | Days   | Medium       | None                 |
| 12  | 0.1 DOM structure extraction     | Day    | Foundational | None                 |
| 13  | 6.1-6.3 Build-time transforms    | Days   | Critical     | 2.1-2.3              |
