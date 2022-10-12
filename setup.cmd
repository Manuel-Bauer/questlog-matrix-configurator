@echo off

CALL echo "Installing requirements..."
CALL npm install -g node-windows

echo "Installing server dependencies..."
cd ./server/ & CALL npm install & cd ../

echo "Installing frontend dependencies..."
cd ./frontend/ & CALL npm install & cd ../

CALL echo "Setup services to enable autostart"
CALL node ./setup_services.js

pause