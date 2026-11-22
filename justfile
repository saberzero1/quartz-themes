set quiet

[doc("List all available commands"), private]
default:
  @just --list

# The converter lives in @quartz-themes/core; this repository measures it.
# Core is loaded from QUARTZ_THEMES_CORE (a built checkout), else ../dev-mode/repos/quartz-themes-core,
# else node_modules/@quartz-themes/core.

[group('fidelity'), doc("Obsidian (private Xvfb display) vs Quartz for the given themes")]
fidelity themes="Minimal,Tokyo Night" *args:
  e2e-headless node fidelity/scripts/fidelity.mjs --themes="{{themes}}" {{args}}

[group('fidelity'), doc("Every theme in Obsidian's community registry (shard with --shard=i/n)")]
fidelity-all *args:
  e2e-headless node fidelity/scripts/fidelity.mjs --all {{args}}

[group('fidelity'), doc("Re-score against cached Obsidian references (no Obsidian needed)")]
fidelity-cached themes="Minimal,Tokyo Night" *args:
  node fidelity/scripts/fidelity.mjs --themes="{{themes}}" --cached {{args}}

[group('fidelity'), doc("Merge shard reports and print the corpus summary")]
fidelity-summary *args:
  node fidelity/scripts/fidelity-summary.mjs {{args}}

[group('layout'), doc("Check themes leave Quartz's page layout working, at phone/tablet/desktop widths")]
layout themes="Minimal,Tokyo Night" *args:
  node fidelity/scripts/layout.mjs --themes="{{themes}}" {{args}}

[group('layout'), doc("Layout audit of every registry theme (shard with --shard=i/n)")]
layout-all *args:
  node fidelity/scripts/layout.mjs --all {{args}}

[group('layout'), doc("Merge layout reports and print issues by kind")]
layout-summary *args:
  node fidelity/scripts/layout-summary.mjs {{args}}

[group('layout'), doc('Show the converted rules behind an element: just layout-explain Nier ".center p" margin')]
layout-explain theme selector props="padding,margin,width" *args:
  node fidelity/scripts/layout-explain.mjs --theme="{{theme}}" --selector="{{selector}}" --props="{{props}}" {{args}}

[group('fidelity'), doc("Convert every registry theme; check Quartz's minifier accepts the output")]
convert-all *args:
  node fidelity/scripts/convert-all.mjs --no-prettier {{args}}

[group('fidelity'), doc("Screenshot themes on the specimen site")]
preview themes="Minimal" pages="callouts" modes="dark,light":
  node fidelity/scripts/preview.mjs --themes="{{themes}}" --pages="{{pages}}" --modes="{{modes}}"

[group('fidelity'), doc("Build the specimen site (runner/vault) with a Quartz checkout")]
build-site quartz="../dev-mode/repos/quartz" out="fidelity/out/site":
  cd "{{quartz}}" && npx quartz build -d "{{justfile_directory()}}/runner/vault" -o "{{justfile_directory()}}/{{out}}"

[group('util')]
format:
  bun prettier . --write --cache

[group('util')]
check:
  bun prettier . --check --cache
