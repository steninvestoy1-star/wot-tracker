@echo off
setlocal
cd /d "%~dp0"

if not exist node_modules (
  echo Installing dependencies for first run...
  call npm.cmd install
  if errorlevel 1 (
    echo.
    echo Install failed.
    pause
    exit /b 1
  )
)

if not exist .env.local (
  copy /Y .env.local.example .env.local >nul
)

start "WoT Tracker" cmd /k "cd /d ""%~dp0"" && npm.cmd run dev"
exit /b 0
