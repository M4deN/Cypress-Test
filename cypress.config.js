const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 4000,
  requestTimeout: 4000,
  video: true,
  projectId: 'izhzhp',
})