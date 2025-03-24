
echo "Verifying setup..."
if grep -q '^@use "./themes";' custom.scss
then
  # Import already present in custom.scss
  echo "Import line already present in custom.scss. Skipping..."
else
  # Add `@use "./themes";` import to custom.scss
  sed -ir 's#@use "./base.scss";#@use "./base.scss";\n@use "./themes";#' custom.scss
  echo "Added import line to custom.scss...
fi
