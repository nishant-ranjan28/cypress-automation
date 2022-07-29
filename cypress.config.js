const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotsFolder: 'cypress/screenshots',
    specPattern: 'cypress/integration/examples/*.js'
  },
});
