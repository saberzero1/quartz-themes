# Change this if you want to use a different folder name or if you have renamed the folder
quartz-folder-name := 'quartz'
quartz-path := path_exists(clean(join(justfile_directory(), '..', quartz-folder-name, 'quartz', 'styles')))

error-quartz-not-found := 'Quartz not found. Please make sure you are in the right folder or set the correct folder name in the justfile\n\nQuartz folder is currently set to:'
quartz-path-example := '\nThe Folder structure should look like this:\n\nsomeFolder/\n  quartz/ (your quartz repository)\n    quartz/\n      styles/\n  quartz-themes/ (this repository)'
test-theme-path := ''

set quiet

[doc('List all available commands'), private]
default:
  @just --list

[private]
alias c := check
[private]
alias t := theme
[private]
alias u := update

[private]
verify:
  npx prettier . --check

[private]
build:
  node convert.js

[private]
fonts:
  node extract-font-list.js

[private]
clean-fonts:
  rm -rf obsidian-fonts

[private]
format:
  npx prettier . --write

[private]
compile-all: build fonts format clean-fonts

[private]
compile: build format

[private]
compile-single $theme:
  node convert.js -- $theme

[doc('Update themes')]
update:
  git pull

[doc('Check for updates')]
check:
  git fetch
  git status

[doc('Set theme')]
theme +name:
  #!/usr/bin/env sh
  if ! '{{quartz-path}}'; then
  echo '{{quartz-path}}'
  echo '{{error-quartz-not-found}}' '{{quartz-folder-name}}'
  echo '{{quartz-path-example}}'
  exit 1
  fi
  echo 'Setting theme "{{name}}"'
  node set-theme.js "{{replace(trim(lowercase(name)), ' ', '-')}}" "{{quartz-folder-name}}"
