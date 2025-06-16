const { test, expect } = require('@playwright/test');

test('click on Register Link and verify URL', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.locator('.ico-register').click();
  await expect(page).toHaveURL(/.*register/);
});
