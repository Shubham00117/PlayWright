// Import Playwright configuration helpers and predefined device profiles
import { defineConfig, devices } from "@playwright/test";

/**
 * ============================
 * Environment Variable Setup
 * ============================
 * Used when you want to load environment variables from a .env file
 * (Currently commented out)
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * ============================
 * Playwright Test Configuration
 * ============================
 * Official docs: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({

  /**
   * ----------------------------
   * Test Directory Configuration
   * ----------------------------
   * Defines where test files are located
   */
  testDir: "./tests",

  /**
   * ----------------------------
   * Global Test Timeout Settings
   * ----------------------------
   * Maximum time allowed for a single test to complete
   * (Commented – can be enabled if needed)
   */
  // timeout: 20000,

  /**
   * ----------------------------
   * Expect Assertion Timeout
   * ----------------------------
   * Controls retry duration for expect() assertions
   */
  // expect: {
  //   // timeout: 10000
  // },

  /**
   * ----------------------------
   * Parallel Execution Control
   * ----------------------------
   * false → run test cases in serial
   * true  → allow parallel execution
   */
  fullyParallel: false, // set false run test case in serial

  /**
   * ----------------------------
   * CI Safety Check
   * ----------------------------
   * Prevents accidental test.only from being committed
   */
  // forbidOnly: !!process.env.CI,

  /**
   * ----------------------------
   * Retry Configuration
   * ----------------------------
   * Retry logic for CI and local execution
   */
  // retries: process.env.CI ? 2 : 0, // retry on CI
  // retries: 3, // retry locally

  /**
   * ----------------------------
   * Worker Configuration
   * ----------------------------
   * Number of parallel workers for local execution
   */
  // workers: process.env.CI ? 1 : undefined,
  workers: 1, // local worker count

  /**
   * ----------------------------
   * Reporter Configuration
   * ----------------------------
   * Generates HTML report after execution
   */
  reporter: "html",

  /**
   * ----------------------------
   * Shared Test Options
   * ----------------------------
   * Applied to all projects and tests
   */
  use: {

    /**
     * Screenshot & Video Settings
     * (Commented – enable when needed)
     */
    // screenshot: 'only-on-failure',
    // video: 'retain-on-failure',

    /**
     * Base URL Configuration
     * Used for page.goto() shortcuts
     */
    // baseURL: 'http://localhost:3000',

    /**
     * Trace Configuration
     * Controls Playwright tracing
     */
    trace: 'off',

    /**
     * Test ID Attribute
     * Used to locate elements via custom data attribute
     */
    testIdAttribute: "pwd-name",
    // configured-data-set if not found in first retry automatically uses this attribute
  },

  /**
   * ============================
   * Browser Projects Configuration
   * ============================
   * Defines which browsers/devices tests will run on
   */
  projects: [

    /**
     * ----------------------------
     * Chromium Desktop Browser
     * ----------------------------
     */
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      // fullyParallel: true, // browser-specific parallel setting
    },

    /**
     * ----------------------------
     * Firefox Browser (Disabled)
     * ----------------------------
     */
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    /**
     * ----------------------------
     * WebKit / Safari (Disabled)
     * ----------------------------
     */
    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    /**
     * ----------------------------
     * Mobile Viewports (Disabled)
     * ----------------------------
     */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /**
     * ----------------------------
     * Branded Browsers (Disabled)
     * ----------------------------
     */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /**
   * ============================
   * Local Dev Server Configuration
   * ============================
   * Used when app needs to be started before tests
   */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});