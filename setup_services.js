var Service = require('node-windows').Service;

var serverService = new Service({
  name:'questlog matrix server',
  description: 'The nodejs.org example web server.',
  script: require('path').join(__dirname,'server/start_server.sh'),
  workingDirectory: require('path').join(__dirname,'server/'),
});

serverService.on('install',function(){
  svc.start();
});

serverService.install();