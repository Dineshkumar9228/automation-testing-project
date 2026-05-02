import { defineConfig } from '@playwright/test';

export default defineConfig({
  retries: 1,
  reporter: [
    ['line'],
    ['allure-playwright'],
    ['html']
  ],
  use: {
    baseURL: 'https://www.saucedemo.com/',
    browserName: 'chromium',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },
});