# Missing & Partial Style Mappings

Cross-reference of plugin SCSS, Quartz core styles, and `config.js` extraction mappings.

Legend:

- ✅ = Fully mapped in `config.js`
- ⚠️ = Partially mapped (some selectors/properties missing)
- ❌ = Not mapped at all
- 🔇 = Intentionally unmapped (layout-only, no theming needed)

---

## 1. Callout Icons ⚠️

**Status**: Colors extracted per callout type, but **icons are not resolved**.

- `--callout-icon` is **commented out** in `config.js` line 250
- Icon `fill` and `stroke` are extracted (line 261), but the actual Lucide icon name/SVG is never captured
- Each callout type has a dedicated SVG class selector (e.g., `svg.lucide-pencil.svg-icon`), but only `fill`/`stroke` are extracted — the icon identity is lost
- **Result**: Themed callouts in Quartz get correct colors but always show Quartz's default icon, not the theme's icon

**To fix**:

1. Uncomment `--callout-icon` in `config.js` line 250
2. Add icon name extraction (Lucide class → icon name → SVG data URI via `@lucide/icons`)
3. Generate `--callout-icon` CSS variable overrides in `compile.js` output

---

## 2. Plugins with NO Config.js Mappings

### 2a. Canvas Page ❌

**Plugin**: `canvas-page` — 558 lines of SCSS
**CSS variables used**: `--light`, `--lightgray`, `--dark`, `--darkgray`, `--secondary`, `--gray`, `--highlight`, `--canvas-node-color`

Key unmapped selectors:

- `.canvas-container` — main canvas wrapper
- `.canvas-node` — node cards (background, border, shadow)
- `.canvas-node-content` — node content area
- `.canvas-edge` — connection lines between nodes
- `.canvas-controls` — zoom/pan controls
- `.canvas-minimap` — minimap overlay
- Various node type selectors (`.canvas-node-file`, `.canvas-node-text`, `.canvas-node-link`, `.canvas-node-group`)

**Impact**: Canvas pages will not reflect any theme styling.

### 2b. Bases Page ❌

**Plugin**: `bases-page` — 423 lines of SCSS
**CSS variables used**: `--lightgray`, `--light`, `--dark`, `--darkgray`, `--secondary`, `--gray`, `--highlight`

Key unmapped selectors:

- `.bases-container` — database-like view container
- `.bases-table` — table view
- `.bases-card` — card view items
- `.bases-filter`, `.bases-sort` — filter/sort controls
- `.bases-header` — column headers

**Impact**: Database/bases pages will not reflect any theme styling.

### 2c. Stacked Pages ❌

**Plugin**: `stacked-pages` — 187 lines of SCSS
**CSS variables used**: `--lightgray`, `--light`, `--secondary`, `--gray`, `--dark`, `--darkgray`

Key unmapped selectors:

- `.stacked-page` — stacked page container (border, shadow, background)
- `.stacked-page-header` — page header in stacked view
- `.stacked-page.active` — active stacked page highlight
- Page overlap/shadow styling

**Impact**: Stacked page navigation will always use default colors regardless of theme.

### 2d. Note Properties ❌

**Plugin**: `note-properties` — 141 lines of SCSS
**CSS variables used**: `--lightgray`, `--darkgray`, `--gray`, `--secondary`, `--light`, `--highlight`, `--codeFont`

Key unmapped selectors:

- `.note-properties` — properties container
- `.note-property-key` — property label
- `.note-property-value` — property value
- `.note-property-tag` — tag-type property values

**Impact**: Note frontmatter properties display will not reflect theme colors.

### 2e. Encrypted Pages ❌

**Plugin**: `encrypted-pages` — 88 lines of SCSS
**Uses CSS variables with fallbacks** (somewhat resilient to missing mappings)

Key unmapped selectors:

- `.encrypted-container` — lock/unlock UI
- `.encrypted-input` — password input field
- `.encrypted-button` — decrypt button

**Impact**: Low — plugin uses CSS variable fallbacks, so it partially inherits theme colors.

---

## 3. Plugins Partially Mapped

### 3a. Content Meta ⚠️

**Plugin**: `content-meta` — SCSS uses `--darkgray`
**Config.js**: No `.content-meta` selectors found

The component renders reading time, date, etc. Its text color (`var(--darkgray)`) would be inherited from the CSS variable, but any theme-specific content-meta styling (spacing, font-size, comma separators) is not captured.

### 3b. Reader Mode ⚠️

**Plugin**: `reader-mode` — SCSS uses `--darkgray` for icon fill/stroke
**Config.js**: No `.readermode` selectors found

The toggle button icon color depends on `--darkgray` which IS set by the theme variables, but sidebar hide/show transitions and any theme-specific reader mode styling are not captured.

### 3c. Article Title ⚠️

**Plugin**: `article-title` — inline CSS with hardcoded margin
**Config.js**: No `.article-title` selectors found

Currently only sets `margin: 2rem 0 0 0`. Themes that restyle article titles (font, color, decoration) won't be captured.

