const { test, expect } = require('@playwright/test');

test('verify homepage title and take screenshot', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.screenshot({ path: '/screenshots/homepage.png' });
  const pageTitle = await page.title();
  expect(pageTitle).toBe('nopCommerce demo store. Home page title');
});
