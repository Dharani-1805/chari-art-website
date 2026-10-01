@echo off
title Push Chari Creations Website to GitHub
echo =======================================================
echo Pushing Chari Creations Website to GitHub Repository:
echo https://github.com/Dharani-1805/chari-art-website
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
git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo =======================================================
    echo  SUCCESS! All files have been uploaded to GitHub!
    echo =======================================================
    echo.
    echo Next steps:
    echo 1. GitHub Pages:
    echo    https://github.com/Dharani-1805/chari-art-website/settings/pages
    echo    Under 'Source', select 'GitHub Actions'
    echo    Live at: https://dharani-1805.github.io/chari-art-website/
    echo.
    echo 2. Render.com:
    echo    https://dashboard.render.com -^> New Static Site
    echo    Connect repo: Dharani-1805/chari-art-website
    echo    Live at: https://chari-art-website.onrender.com
    echo.
) else (
    echo.
    echo Push did not complete. If you saw a login popup, please approve it and run this again.
)

pause
