var Service = require('node-windows').Service;

// setup backend server
var serverService = new Service({
    name: 'questlog_matrix_server',
    description: 'server for the maxtrix backend',
    script: require('path').join(__dirname, 'server/index.js'),
    workingDirectory: require('path').join(__dirname, 'server/')
});

serverService.on('install', function () {
    serverService.start();
});

serverService.install();

// setup frontend server
var frontendService = new Service({
    name: 'questlog_matrix_frontend',
    description: 'frontend for the maxtrix backend',
    script: require('path').join(__dirname, 'frontend/index.js'),
    workingDirectory: require('path').join(__dirname, 'frontend/')
});

frontendService.on('install', function () {
    frontendService.start();
});

frontendService.install();