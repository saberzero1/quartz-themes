# Theme Mapping Workflows

Reference for all mapping-related commands and workflows. Use this to understand how to test, verify, and improve Obsidian→Quartz theme mappings.

---

## Quick Reference

| Task                                           | Command                                                  |
| ---------------------------------------------- | -------------------------------------------------------- |
| Test all mappings for a theme                  | `just test-all-mappings "theme-name" dark`               |
| Test one aspect's mappings                     | `just test-aspect-mappings "theme-name" "callouts" dark` |
| Verify a mapping change (quick)                | `just agent-verify "theme-name"`                         |
| Verify with cross-theme regression             | `just agent-verify-cross "theme-name"`                   |
| Check structural correctness                   | `just assert-theme "theme-name"`                         |
| Generate coverage report                       | `just coverage-report`                                   |
| Compile a single theme                         | `just cli-recompile-theme "theme-name"`                  |
| Generate plugin data (single theme)            | `just generate-plugin-theme "theme-name"`                |
| Full pipeline (extract→compile→generate→build) | `just full-theme-pipeline "theme-name"`                  |
| Build Quartz headlessly                        | `just build-quartz "theme-name"`                         |
| Serve Quartz for manual inspection             | `just test-quartz "theme-name"`                          |
| Capture visual baselines                       | `just visual-capture-baselines`                          |
| Compare against visual baseline                | `just visual-compare "theme-name"`                       |

---

## 1. Testing Mappings

### What It Does

Tests whether the selector mappings in `runner/scripts/config/` produce theme-specific values when applied to extracted Obsidian data. This does NOT compile or render anything — it reads extracted JSON directly.

### Commands

```bash
# Test all 313 mappings for a theme
just test-all-mappings "tokyo-night" dark

# Test mappings for one aspect only
just test-aspect-mappings "tokyo-night" "callouts" dark

# Test a single specific selector
just test-mapping "tokyo-night" "body" dark
```

### Output

```
Aspect: callouts   —  42/56  have theme values  (75%) (0 full, 42 partial, 14 empty)
Aspect: explorer   —   5/14  have theme values  (36%) (0 full, 5 partial, 9 empty)
...
Overall: 182/313 mappings have theme values (58%) [11 full, 171 partial, 131 empty]
```

- **full** = all properties in the mapping have theme-specific values
- **partial** = some properties found, some missing
- **empty** = no properties found (selector missing from extracted data, or all values match baseline)

### JSON Output

Detailed results are written to `runner/scripts/tests/verification-results/mapping-test-{theme}-{mode}.json`.

### Exit Codes

- `0` = mappings produce values (or all found for single selector)
- `1` = some mappings have no values
- `2` = specified selector not found in extracted data
- `3` = invalid arguments

---

## 2. Structural Assertions

### What It Does

Validates the compiled theme JSON files (`plugin/src/themes/{theme}.json`) for structural correctness without rendering. Catches issues like missing CSS variables, incorrect mode wrapping, or empty aspects.

### Commands

```bash
# Check one theme
just assert-theme "tokyo-night"

# Check all 742 themes and write a report
just assert-all-themes
```

### Output

```
[PASS] META_VALID: meta.name=tokyo-night, modes=dark, light
[PASS] MODE_DATA_EXISTS: Mode objects present
[PASS] BASE_HAS_VARS: Base aspects have CSS variables
[PASS] MODE_WRAP_CORRECT: Mode wrappers look correct
[PASS] NO_INHERIT_LEAK: No inherit leaks found
[WARN] CALLOUT_RGB_FORMAT: dark.callouts has non-RGB value: var(--callout-summary)
[PASS] NO_EMPTY_BASE: Base aspects are non-empty
[INFO] ASPECT_COVERAGE: 26/28 aspects have CSS (93%)
```

### Rules Checked

