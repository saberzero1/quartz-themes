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
  node --expose-gc --max-old-space-size=12288 ./runner/scripts/extract.js -- --waitforTimeout=300000

[group('extract')]
extract-baseline: build
  FORCE_BASELINE=true node --expose-gc --max-old-space-size=12288 ./runner/scripts/extract.js -- --waitforTimeout=300000

[group('extract')]
compile:
  node --max-old-space-size=16384 ./runner/scripts/compile.js "" --auto

[group('cli-extract'), doc('Compile a single theme')]
cli-compile-theme themeName:
  node ./runner/scripts/compile.js "{{themeName}}" --auto

[group('extract')]
convert:
  bun ./convert.js

[group('extract')]
extract-full: build compile convert format-non-generated

[group('extract')]
recompile: compile convert

[group('cli-extract'), doc('Recompile a single theme')]
cli-recompile-theme themeName:
  node ./runner/scripts/compile.js "{{themeName}}" --auto
  bun ./convert.js

[group('cli-extract')]
cli-extract-fonts:
  node ./runner/scripts/font-extractor.js --all ./runner/vault

[group('plugin')]
generate-plugin:
  node --max-old-space-size=16384 ./plugin/scripts/generate.js --auto
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
  bun ./scripts/populate-style-settings.mjs

[group('database')]
ingest:
  node ./runner/scripts/ingest.js

[group('database')]
prepare:
  node ./runner/scripts/prep.js
  node ./runner/scripts/prep.js

[group('database')]
prepare-baseline:
  FORCE_PREP=true node ./runner/scripts/prep.js

[group('database')]
drop:
  rm ./styles.db || true
  rm ./styles.db-shm || true
  rm ./styles.db-wal || true

[group('database')]
rebuild: drop ingest

[group('cli-extract'), doc('Generate custom callout manifest and vault files')]
generate-callout-manifest:
  node ./extensions/generate-callout-manifest.mjs

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

everything-and-the-kitchen-sink: generate-callout-manifest style-settings cli-extract-baseline cli-extract-all-force drop prepare ingest compile generate-plugin convert format-non-generated
