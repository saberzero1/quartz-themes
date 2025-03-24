
# Add `@use "./themes";` import to custom.scss
sed -ir 's#@use "./base.scss";#@use "./base.scss";\n@use "./themes";#' custom.scss