| Rule                 | Severity | What It Checks                                          |
| -------------------- | -------- | ------------------------------------------------------- |
| `META_VALID`         | error    | meta has name and non-empty modes array                 |
| `MODE_DATA_EXISTS`   | error    | dark/light objects exist for declared modes             |
| `BASE_HAS_VARS`      | error    | base aspect has ≥5 CSS variable declarations            |
| `MODE_WRAP_CORRECT`  | error    | dark uses `saved-theme="dark"`, light uses `:root:root` |
| `NO_INHERIT_LEAK`    | warning  | no `: inherit;` values in any aspect                    |
| `CALLOUT_RGB_FORMAT` | warning  | callout color values are RGB triplets                   |
| `FONT_FACE_MATCH`    | warning  | @font-face exists when meta.fonts is non-empty          |
| `NO_EMPTY_BASE`      | error    | base aspect is non-empty (>100 chars)                   |
| `ASPECT_COVERAGE`    | info     | percentage of aspects with CSS content                  |

---

## 3. Agent Verification Workflow

### What It Does

Orchestrates the full verification pipeline in one command: compile → generate plugin data → test mappings → structural assertions. Outputs structured JSON for programmatic consumption.

### Commands

```bash
# Quick verify (compile + generate + mappings + structure, ~10 seconds)
just agent-verify "tokyo-night"

# Verify a specific aspect
just agent-verify "tokyo-night" "callouts" dark

# With cross-theme regression check (~30 seconds)
just agent-verify-cross "tokyo-night"
```

### Output

JSON on stdout (subprocess output goes to stderr):

```json
{
  "theme": "tokyo-night",
  "aspect": "all",
  "mode": "dark",
  "stages": {
    "compile": { "status": "pass", "durationMs": 3200 },
    "generate": { "status": "pass", "durationMs": 1100 },
    "mappings": {
      "status": "warn",
      "fullyMapped": 11,
      "partiallyMapped": 171,
      "unmapped": 131
    },
    "structure": { "status": "pass", "errors": 0, "warnings": 2 },
    "crossTheme": { "status": "pass", "checked": 15, "failed": [] }
  },
  "overall": "pass"
}
```

### Stage Behavior

- **compile** fail → all subsequent stages skip, overall = fail
- **generate** fail → remaining stages skip, overall = fail
- **mappings** warn → continues (unmapped entries are informational)
- **structure** fail → overall = fail
- **crossTheme** fail → overall = fail (a regression was detected)

### Reference Themes for Cross-Theme Checks

tokyo-night, catppuccin, minimal, its-theme, hidden-grotto, aura, 80s-neon, abecedarium, comfort, hackthebox, everforest, brutalist, anuppuccin, blue-topaz, obsidian-gruvbox

---

## 4. Coverage Reporting

### What It Does

Iterates all 741 extracted themes and calculates per-aspect mapping coverage, producing an aggregate report.

### Commands

```bash
# Full report with top/bottom 10 themes and aspect averages
just coverage-report

# Top N themes by coverage
just coverage-top 20

# Bottom N themes by coverage
just coverage-bottom 20
```

### Output

```
Mapping Coverage Report — 741 themes analyzed
══════════════════════════════════════════════════

Top 10 themes by coverage:
  qlean                               66%  (206/313)
  cupertino                           65%  (202/313)
  ...

Per-aspect averages across all themes:
  images             — avg  89%  (min   0%, max 100%)
  darkmode           — avg  83%  (min   0%, max 100%)
  ...
  popover            — avg   0%  (min   0%, max   0%)
```

### JSON Report

Written to `runner/scripts/tests/verification-results/coverage-report.json` with per-theme × per-aspect detail.

---

## 5. Visual Regression

### What It Does

Captures screenshots of Quartz-rendered themes and compares them against stored baselines using pixel-level comparison.

### Prerequisites

- Quartz submodule initialized: `just update-quartz`
- Visual baselines captured: `just visual-capture-baselines`

### Commands

