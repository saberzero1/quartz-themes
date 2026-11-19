# Theme fidelity harness

The static converter that turns Obsidian themes into Quartz CSS lives in
**`@quartz-themes/core`**, in `src/convert/`. Core downloads themes on demand and
converts them at build time. This directory measures how well that conversion
matches real Obsidian.

```
converter/
  harness/
    obsidian.mjs   real Obsidian (obsidian-launcher, pinned) driven over CDP by Playwright
    quartz.mjs     a built Quartz site with each theme's CSS swapped in (no rebuild per theme)
    probes.mjs     paired elements (headings, links, code, callouts, …) + measurement
    compare.mjs    ΔE colour comparison, font/size/keyword rules, scoring
    core.mjs       loads @quartz-themes/core (QUARTZ_THEMES_CORE overrides the path)
    site/          the specimen vault (runner/vault) as a Quartz site
    fixtures/      Style Settings exports for testing non-default settings
  scripts/
    fidelity.mjs          Obsidian vs Quartz, per theme × mode
    fidelity-summary.mjs  merge shards, corpus summary
    convert-all.mjs       convert every theme; check Quartz's minifier accepts the output
    preview.mjs           screenshots
  vendor/community-css-themes.json   theme modes (Obsidian's registry)
```

## Running

```sh
nix develop                                   # Node, Chromium, e2e-headless (Xvfb + herbstluftwm)
# Build the specimen site with current Quartz + plugins (in ~/Repos/dev-mode):
just site-build ~/Repos/quartz-themes/fidelity/harness/site

just fidelity "Minimal,Tokyo Night"           # Obsidian on a private display vs Quartz
just fidelity-all --shard=1/6                 # CI-style sharding
just fidelity-cached "Minimal"                # re-score against cached Obsidian references (seconds)
node fidelity/scripts/fidelity.mjs --themes=… --style-settings=fidelity/harness/fixtures/style-settings-sample.json
node fidelity/scripts/fidelity.mjs --themes=… --cached --legacy   # score the pre-3.0 pipeline
just convert-themes                           # all themes, ~30 s
```

Obsidian references are cached in `out/fidelity/ref*`. The cache key covers
the theme's hash, the probe set and the Style Settings, so after a converter
change only the Quartz side runs again.

## How scoring works

Each probe selects the same rendered element in both apps: the first match
inside the reading-view root, `.markdown-preview-view`, which both DOMs have.
The probe reads its computed styles plus the *effective* background, found by
walking up the ancestors until a non-transparent background appears.

| Property type | Rule |
| --- | --- |
| Colours | ΔE ≤ 6, after compositing over the effective background (handles OKLCH) |
| Fonts | First real family |
| Sizes | Within 10% or 1px |
| Keywords | Exact match |

## Known, accepted divergences

- **Platform body classes** (`mod-macos`, `mod-linux`, …) are evaluated as false, because a
  published site can't know the visitor's OS. Cupertino picks fonts this way.
- **Missing semicolons** are handled like the browser does: the declaration is
  dropped, matching Obsidian.
