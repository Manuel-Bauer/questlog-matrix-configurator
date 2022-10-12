#!/bin/bash
echo "Installing requirements..."
npm install -g node-windows
cd ./server/ & npm install & cd ../
cd ./frontend/ & npm install & cd ../

echo "Setup services to enable autostart"
node ./setup_services.js