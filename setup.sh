#!/bin/bash
npm install -g node-windows
cd server/ & npm link node-windows
cd ../frontend & npm link node-windows

cd ../ & node ./setup_services.js