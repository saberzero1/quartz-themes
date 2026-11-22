# Theme fidelity harness

The static converter that turns Obsidian themes into Quartz CSS lives in
**`@quartz-themes/core`**, in `src/convert/`. Core downloads themes on demand and
converts them at build time. This directory measures how well that conversion
matches real Obsidian.

```
fidelity/
  harness/
    obsidian.mjs   real Obsidian (obsidian-launcher, pinned) driven over CDP by Playwright
    quartz.mjs     a built Quartz site with each theme's CSS swapped in (no rebuild per theme)
    probes.mjs     paired elements (headings, links, code, callouts, …) + measurement
    compare.mjs    ΔE colour comparison, font/size/keyword rules, scoring
    core.mjs       loads @quartz-themes/core (QUARTZ_THEMES_CORE overrides the path)
    layout.mjs     layout audit: page metrics measured in the browser, issue rules
    site/          Quartz config for the specimen vault (runner/vault)
    fixtures/      Style Settings exports for testing non-default settings
  scripts/
    fidelity.mjs          Obsidian vs Quartz, per theme × mode
    fidelity-summary.mjs  merge shards, corpus summary
    layout.mjs            layout audit, per theme × mode × width
    layout-summary.mjs    merge shards, issues by kind
    layout-explain.mjs    the converted rules behind an element (triage)
    convert-all.mjs       convert every theme; check Quartz's minifier accepts the output
    preview.mjs           screenshots
```

## Running

```sh
nix develop                                   # Node, Chromium, e2e-headless (Xvfb + herbstluftwm)
just build-site                               # specimen site with a Quartz checkout (default ../dev-mode/repos/quartz)

just fidelity "Minimal,Tokyo Night"           # Obsidian on a private display vs Quartz
just fidelity-all --shard=1/8                 # the whole registry, sharded like CI
just fidelity-cached "Minimal"                # re-score against cached Obsidian references (seconds)
node fidelity/scripts/fidelity.mjs --themes=… --style-settings=fidelity/harness/fixtures/style-settings-sample.json
just convert-all                              # every registry theme, ~60 s
```

Obsidian references are cached in `out/fidelity/ref*`. The cache key covers
the theme's hash, the probe set and the Style Settings, so after a converter
change only the Quartz side runs again.

## How scoring works

Each probe selects the same rendered element in both apps: the first match
inside the reading-view root, `.markdown-preview-view`, which both DOMs have.
The probe reads its computed styles plus the _effective_ background, found by
walking up the ancestors until a non-transparent background appears.

| Property type | Rule                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| Colours       | ΔE ≤ 6, after compositing over the effective background (handles OKLCH) |
| Fonts         | First real family                                                       |
| Sizes         | Within 10% or 1px                                                       |
| Keywords      | Exact match                                                             |

## Known, accepted divergences

- **Platform body classes** (`mod-macos`, `mod-linux`, …) are evaluated as false, because a
  published site can't know the visitor's OS. Cupertino picks fonts this way.
- **Missing semicolons** are handled like the browser does: the declaration is
  dropped, matching Obsidian.

## Layout audit

Fidelity compares note elements with Obsidian. It can't see whether a theme
breaks Quartz's own page layout, because Obsidian has no equivalent of
Quartz's gutters, sidebars, header or phone layout. The layout audit checks
that instead. It loads every theme into the specimen site at phone (375px),
tablet (1000px, Quartz's 800–1200px layout) and desktop (1280px) widths, in
both modes, and needs no Obsidian.

```sh
just layout "Minimal,Tokyo Night"   # a few themes
just layout-all --shard=1/4         # the whole registry, sharded like CI (~15 min unsharded)
just layout-summary                 # merge shards, issues by kind
just layout-explain "Nier" "article .markdown-preview-view" margin,padding --width=375
```

Each theme is compared with Obsidian's default theme converted the same way.
The summary also lists where core's default theme differs from plain Quartz,
which points at core or plugin problems rather than theme ones.

| Issue                           | Severity | Means                                                              |
| ------------------------------- | -------- | ------------------------------------------------------------------ |
| page scrolls sideways           | error    | something is wider than the viewport                               |
| content past the viewport edge  | error    | the elements responsible (not clipped by a scroll container)       |
| chrome hidden / missing         | error    | header, sidebar, search, explorer… visible by default but not here |
| chrome off-screen               | error    | a chrome element extends past the viewport                         |
| content covered                 | error    | something is painted over the note's first paragraphs              |
| content root offset             | error    | uneven or negative margins pushing the note out of its column      |
| content root scrollbar gutter   | error    | the note column reserves space for a scrollbar                     |
| content column moved or resized | warn     | the note column isn't where the default theme puts it              |
| blocks outside the column       | warn     | a top-level block pokes out of the note column                     |
| chrome moved or resized         | warn     | e.g. a theme's heading styles reaching Quartz's page title         |
| chrome text unreadable          | warn     | page title, explorer or TOC text with contrast below 1.5           |
| page height far off             | warn     | the page is under 0.6× or over 1.8× the default theme's height     |
| content root padding            | warn     | a theme's padding on the note (often a deliberate card)            |

Low contrast inside the note isn't flagged: in practice it matches the theme in
Obsidian, and the fidelity harness compares those colours directly.
