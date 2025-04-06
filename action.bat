@echo off
setlocal enabledelayedexpansion

REM Equivalent of the Bash script for Windows Batch

REM To fetch and use this script:
REM You would typically download the .bat file and run it.
REM Using curl like in bash requires curl to be installed and is less common for .bat execution.
REM Example:
REM curl -O https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.bat
REM action.bat <THEME_NAME>

REM Color codes are not directly supported in standard CMD. Echoing messages plainly.
echo [INFO] Starting theme setup...

set "THEME_DIR=themes"
set "QUARTZ_STYLES_DIR=quartz\styles"
set "FINAL_THEME_DIR=.\%QUARTZ_STYLES_DIR%\%THEME_DIR%"

if exist ".\%QUARTZ_STYLES_DIR%\custom.scss" (
  echo [OK] Quartz root succesfully detected...
  set "FINAL_THEME_DIR=.\%QUARTZ_STYLES_DIR%\%THEME_DIR%"
) else (
  echo [WARN] Quartz root not detected, checking if we are in the styles directory...
  if exist ".\custom.scss" (
    echo [OK] Styles directory detected...
    set "FINAL_THEME_DIR=.\%THEME_DIR%"
  ) else (
    echo [ERR] Cannot detect Quartz repository. Are you in the correct working directory? >&2
    exit /b 1
  )
)

echo Input theme: %*

echo Parsing input theme...

REM Concat parameters
set "result="

for %%G in (%*) do (
  if not "!result!"=="" (
    set "result=!result!-"
  )
  set "result=!result!%%G"
)

if "%result%"=="" (
  echo [WARN] No theme provided, defaulting to Tokyo Night...
  set "result=tokyo-night"
)

REM Convert to lowercase using PowerShell (requires PowerShell)
echo Converting theme name to lowercase...
for /f "delims=" %%L in ('powershell -Command "'%result%'.ToLower()"') do set "THEME=%%L"
if "%THEME%"=="" (
    echo [ERR] Failed to convert theme name to lowercase using PowerShell. >&2
    exit /b 1
)


echo Theme %* parsed to %THEME%

echo Validating theme... (Validation logic depends on available themes - skipping explicit check here)

echo Cleaning theme directory...
if exist "%FINAL_THEME_DIR%\" (
  rmdir /s /q "%FINAL_THEME_DIR%"
  if errorlevel 1 (
      echo [ERR] Failed to remove directory: %FINAL_THEME_DIR% >&2
      exit /b 1
  )
)

echo Creating theme directory...
mkdir "%FINAL_THEME_DIR%"
if errorlevel 1 (
    echo [ERR] Failed to create directory: %FINAL_THEME_DIR% >&2
    exit /b 1
)


echo Fetching theme files...

REM Check if git is available
where git > nul 2>&1
if errorlevel 1 (
    echo [ERR] git command not found. Please install Git and ensure it's in your PATH. >&2
    exit /b 1
)


REM clone only the specified theme using sparse checkout to save bandwidth and time
git clone -n --depth=1 --filter=tree:0 https://github.com/saberzero1/quartz-themes.git quartz-themes-temp > nul 2>&1
if errorlevel 1 (
    echo [ERR] Failed to clone repository. >&2
    rmdir /s /q quartz-themes-temp > nul 2>&1
    exit /b 1
)

REM Using pushd/popd to manage directory changes temporarily and safely
pushd quartz-themes-temp
git sparse-checkout set --no-cone "/themes/%THEME%" > nul 2>&1
if errorlevel 1 (
    echo [ERR] Failed to set sparse checkout. >&2
    popd
    rmdir /s /q quartz-themes-temp > nul 2>&1
    exit /b 1
)
git checkout > nul 2>&1
if errorlevel 1 (
    echo [ERR] Failed to checkout sparse files. >&2
    popd
    rmdir /s /q quartz-themes-temp > nul 2>&1
    exit /b 1
)
popd

echo Installing theme files...
if not exist "quartz-themes-temp\themes\%THEME%\" (
    echo [ERR] Theme '%THEME%' not found in the cloned repository. >&2
    rmdir /s /q quartz-themes-temp > nul 2>&1
    exit /b 1
)

move "quartz-themes-temp\themes\%THEME%\*" "%FINAL_THEME_DIR%" > nul
if errorlevel 1 (
    echo [ERR] Failed to move theme files to %FINAL_THEME_DIR% >&2
    rmdir /s /q quartz-themes-temp > nul 2>&1
    exit /b 1
)

rmdir /s /q quartz-themes-temp
if errorlevel 1 (
    echo [WARN] Failed to clean up temporary clone directory quartz-themes-temp
)

echo Applying patches...

REM Check if patch is needed (single mode theme) using findstr
findstr /c:"quartz themes dark-only" /c:"quartz themes light-only" "%FINAL_THEME_DIR%\_index.scss" > nul
if not errorlevel 1 (
  echo [WARN] Single mode theme detected, applying patch...
  REM Use PowerShell to remove the line containing Component.Darkmode()
  powershell -Command "(Get-Content 'quartz.layout.ts') | Where-Object { $_ -notmatch 'Component\.Darkmode\(\)' } | Set-Content 'quartz.layout.ts'"
  if errorlevel 1 (
      echo [ERR] Failed to apply patch to quartz.layout.ts using PowerShell. >&2
      exit /b 1
  )
) else (
  echo [INFO] Multi-mode theme or patch not needed.
)


echo Verifying setup...

REM Check if we need to change directory - depends on where FINAL_THEME_DIR was set
set "CUSTOM_SCSS_PATH="
if "%FINAL_THEME_DIR%"==".\%THEME_DIR%" (
    set "CUSTOM_SCSS_PATH=.\custom.scss"
) else (
    set "CUSTOM_SCSS_PATH=.\%QUARTZ_STYLES_DIR%\custom.scss"
)

REM Check if import already exists
findstr /c:"@use \"./themes\";" "%CUSTOM_SCSS_PATH%" > nul
if not errorlevel 1 (
  REM Import already present in custom.scss
  echo [WARN] Theme import line already present in %CUSTOM_SCSS_PATH%. Skipping...
) else (
  REM Add `@use "./themes";` import to custom.scss using PowerShell
  echo [INFO] Adding import line to %CUSTOM_SCSS_PATH%...
  powershell -Command "$content = Get-Content '%CUSTOM_SCSS_PATH%'; $newContent = @($content[0]) + '@use \"./themes\";' + ($content | Select-Object -Skip 1); $newContent | Set-Content '%CUSTOM_SCSS_PATH%'"
   if errorlevel 1 (
      echo [ERR] Failed to add import line to %CUSTOM_SCSS_PATH% using PowerShell. >&2
      exit /b 1
  )
  echo [INFO] Added import line to %CUSTOM_SCSS_PATH%...
)

echo [OK] Finished fetching and applying theme '%THEME%'.
exit /b 0
