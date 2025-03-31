#!/bin/bash

# Only print echos
set +x

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

try_curl() {
  local URL="$1"
  local OUTPUT_FILE="$2"
  
  # curl -I -w "%{http_code}" -s "$URL" -o "$OUTPUT_FILE" > /dev/null
  curl -s -S -o "$OUTPUT_FILE" "$URL"
  local http_code=$(curl -o /dev/null --silent -lw '%{http_code}' "$URL")

  # curl on non-existent files return "404: Not found" from GitHub.
  local content="$(sed -n '1{/^404/p};q' $OUTPUT_FILE)"
  if [ ! -z "$content" ]; then
    rm -f "$OUTPUT_FILE"
    return 1  # Failure: HTTP error
  else 
    if [ "$http_code" = "200" ]; then
      return 0
    # else
      # rm -f "$OUTPUT_FILE"
      # return 1  # Failure: HTTP error
    fi
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
GITHUB_EXTRAS_DIR="extras/themes"
GITHUB_THEME_DIR="$THEME"
THEME_ROOT="${GITHUB_URL_BASE}/${GITHUB_OUTPUT_DIR}/${GITHUB_THEME_DIR}"
THEME_EXTRAS_ROOT="${GITHUB_URL_BASE}/${GITHUB_EXTRAS_DIR}/${GITHUB_THEME_DIR}"
EXTRAS_ROOT="${GITHUB_URL_BASE}/extras"
CSS_INDEX_URL="${THEME_ROOT}/_index.scss"
CSS_FONT_URL="${THEME_ROOT}/_fonts.scss"
CSS_DARK_URL="${THEME_ROOT}/_dark.scss"
CSS_LIGHT_URL="${THEME_ROOT}/_light.scss"
CSS_EXTRAS_INDEX_URL="${THEME_EXTRAS_ROOT}/_index.scss"
README_URL="${THEME_ROOT}/README.md"

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

try_curl "${CSS_INDEX_URL}" "${THEME_DIR}/_index.scss"
curl -s -S -o ${THEME_DIR}/_fonts.scss "${CSS_FONT_URL}"
try_curl "${CSS_DARK_URL}" "${THEME_DIR}/_dark.scss"
try_curl "${CSS_LIGHT_URL}" "${THEME_DIR}/_light.scss"
try_curl "${CSS_EXTRAS_INDEX_URL}" "${THEME_DIR}/extras/_index.scss"

echo "Fetching extras..."

try_curl "${EXTRAS_ROOT}/hide-toggle.scss" "${THEME_DIR}/extras/hide-toggle.scss"
try_curl "${EXTRAS_ROOT}/material.scss" "${THEME_DIR}/extras/material.scss"
try_curl "${EXTRAS_ROOT}/minimal.scss" "${THEME_DIR}/extras/minimal.scss"

echo "Fetching README file..."

try_curl "${README_URL}" "${THEME_DIR}/README.md"

echo "Checking theme files..."

if ls "$THEME_DIR/_index.scss" >/dev/null 2>&1; then
  echo_ok "_index.scss exists"
else
  echo_err "_index.scss missing" 1>&2
  exit 1
fi

if ls "$THEME_DIR/_fonts.scss" >/dev/null 2>&1; then
  echo_ok "_fonts.scss exists"
else
  echo_err "_fonts.scss missing" 1>&2
  exit 1
fi

if ls "$THEME_DIR/_dark.scss" >/dev/null 2>&1; then
  echo_ok "_dark.scss exists"
else
  echo_warn "_dark.scss missing (expected with light-only themes)"
fi

if ls "$THEME_DIR/_light.scss" >/dev/null 2>&1; then
  echo_ok "_light.scss exists"
else
  echo_warn "_light.scss missing (expected with dark-only themes)"
fi

if ls "$THEME_DIR/extras/_index.scss" >/dev/null 2>&1; then
  echo_ok "extras/_index.scss exists"
else
  echo_err "extras/_index.scss missing" 1>&2
  exit 1
fi

if ls "$THEME_DIR/extras/hide-toggle.scss" >/dev/null 2>&1; then
  echo_ok "extras/hide-toggle.scss exists"
fi

if ls "$THEME_DIR/extras/material.scss" >/dev/null 2>&1; then
  echo_ok "extras/material.scss exists"
fi

if ls "$THEME_DIR/extras/minimal.scss" >/dev/null 2>&1; then
  echo_ok "extras/minimal.scss exists"
fi

if ls "$THEME_DIR/README.md" >/dev/null 2>&1; then
  echo_ok "README file exists"
else
  echo_warn "README file missing"
fi

echo "Applying patches..."

CHECK_LINE=$(head -n 1 "${THEME_DIR}/_index.scss")

echo $CHECK_LINE

if grep -q 'quartz themes (dark|light)-only' "${THEME_DIR}/_index.scss"; then
  sed -i "/Component\.Darkmode\(\)/d" "./quartz.layout.ts"
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
