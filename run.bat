@echo off
cd /d %~dp0

echo ==========================
echo  Cleaning Vite cache...
echo ==========================

rmdir /s /q node_modules\.vite 2>nul

echo ==========================
echo  Starting Dev Server
echo ==========================

npm run dev

pause