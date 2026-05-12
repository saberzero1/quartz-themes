# Runtime Evidence Readiness

Use `runner/scripts/verify-style-settings.mjs` to verify runtime-evidence readiness before a future full re-extraction.

## Preflight

Dry-run the runtime-evidence plan without running live Obsidian extraction:

```bash
node runner/scripts/verify-style-settings.mjs --all --preflight
```

What preflight validates:

- supported runtime-evidence modes per theme (`dark`, `light`, or both)
- planned single-setting observation counts per mode
- stale sidecars for unsupported modes
- existing sidecar hygiene when sidecars are already present

Preflight writes the usual report JSON files under:

`runner/scripts/tests/verification-results/style-settings`

## Live verification

When Obsidian CLI is available, run:

```bash
node runner/scripts/verify-style-settings.mjs --test-set --live
```

Live verification now:

- produces separate `dark-style-settings-runtime-evidence.json` and `light-style-settings-runtime-evidence.json` sidecars where a theme supports both modes
- removes stale sidecars for unsupported modes before writing fresh evidence
- logs bounded runtime-evidence progress during long single-setting observation runs

## Manual steps intentionally left out

- a full repository-wide re-extraction is still a separate manual operation
- pairwise or higher-order interaction testing is still intentionally out of scope
- any failures from stages 1-5 remain existing verification work, separate from runtime-evidence readiness
