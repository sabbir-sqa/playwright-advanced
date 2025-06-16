module.exports = {
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: false,
    browserName: 'chromium',
    screenshot: 'only-on-failure',
    video: 'retail-on-failure',
  },
  reporter: [['list'], ['html']],
  trace: 'on-first-retry',
};
