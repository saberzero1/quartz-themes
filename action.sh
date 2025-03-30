#!/bin/bash

# To fetch and use this script in a GitHub action:
#
# curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- <THEME_NAME>

RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
BLUE='\033[1;34m'
NC='\033[0m'

echo_err() { echo -e "${RED}$1${NC}"; }
echo_warn() { echo -e "${YELLOW}$1${NC}"; }
echo_ok() { echo -e "${GREEN}$1${NC}"; }
echo_info() { echo -e "${BLUE}$1${NC}"; }

check_file() { 
  if [ -f "$1" ]; then
    return 0
  else
    return 1
  fi
}

THEME_DIR="themes"
QUARTZ_STYLES_DIR="quartz/styles"

if [ -f "./$QUARTZ_STYLES_DIR/custom.scss" ]; then
  echo_ok "Quartz root succesfully detected..."
  THEME_DIR="./$QUARTZ_STYLES_DIR/$THEME_DIR"
else
  echo_warn "Quartz root not detected, checking if we are in the styles directory..."
  if [ -f "./custom.scss" ]; then
    echo_ok "Styles directory detected..."
    THEME_DIR="./$THEME_DIR"
  else
    echo_err "Cannot detect Quartz repository. Are you in the correct working directory?" 1>&2
    exit 1
  fi
fi

echo -e "Input theme: ${BLUE}$*${NC}"

echo "Parsing input theme..."

# Concat parameters
result=""

for param in "$@"; do
  if [[ -n "$result" ]]; then
    result="$result-"
  fi

  result="$result$param"
done

if [ -z "$result" ]; then
  echo_warn "No theme provided, defaulting to Tokyo Night..."
  result="tokyo-night"
fi

# Convert to lowercase
THEME=$(echo "$result" | tr '[:upper:]' '[:lower:]')

echo -e "Theme ${BLUE}$*${NC} parsed to $(echo_info ${THEME})"

echo "Validating theme..."

GITHUB_URL_BASE="https://raw.githubusercontent.com/saberzero1/quartz-themes/master"
GITHUB_OUTPUT_DIR="themes"
GITHUB_OVERRIDE_DIR="extras/themes"
GITHUB_EXTRAS_DIR="extras"
GITHUB_THEME_DIR="$THEME"
CSS_INDEX_URL="${GITHUB_URL_BASE}/${GITHUB_OUTPUT_DIR}/${GITHUB_THEME_DIR}/_index.scss"
CSS_FONT_URL="${GITHUB_URL_BASE}/${GITHUB_OUTPUT_DIR}/${GITHUB_THEME_DIR}/_fonts.scss"
CSS_DARK_URL="${GITHUB_URL_BASE}/${GITHUB_OUTPUT_DIR}/${GITHUB_THEME_DIR}/_dark.scss"
CSS_LIGHT_URL="${GITHUB_URL_BASE}/${GITHUB_OUTPUT_DIR}/${GITHUB_THEME_DIR}/_light.scss"
CSS_OVERRIDE_URL="${GITHUB_URL_BASE}/${GITHUB_OVERRIDE_DIR}/${GITHUB_THEME_DIR}/_index.scss"
CSS_EXTRAS_URL="${GITHUB_URL_BASE}/${GITHUB_EXTRAS_DIR}"
README_URL="${GITHUB_URL_BASE}/${GITHUB_OVERRIDE_DIR}/${GITHUB_THEME_DIR}/README.md"

PULSE=$(curl -o /dev/null --silent -lw '%{http_code}' "${CSS_INDEX_URL}")

if [ "${PULSE}" = "200" ]; then
  echo_ok "Theme '${THEME}' found. Preparing to fetch files..."
else
  if [ "${PULSE}" = "404" ]; then
    echo_err "Theme '${THEME}' not found. Please check the compatibility list." 1>&2
    exit 1
  else
    echo_err "Something weird happened. If this issue persists, please open an Issue on GitHub." !>&2
    exit 1
  fi
fi

echo "Cleaning theme directory..."

rm -rf ${THEME_DIR}

echo "Creating theme directory..."

mkdir -p ${THEME_DIR}/extras

echo "Fetching theme files..."

curl -s -S -o ${THEME_DIR}/_index.scss "${CSS_INDEX_URL}"
curl -s -S -o ${THEME_DIR}/_fonts.scss "${CSS_FONT_URL}"
curl -s -S -o ${THEME_DIR}/_dark.scss "${CSS_DARK_URL}"
curl -s -S -o ${THEME_DIR}/_light.scss "${CSS_LIGHT_URL}"
curl -s -S -o ${THEME_DIR}/extras/_index.scss "${CSS_OVERRIDE_URL}"

echo "Fetching extras..."

curl -s -S -o ${THEME_DIR}/extras/hide-toggle.scss "${CSS_EXTRAS_URL}/hide-toggle.scss"

echo "Fetching README file..."

curl -s -S -o ${THEME_DIR}/README.md "$README_URL"

echo "Checking theme files..."

if [ -f "$THEME_DIR/_index.scss" ]; then
  echo_ok "_index.scss exists"
else
  echo_err "_index.scss missing" 1>&2
  exit 1
fi

if [ -f "$THEME_DIR/_fonts.scss" ]; then
  echo_ok "_fonts.scss exists"
else
  echo_err "_fonts.scss missing" 1>&2
  exit 1
fi

if [ -f "$THEME_DIR/_dark.scss" ]; then
  echo_ok "_dark.scss exists"
else
  echo_warn "_dark.scss missing"
fi

if $(check_file ${THEME_DIR}/_light.scss); then
  echo ${THEME_DIR}/_light.scss
  echo check_file ${THEME_DIR}/_light.scss
  echo [ check_file ${THEME_DIR}/_light.scss ]
  echo_ok "_light.scss exists"
else
  echo_warn "_light.scss missing"
fi

if [ -f "$THEME_DIR/extras/_index.scss" ]; then
  echo_ok "extras/_index.scss exists"
else
  echo_err "extras/_index.scss missing" 1>&2
  exit 1
fi

if [ -f "$THEME_DIR/extras/hide-toggle.scss" ]; then
  echo_ok "extras/hide-toggle.scss exists"
fi

if [ -f "$THEME_DIR/README.md" ]; then
  echo_ok "README file exists"
else
  echo_warn "README file missing"
fi

echo "Verifying setup..."

if grep -q '^@use "./themes";' "$THEME_DIR/../custom.scss"; then
  # Import already present in custom.scss
  echo_warn "Theme import line already present in custom.scss. Skipping..."
else
  # Add `@use "./themes";` import to custom.scss
  sed -ir 's#@use "./base.scss";#@use "./base.scss";\n@use "./themes";#' "$THEME_DIR/../custom.scss"
  echo_info "Added import line to custom.scss..."
fi

echo_ok "Finished fetching and applying theme '${THEME}'."
