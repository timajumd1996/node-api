// node-api/ecosystem.config.js
module.exports = {
  apps: [{
    name: 'node-api',
    script: 'server.js',
    instances: 1,
    autorestart: true,
    watch: false,
  }]
};
