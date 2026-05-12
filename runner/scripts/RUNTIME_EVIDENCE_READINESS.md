# Runtime Evidence Readiness

Use `runner/scripts/verify-style-settings.mjs` to verify runtime-evidence readiness before a future full re-extraction.

## Prerequisites: populate themes.json

Before running preflight or live verification, ensure `themes.json` has the `style_settings.effects` field populated for all themes that have a Style Settings sidecar YAML:

```bash
node scripts/populate-style-settings.mjs
```

This writes `effects` (derived from `buildSchemaEffects`) alongside the existing `sections` metadata. Without this step, runtime-evidence planning will produce zero planned observations for all themes.

## Preflight

Dry-run the runtime-evidence plan without running live Obsidian extraction:

```bash
node runner/scripts/verify-style-settings.mjs --all --preflight
```

What preflight validates:

- supported runtime-evidence modes per theme (`dark`, `light`, or both)
- planned single-setting observation counts per mode (now non-zero for themes with emitting effects)
- stale sidecars for unsupported modes
- existing sidecar hygiene when sidecars are already present

Preflight writes the usual report JSON files under:

`runner/scripts/tests/verification-results/style-settings`

### Why planned observations may still be zero

A theme will show `planned observations: 0` in preflight when:

1. The theme has no `style_settings.effects` in `themes.json` (run `populate-style-settings.mjs` to fix)
2. All of the theme's effects are `non-emitting` (e.g. a theme that only uses heading/info-text settings)
3. The theme has no supported observable setting types (class-toggle, class-select, variable-number, variable-text, etc.)

## Live verification

When Obsidian CLI is available, run:

```bash
node runner/scripts/verify-style-settings.mjs --test-set --live
```

Live verification now:

- produces separate `dark-style-settings-runtime-evidence.json` and `light-style-settings-runtime-evidence.json` sidecars where a theme supports both modes
- removes stale sidecars for unsupported modes before writing fresh evidence
- logs bounded runtime-evidence progress during long single-setting observation runs
- opens representative extraction fixture files (general.md, callouts.md, tables.md, etc.) before each observation to capture element-specific computed-style changes across representative DOM surfaces, not just whatever single note is currently open

## How planning works

Runtime-evidence planning (`buildRuntimeEvidencePlan`) derives which settings to observe in two stages:

1. **Effect-based filtering** (`effectSettingIdsFromEffectRecords`): settings with at least one emitting effect (any `effectKind` other than `non-emitting`) are included. This is CSS-independent and works during preflight without the vault's theme.css.
2. **Payload enumeration** (`enumerateRuntimeObservationPayloads`): generates one or more observation payloads per eligible setting depending on its type (toggle → 1, class-select → N options, variable-number → min/mid/max probes, variable-text → 1).

The CSS-based selector-impact graph is still built during live runs for targeting specific DOM selectors, but it no longer gates which settings enter the observation plan. This ensures non-zero planned observations whenever a theme has emitting Style Settings effects.

## Manual steps intentionally left out

- a full repository-wide re-extraction is still a separate manual operation
- pairwise or higher-order interaction testing is still intentionally out of scope
- any failures from stages 1-5 remain existing verification work, separate from runtime-evidence readiness