### 3d. Explorer ⚠️

**Plugin**: `explorer` — 238 lines of SCSS
**Config.js**: Has basic explorer link styling (line ~1751), but missing:

- `.explorer` container styling (background, border)
- `.folder-container` — folder row layout
- `.folder-icon` — icon color, rotation
- `.mobile-explorer` / `.desktop-explorer` — toggle buttons
- `.explorer.collapsed` — collapsed state

Many explorer styles rely on `--light`, `--dark`, `--secondary`, `--tertiary`, `--lightgray` which ARE set as CSS variables — partial inheritance works, but theme-specific explorer overrides won't be captured.

### 3e. Search ⚠️

**Plugin**: `search` — 313 lines of SCSS
**Config.js**: Has search button, container, input, results (lines 714-810), but missing:

- `.result-card` hover effects
- `.preview-container` — preview panel styling
- `.highlight` — search term highlighting (`color-mix(in srgb, var(--tertiary) 60%, ...)`)
- `.search-container` backdrop-filter/blur
- Result card focus/active states

### 3f. Graph ⚠️

**Plugin**: `graph` — 76 lines of SCSS
**Config.js**: Has graph container and controls (lines 1858-1907), fairly complete.
**Missing**: Node colors are set via `--light`, `--dark`, `--secondary`, `--tertiary` CSS variables passed to the D3/canvas renderer at runtime — these are covered by the core variable extraction, so this is mostly fine.

### 3g. TOC ⚠️

**Plugin**: `table-of-contents` — 64 lines (modern) + legacy
**Config.js**: Has TOC outline selectors (lines 1816-1857), covers depth levels.
**Missing**:

- `button.toc-header.collapsed .fold` transform (rotation animation)
- `.toc` collapsed state
- Legacy TOC (`details.toc`) `summary::marker` styling

### 3h. Footer ⚠️

**Plugin**: `footer` — SCSS with hardcoded opacity and layout
**Config.js**: Has `footer` and `footer ul li a` (lines 1931-1948)
**Missing**: Footer `opacity: 0.7` is hardcoded in plugin SCSS — themes that change footer opacity won't be captured.

---

## 4. Plugins Fully Mapped or Not Needing Mapping

| Plugin              | Status | Notes                                              |
| ------------------- | ------ | -------------------------------------------------- |
| Backlinks           | ✅     | Mapped at lines 1542-1569                          |
| Darkmode            | ✅     | Mapped at lines 2008-2022                          |
| Breadcrumbs         | ✅     | Mapped at lines 2023-2037                          |
| Page Title          | ✅     | Mapped at line 2048                                |
| Tag List            | ✅     | Mapped at lines 2195-2209                          |
| Recent Notes        | ✅     | Mapped at lines 1949-2007                          |
| Spacer              | 🔇     | Layout-only (`flex: 2 1 auto`), no theming needed  |
| Comments            | 🔇     | External Giscus library, themed via its own config |
| Folder Page         | 🔇     | Layout-only, no CSS variables                      |
| Tag Page            | 🔇     | Layout-only, no CSS variables                      |
| Syntax Highlighting | ✅     | Mapped at lines 2139-2186                          |
| OFM / Mermaid       | ✅     | Mapped at line 2187                                |

---

## 5. Quartz Core Gaps

### 5a. Line Numbers in Code Blocks ⚠️

`base.scss` has hardcoded `rgba(115, 138, 148, 0.6)` for line number color. This is not extracted from themes.

### 5b. Checkbox Base Styling ⚠️

`base.scss` lines 359-389 define checkbox appearance. Our new checkbox icon extraction pipeline captures theme-specific overrides, but the base checkbox appearance (border, border-radius, checked background-color) in Quartz core uses hardcoded values that may conflict with theme styles.

### 5c. Selection Color

`::selection` IS mapped (line 1695-1700). ✅

### 5d. Placeholder Color

`input::placeholder` IS mapped (line 1702-1708). ✅

---

## 6. Priority Recommendations

### High Priority

1. **Callout icon resolution** — Uncomment `--callout-icon`, resolve Lucide names to SVG data URIs
2. **Stacked pages** — Visible to users with stacked navigation enabled; border/shadow theming matters
3. **Note properties** — Visible on every page that has frontmatter properties

### Medium Priority

4. **Canvas page** — Only visible on canvas-type pages, but heavily styled
5. **Bases page** — Only visible on bases-type pages, but heavily styled
6. **Explorer** — Partial coverage via CSS variables, but theme-specific overrides missed
7. **Search** — Partial coverage, but hover states and preview panel not captured

### Low Priority

8. **Content meta** — Inherits `--darkgray` from variables, minimal custom styling
9. **Reader mode** — Inherits icon color from variables
10. **Article title** — Usually just font/margin, inherits from heading styles
11. **Footer opacity** — Minor visual difference
12. **Encrypted pages** — Uses fallbacks, rare plugin
13. **Code block line numbers** — Minor color difference
14. **Legacy TOC** — Being replaced by modern TOC
