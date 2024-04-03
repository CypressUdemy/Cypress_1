const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
  // Esto es necesario para que el preprocesador pueda generar informes JSON después de cada ejecución y más,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  allureWriter(on, config);

  return config;
}


module.exports = defineConfig({

  e2e: {
 setupNodeEvents,
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },

    viewportWidth: 1500,
    viewportHeight: 900,
    chromeWebSecurity: false,
    pageLoadTimeout:90000,
    video: true,

    defaultCommandTimeout: 6000,
 
   
  },

});
