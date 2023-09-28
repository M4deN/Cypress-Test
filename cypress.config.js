const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 9000,
  requestTimeout: 9000,
  video: true,
  projectId: 'izhzhp',
})