```bash
# Capture baselines for all reference themes
just visual-capture-baselines

# Compare a theme against its baseline
just visual-compare "tokyo-night"

# Compare all reference themes
just visual-compare-all

# Update a theme's baseline after intentional changes
just visual-update-baseline "tokyo-night"
```

### How It Works

1. Builds a Quartz site with the theme (`just build-quartz`)
2. Opens the static HTML in a headless browser via Playwright
3. Captures screenshots of key pages in dark and light modes
4. Compares against stored baselines in `.visual-baselines/` using pixelmatch
5. Reports per-page pixel diff percentage

---

## 6. Single-Theme Pipeline Commands

### Compile + Convert

```bash
# Compile and convert a single theme (updates themes/{name}/_index.scss)
just cli-recompile-theme "tokyo-night"
```

### Generate Plugin Data

```bash
# Regenerate plugin/src/themes/{name}.json without touching other themes
just generate-plugin-theme "tokyo-night"
```

### Build Quartz Headlessly

```bash
# Build static HTML output (requires update-quartz first)
just build-quartz "tokyo-night"
# Output: .quartz-output/tokyo-night/
```

### Full Pipeline

```bash
# Extract → Compile → Generate → Build (requires running Obsidian)
just full-theme-pipeline "tokyo-night"
```

### Manual Inspection

```bash
# Build + serve with live reload
just test-quartz "tokyo-night"
# Open http://localhost:8080
```

---

## 7. Extraction Commands

These require a running Obsidian instance.

```bash
# Extract a single theme
just cli-extract "Theme Name"

# Force re-extract (ignore cache)
just cli-extract-force "Theme Name"

# Extract all installed themes
just cli-extract-all

# Re-extract baseline (default Obsidian theme)
just cli-extract-baseline

# Verify extraction results
just verify-extraction "theme-name"
```

---

## 8. Config Structure

Selector mappings are split into per-aspect files under `runner/scripts/config/`:

```
runner/scripts/config/
  index.js          — aggregator (imports all, exports merged config + aspectMap)
  shared.js         — property expansions and defaults
  base.js           — body variables, :root styles
  callouts.js       — callout selectors
  code.js           — code blocks
  explorer.js       — file explorer
  search.js         — search component
  toc.js            — table of contents
  graph.js          — graph visualization
  ... (29 files total)
```

`runner/scripts/config.js` re-exports from `config/index.js` for backward compatibility. All existing imports continue to work.

Each aspect file exports:

```javascript
export const aspect = "explorer";
export const entries = [
  {
    obsidianSelector: "...",    // Exact key from extracted JSON
    publishSelector: "...",     // Obsidian Publish equivalent (or null)
    quartzSelector: "...",      // Quartz CSS selector
    pseudoElement: "",          // ::before, ::after, or ""
    properties: [...]           // CSS properties to map
  }
];
```

---

## Common Workflows

### "I want to improve an aspect's mappings"

1. `just test-aspect-mappings "minimal" "explorer" dark` — see current coverage
2. Read `runner/scripts/config/explorer.js` — understand current mappings
3. Diagnose gaps (see `.sisyphus/plans/improve-aspect-mappings.md` for methodology)
4. Edit the config file
5. `just agent-verify "minimal" "explorer" dark` — verify the fix compiles and works
6. `just agent-verify-cross "minimal" "explorer" dark` — check for regressions

### "I want to check if a theme is working correctly"

1. `just test-all-mappings "theme-name" dark` — mapping coverage
2. `just assert-theme "theme-name"` — structural correctness
3. `just test-quartz "theme-name"` — visual inspection

### "I want to see which aspects need the most work"

```bash
just coverage-report
```

### "I want to see which themes have the worst coverage"

```bash
just coverage-bottom 30
```

### "I made a change to compile.js or config and want to verify nothing broke"

```bash
just agent-verify-cross "tokyo-night"
```

This compiles tokyo-night and then runs structural assertions on all 15 reference themes.
