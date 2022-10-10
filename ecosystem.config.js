module.exports = {
  apps : [{
    name : "questlog server",
    script : "./start_server.sh",
    cwd: "."
  },
  {
    name : "questlog frontend",
    script : "./frontend/start_frontend.sh",
    cwd: "./frontend/"
  }]
}