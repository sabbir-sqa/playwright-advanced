const { test, expect } = require('@playwright/test');

test('successful login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.fill('input[data-test="username"]', 'standard_user');
  await page.fill('input[type="password"]', 'secret_sauce');
  await page.click('#login-button');
  test.slow();
  await expect(page).toHaveURL(/inventory/);
});
