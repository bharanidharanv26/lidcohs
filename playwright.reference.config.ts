import { defineConfig } from "@playwright/test";
import config from "./playwright.config";

export default defineConfig({
  ...config,
  testDir: "./tests/reference",
  outputDir: "./test-results/reference",
  reporter: [["list"], ["html", { open: "never", outputFolder: "playwright-report/reference" }]],
  timeout: 90_000,
  workers: 2,
  projects: config.projects?.filter((project) => project.name !== "small-mobile"),
});
