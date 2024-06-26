import { defineConfig } from "cypress";
import cypressMochaAwesomeReporterPlugin from "cypress-mochawesome-reporter/plugin";
import cypressWatchAndReloadPlugins from "cypress-watch-and-reload/plugins";
import cypressCodeCoveragePlugin from "@bahmutov/cypress-code-coverage/plugin";
import cypressOnFix from "cypress-on-fix";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    outputFolder: "cypress/reports/html",
    quiet: true,
    overwrite: false,
    html: {
      filename: "index.html",
    },
    json: {
      filename: "*.json",
    },
  },
  retries: 1,
  e2e: {
    async setupNodeEvents(cypressOn, config) {
      const on = cypressOnFix(cypressOn);
      // implement node event listeners here
      cypressMochaAwesomeReporterPlugin(cypressOn);

      await addCucumberPreprocessorPlugin(on, config);

      // https://github.com/bahmutov/cypress-watch-and-reload
      cypressWatchAndReloadPlugins(on, config);
      // https://github.com/bahmutov/cypress-code-coverage
      cypressCodeCoveragePlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      )
    },
  },
  projectId: "z9d1jw",
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  video: true,
});
