const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const { config } = require("cypress/types/bluebird");

// async function setupNodeEvents(on, config) {
//   // Esto es necesario para que el preprocesador pueda generar informes JSON después de cada ejecución y más,
//   await addCucumberPreprocessorPlugin(on, config);
 
//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [createEsbuildPlugin(config)],
//     })
//   );
//   allureWriter(on, config);
 
//   return config;
//}

module.exports = defineConfig({
      e2e: {

    async setupNodeEvents(on, config) {
     const bundler = createBundler({
         plugins: [createBundlerPlugin(config)],
     });

     on("file:preprocessor", bundler);
     await addCucumberPreprocessorPlugin(on, config);

     return config;

    },
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
