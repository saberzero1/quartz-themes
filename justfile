# Change this if you want to use a different folder name or if you have renamed the folder
quartz-folder-name := 'quartz'
quartz-path := path_exists(clean(join(justfile_directory(), '..', quartz-folder-name, 'quartz', 'styles')))

error-quartz-not-found := 'Quartz not found. Please make sure you are in the right folder or set the correct folder name in the justfile'
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
  node __CONVERTER/convert.js

[private]
format:
  npx prettier . --write

[private]
compile: build format

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
  echo '{{error-quartz-not-found}}'
  echo '{{quartz-path-example}}'
  exit 1
  fi
  echo 'Setting theme "{{name}}"'
  npm run --silent theme -- "{{replace(trim(lowercase(name)), ' ', '-')}}"
  ehco 'Succesfully set theme "{{name}}".'
