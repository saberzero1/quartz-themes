
@echo off
setlocal enabledelayedexpansion

REM --- Configuration ---
set "THEME_DIR=themes"
set "QUARTZ_STYLES_DIR=quartz\styles"
set "CUSTOM_SCSS_FILE=custom.scss"

REM --- Helper Echo Functions (without color) ---
echo.
echo [INFO] Starting theme installation...
echo.

REM --- Detect Quartz Root ---
set "TARGET_THEME_DIR=%THEME_DIR%"
if exist "%QUARTZ_STYLES_DIR%\%CUSTOM_SCSS_FILE%" (
    echo [OK] Quartz root successfully detected...
    set "TARGET_THEME_DIR=%QUARTZ_STYLES_DIR%\%THEME_DIR%"
    set "CUSTOM_SCSS_PATH=%QUARTZ_STYLES_DIR%\%CUSTOM_SCSS_FILE%"
) else (
    echo [WARN] Quartz root not detected, checking if we are in the styles directory...
    if exist "%CUSTOM_SCSS_FILE%" (
        echo [OK] Styles directory detected...
        set "CUSTOM_SCSS_PATH=%CUSTOM_SCSS_FILE%"
    ) else (
        >&2 echo [ERROR] Cannot detect Quartz repository. Are you in the correct working directory?
        exit /b 1
    )
)

echo [INFO] Target theme directory: %TARGET_THEME_DIR%
echo [INFO] Target custom SCSS file: %CUSTOM_SCSS_PATH%
echo.

REM --- Parse Input Theme ---
echo Input theme raw: %*

set "input_theme=%*"
REM Replace spaces with hyphens - Note: This is simpler than the bash loop
set "THEME=%input_theme: =-%"

if "%THEME%"=="" (
    echo [WARN] No theme provided, defaulting to tokyo-night...
    set "THEME=tokyo-night"
)

REM Batch has no easy built-in lowercase conversion. Assuming input/default is lowercase.
echo [INFO] Theme parsed to: %THEME%
echo.

REM --- Validate Theme ---
echo Validating theme '%THEME%'...

set "GITHUB_URL_BASE=https://raw.githubusercontent.com/saberzero1/quartz-themes/master/__CONVERTER/"
set "GITHUB_OUTPUT_DIR=themes/"
set "GITHUB_OVERRIDE_DIR=extras/themes/"
set "GITHUB_EXTRAS_DIR=extras/"
set "GITHUB_THEME_DIR=%THEME%/"
set "CSS_INDEX_URL=%GITHUB_URL_BASE%%GITHUB_OUTPUT_DIR%%GITHUB_THEME_DIR%_index.scss"
set "CSS_FONT_URL=%GITHUB_URL_BASE%%GITHUB_OUTPUT_DIR%%GITHUB_THEME_DIR%_fonts.scss"
set "CSS_DARK_URL=%GITHUB_URL_BASE%%GITHUB_OUTPUT_DIR%%GITHUB_THEME_DIR%_dark.scss"
set "CSS_LIGHT_URL=%GITHUB_URL_BASE%%GITHUB_OUTPUT_DIR%%GITHUB_THEME_DIR%_light.scss"
set "CSS_OVERRIDE_URL=%GITHUB_URL_BASE%%GITHUB_OVERRIDE_DIR%%GITHUB_THEME_DIR%_index.scss"
set "CSS_EXTRAS_URL=%GITHUB_URL_BASE%%GITHUB_EXTRAS_DIR%"
set "README_URL=%GITHUB_URL_BASE%%GITHUB_OVERRIDE_DIR%%GITHUB_THEME_DIR%README.md"

REM Check if theme exists using curl to get HTTP status code
set "HTTP_CODE=0"
echo Checking URL: %CSS_INDEX_URL%
for /f %%i in ('curl -o nul --silent -w "%%{http_code}" "%CSS_INDEX_URL%"') do set "HTTP_CODE=%%i"

if "%HTTP_CODE%"=="200" (
    echo [OK] Theme '%THEME%' found. Preparing to fetch files...
) else (
    if "%HTTP_CODE%"=="404" (
        >&2 echo [ERROR] Theme '%THEME%' not found (HTTP %HTTP_CODE%). Please check the compatibility list.
        exit /b 1
    ) else (
        >&2 echo [ERROR] Something weird happened (HTTP %HTTP_CODE%). If this issue persists, please open an Issue on GitHub.
        exit /b 1
    )
)
echo.

REM --- Clean and Create Directories ---
echo Cleaning theme directory '%TARGET_THEME_DIR%'...
if exist "%TARGET_THEME_DIR%\" (
    rmdir /s /q "%TARGET_THEME_DIR%"
    if errorlevel 1 (
      >&2 echo [ERROR] Failed to remove directory '%TARGET_THEME_DIR%'. Check permissions.
      exit /b 1
    )
)

echo Creating theme directory structure...
mkdir "%TARGET_THEME_DIR%\overrides" > nul
if errorlevel 1 (
    >&2 echo [ERROR] Failed to create directory '%TARGET_THEME_DIR%\overrides'. Check permissions.
    exit /b 1
)
echo.

