import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  projectId: "z9d1jw",

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
