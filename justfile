set quiet

[doc('List all available commands'), private]
default:
  @just --list

[group('util')]
format:
  bun prettier . --write --cache --ignore-path "./.prettiercompileignore"

[group('util')]
format-non-generated:
  bun prettier . --write --cache --ignore-path "./.prettiercompileignore" --ignore-path "./.prettiergenignore"

alias lint := format

[group('util')]
verify:
  bun prettier . --check --cache --ignore-path "./.prettiercompileignore"

alias verify-ci := verify
alias check := verify

[group('extract')]
build:
  tsc -noEmit -skipLibCheck
  bun esbuild.config.mjs production

[group('extract')]
extract: build
  bun --expose-gc ./runner/scripts/extract.js -- --waitforTimeout=300000

[group('extract')]
extract-baseline: build
  FORCE_BASELINE=true bun --expose-gc ./runner/scripts/extract.js -- --waitforTimeout=300000

[group('extract')]
compile:
  bun --smol ./runner/scripts/compile.js "" --auto

[group('cli-extract'), doc('Compile a single theme')]
cli-compile-theme themeName:
  bun ./runner/scripts/compile.js "{{themeName}}" --auto

[group('extract')]
convert:
  bun ./convert.js

[group('extract')]
extract-full: build compile convert format-non-generated

[group('extract')]
recompile: compile convert

[group('cli-extract'), doc('Recompile a single theme')]
cli-recompile-theme themeName:
  bun ./runner/scripts/compile.js "{{themeName}}" --auto
  bun ./convert.js

[group('cli-extract')]
cli-extract-fonts:
  bun ./runner/scripts/font-extractor.js --all ./runner/vault

[group('plugin')]
generate-plugin:
  bun --smol ./plugin/scripts/generate.js --auto
  npm --prefix ./plugin run build

[group('cli-extract'), doc('Extract a single theme using CLI (requires running Obsidian)')]
cli-extract theme="Brutalist":
  bun ./runner/scripts/cli-extractor.js "{{theme}}"

[group('cli-extract'), doc('Force extract a single theme using CLI')]
cli-extract-force theme="Brutalist":
  FORCE_EXTRACTION=true bun ./runner/scripts/cli-extractor.js "{{theme}}"

[group('cli-extract'), doc('Extract all installed themes using CLI')]
cli-extract-all:
  bun ./runner/scripts/cli-extractor.js --all

[group('cli-extract'), doc('Force extract all installed themes using CLI')]
cli-extract-all-force:
  FORCE_EXTRACTION=true bun ./runner/scripts/cli-extractor.js --all

[group('cli-extract'), doc('Clear CLI extraction hash cache')]
cli-clear-cache:
  rm -f ./runner/results/.cli-theme-hashes.json

[group('cli-extract'), doc('Force re-extract baseline (default Obsidian theme)')]
cli-extract-baseline:
  FORCE_BASELINE=true bun ./runner/scripts/cli-extractor.js "default"

[group('cli-extract'), doc('Clear baseline cache')]
cli-clear-baseline:
  rm -rf ./runner/results/_baseline

style-settings:
  bun ./scripts/populate-style-settings.mjs --extract --recover-legacy-missing-ids

[group('database')]
ingest:
  bun ./runner/scripts/ingest.js

[group('database')]
prepare:
  bun ./runner/scripts/prep.js
  bun ./runner/scripts/prep.js

[group('database')]
prepare-baseline:
  FORCE_PREP=true bun ./runner/scripts/prep.js

[group('database')]
drop:
  rm ./styles.db || true
  rm ./styles.db-shm || true
  rm ./styles.db-wal || true

[group('database')]
rebuild: drop ingest

[group('cli-extract'), doc('Generate custom callout manifest and vault files')]
generate-callout-manifest:
  bun ./extensions/generate-callout-manifest.mjs

[group('testing')]
update-quartz themeName="its-theme":
  git submodule update --init --remote runner/quartz
  cd runner/quartz && npm i -D
  cp ./quartz.config.yaml ./runner/quartz/quartz.config.yaml
  cd runner/quartz && npx quartz plugin remove quartz-themes
  cd runner/quartz && npx quartz plugin add ../../plugin --as quartz-themes
  cd runner/quartz && npx quartz plugin config quartz-themes --set theme={{themeName}}

[group('testing')]
upgrade-quartz themeName="its-theme":
  cd runner/quartz && npm i -D
  cp ./quartz.config.yaml ./runner/quartz/quartz.config.yaml
  cd runner/quartz && npx quartz upgrade
  cd runner/quartz && npx quartz plugin install --latest