REM --- Fetch Theme Files ---
echo Fetching theme files...
curl -s -S -o "%TARGET_THEME_DIR%\_index.scss" "%CSS_INDEX_URL%" || ( >&2 echo [ERROR] Failed to download _index.scss & exit /b 1 )
curl -s -S -o "%TARGET_THEME_DIR%\_fonts.scss" "%CSS_FONT_URL%" || ( >&2 echo [ERROR] Failed to download _fonts.scss & exit /b 1 )
curl -s -S -o "%TARGET_THEME_DIR%\_dark.scss" "%CSS_DARK_URL%" || ( >&2 echo [ERROR] Failed to download _dark.scss & exit /b 1 )
curl -s -S -o "%TARGET_THEME_DIR%\_light.scss" "%CSS_LIGHT_URL%" || ( >&2 echo [ERROR] Failed to download _light.scss & exit /b 1 )
curl -s -S -o "%TARGET_THEME_DIR%\extras\_index.scss" "%CSS_OVERRIDE_URL%" || ( >&2 echo [ERROR] Failed to download overrides/_index.scss & exit /b 1 )
echo.

echo Fetching extras...
curl -s -S -o "%TARGET_THEME_DIR%\extras\_mode-toggle.scss" "%CSS_EXTRAS_URL%"
echo.

echo Fetching README file...
curl -s -S -o "%TARGET_THEME_DIR%\README.md" "%README_URL%" || ( echo [WARN] Failed to download README.md. Continuing... )
echo.

REM --- Check Fetched Files ---
echo Checking theme files...
if not exist "%TARGET_THEME_DIR%\_index.scss" ( >&2 echo [ERROR] _index.scss missing & exit /b 1 ) else ( echo [OK] _index.scss exists )
if not exist "%TARGET_THEME_DIR%\_fonts.scss" ( >&2 echo [ERROR] _fonts.scss missing & exit /b 1 ) else ( echo [OK] _fonts.scss exists )
if not exist "%TARGET_THEME_DIR%\_dark.scss" ( >&2 echo [ERROR] _dark.scss missing & exit /b 1 ) else ( echo [OK] _dark.scss exists )
if not exist "%TARGET_THEME_DIR%\_light.scss" ( >&2 echo [ERROR] _light.scss missing & exit /b 1 ) else ( echo [OK] _light.scss exists )
if not exist "%TARGET_THEME_DIR%\extras\_index.scss" ( >&2 echo [ERROR] extras/_index.scss missing & exit /b 1 ) else ( echo [OK] extras/_index.scss exists )
if not exist "%TARGET_THEME_DIR%\README.md" ( echo [WARN] README.md missing ) else ( echo [OK] README file exists )
echo.

REM --- Verify Setup (Add import to custom.scss if missing) ---
echo Verifying setup in %CUSTOM_SCSS_PATH%...

set "IMPORT_LINE=@use "./themes";"
set "BASE_IMPORT_LINE=@use "./base.scss";"
set "TEMP_SCSS_FILE=%CUSTOM_SCSS_PATH%.tmp"

findstr /L /C:"%IMPORT_LINE%" "%CUSTOM_SCSS_PATH%" > nul
if errorlevel 1 (
    echo [INFO] Import line '%IMPORT_LINE%' not found. Adding it...
    REM Use a temporary file to add the line after the base import
    if exist "%TEMP_SCSS_FILE%" del "%TEMP_SCSS_FILE%"

    (for /f "usebackq delims=" %%L in ("%CUSTOM_SCSS_PATH%") do (
        echo %%L
        REM Use findstr to check the line content reliably
        echo "%%L" | findstr /L /C:"%BASE_IMPORT_LINE%" > nul
        if not errorlevel 1 (
            echo %IMPORT_LINE%
        )
    )) > "%TEMP_SCSS_FILE%"

    REM Check if temp file was created successfully
    if not exist "%TEMP_SCSS_FILE%" (
        >&2 echo [ERROR] Failed to create temporary file for updating %CUSTOM_SCSS_PATH%.
        exit /b 1
    )

    REM Replace original with temp file
    del "%CUSTOM_SCSS_PATH%"
    ren "%TEMP_SCSS_FILE%" "%CUSTOM_SCSS_FILE%"
    if errorlevel 1 (
         >&2 echo [ERROR] Failed to replace %CUSTOM_SCSS_PATH% with updated version. Check permissions.
         REM Attempt to restore from temp if rename failed but temp exists
         if exist "%TEMP_SCSS_FILE%" echo Original file deleted, updated content is in %TEMP_SCSS_FILE%
         exit /b 1
    )
     echo [INFO] Added import line to %CUSTOM_SCSS_PATH%.
) else (
    echo [WARN] Theme import line already present in %CUSTOM_SCSS_PATH%. Skipping...
)
echo.

echo [OK] Finished fetching and applying theme '%THEME%'.

endlocal
exit /b 0
