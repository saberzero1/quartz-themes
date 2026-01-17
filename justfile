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
  node ./runner/scripts/compile.js

[group('extract')]
convert:
  bun ./convert.js

[group('extract')]
extract-full: build compile convert format-non-generated

[group('extract')]
recompile: compile convert

[group('database')]
ingest:
  node ./runner/scripts/ingest.js

[group('database')]
prepare:
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


