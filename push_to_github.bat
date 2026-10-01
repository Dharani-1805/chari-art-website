@echo off
title Push Chari Creations Website to GitHub
echo =======================================================
echo Pushing Chari Creations Website to GitHub Repository:
echo https://github.com/Dharani-1805/chari-arts
echo =======================================================
echo.

:: Add Git to PATH
set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;%PATH%"

echo [Step 1] Verifying branch and status...
git branch -M main
echo.

echo [Step 2] Pushing all files (src/, public/artworks/, components, workflows)...
echo (If a browser window pops up, click 'Sign in with GitHub' or 'Authorize')
echo.
git push -u origin main --force

echo.
if %ERRORLEVEL% EQU 0 (
    echo =======================================================
    echo  SUCCESS! All files have been uploaded to GitHub!
    echo =======================================================
    echo.
    echo Next step:
    echo 1. Open: https://github.com/Dharani-1805/chari-arts/settings/pages
    echo 2. Under 'Source', select 'GitHub Actions'
    echo 3. Your site will be LIVE at:
    echo    https://dharani-1805.github.io/chari-arts/
    echo.
) else (
    echo.
    echo Push did not complete. If you saw a login popup, please approve it and run this again.
)

pause