[group('testing')]
test-quartz themeName="its-theme":
  cd runner/quartz && npx quartz plugin remove quartz-themes
  cd runner/quartz && npx quartz plugin add ../../plugin --as quartz-themes
  cd runner/quartz && npx quartz plugin config quartz-themes --set theme={{themeName}}
  cd runner/quartz && npx quartz build -d ../vault --serve

tag:
  #!/usr/bin/env bash
  TAG=$(grep 'export const FONT_TAG =' ./plugin/src/fonts/font-tag.ts | sed 's/.*= "//;s/".*//')
  git tag -a "$TAG" -m "Release version $TAG"
  git push origin tag "$TAG"

[group('testing'), doc('Build Quartz headlessly with a specific theme (requires update-quartz first)')]
build-quartz themeName="its-theme":
  #!/usr/bin/env bash
  if [ ! -d "./runner/quartz/node_modules" ]; then
    echo "Error: runner/quartz/node_modules not found. Run 'just update-quartz' first." >&2
    exit 1
  fi
  cd runner/quartz && npx quartz plugin remove quartz-themes 2>/dev/null || true
  cd runner/quartz && npx quartz plugin add ../../plugin --as quartz-themes
  cd runner/quartz && npx quartz plugin config quartz-themes --set theme={{themeName}}
  cd runner/quartz && npx quartz build -d ../vault -o ../../.quartz-output/{{themeName}}

[group('testing'), doc('Verify extraction results for a single theme')]
verify-extraction themeName:
  bun runner/scripts/verify-extraction.mjs "{{themeName}}"

[group('testing'), doc('Generate plugin data for a single theme (preserves other themes)')]
generate-plugin-theme themeName:
  bun --smol ./plugin/scripts/generate.js "{{themeName}}" --auto --no-clear

[group('testing'), doc('Full single-theme pipeline: extract → compile → generate → build')]
full-theme-pipeline themeName:
  #!/usr/bin/env bash
  set -e
  just cli-extract-force "{{themeName}}"
  just cli-recompile-theme "{{themeName}}"
  just generate-plugin-theme "{{themeName}}"
  just build-quartz "{{themeName}}"

[group('testing'), doc('Test a single mapping for a theme')]
test-mapping themeName obsidianSelector mode="dark":
  bun runner/scripts/test-mapping.mjs --theme "{{themeName}}" --obsidian-selector "{{obsidianSelector}}" --mode {{mode}}

[group('testing'), doc('Test all mappings for a theme')]
test-all-mappings themeName mode="dark":
  bun runner/scripts/test-mapping.mjs --theme "{{themeName}}" --all --mode {{mode}}

[group('testing'), doc('Test mappings for a specific aspect')]
test-aspect-mappings themeName aspect mode="dark":
  bun runner/scripts/test-mapping.mjs --theme "{{themeName}}" --aspect "{{aspect}}" --mode {{mode}}

[group('testing'), doc('Assert structural correctness of a compiled theme')]
assert-theme themeName:
  bun runner/scripts/assert-theme-structure.mjs --theme "{{themeName}}"

[group('testing'), doc('Assert all themes and generate report')]
assert-all-themes:
  bun runner/scripts/assert-theme-structure.mjs --all --report

[group('agent'), doc('Run agent verification workflow')]
agent-verify themeName aspect="all" mode="dark":
  bun runner/scripts/agent-workflow.mjs --theme "{{themeName}}" --aspect "{{aspect}}" --mode {{mode}} --verify

[group('agent'), doc('Run agent workflow with cross-theme regression check')]
agent-verify-cross themeName aspect="all" mode="dark":
  bun runner/scripts/agent-workflow.mjs --theme "{{themeName}}" --aspect "{{aspect}}" --mode {{mode}} --verify --cross-theme

[group('reporting'), doc('Generate mapping coverage report')]
coverage-report:
  bun runner/scripts/mapping-coverage-report.mjs

[group('reporting'), doc('Show top N themes by mapping coverage')]
coverage-top n="20":
  bun runner/scripts/mapping-coverage-report.mjs --top {{n}}

[group('reporting'), doc('Show bottom N themes by mapping coverage')]
coverage-bottom n="20":
  bun runner/scripts/mapping-coverage-report.mjs --bottom {{n}}

[group('testing'), doc('Clean up Quartz build outputs')]
clean-quartz-output:
  rm -rf .quartz-output/

everything-and-the-kitchen-sink: generate-callout-manifest style-settings cli-extract-baseline cli-extract-all-force drop prepare ingest compile generate-plugin convert format-non-generated
