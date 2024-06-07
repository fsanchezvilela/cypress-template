import { defineConfig } from "cypress";
// import { beforeRunHook, afterRunHook } from 'cypress-mochawesome-reporter/lib'
import cypressMochaAwesomeReporterPlugin from 'cypress-mochawesome-reporter/plugin'

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      cypressMochaAwesomeReporterPlugin(on);

      /*
        If you are override before:run or after:run hooks, use this:
          on('before:run', async (details) => {
            console.log('override before:run');
            await beforeRunHook(details);
          });

          on('after:run', async () => {
            console.log('override after:run');
            await afterRunHook();
          });
      */
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

