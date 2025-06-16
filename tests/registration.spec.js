const { test, expect } = require('@playwright/test');

test('verify user can register successfully', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.locator('.ico-register').click();
  await page.locator('input[type="checkbox"]').check();
  // await expect(page).toHaveURL(/.*register/);
  await page.waitForURL('/**register/');

  await page.getByLabel('Male').click();
  await page.locator('#FirstName').fill('John');
  await page.locator('input[name="LastName"]').fill('Doe', { duration: 2000 });

  const email = `sabbir.sqa001+pw${Math.floor(Math.random() * 9999)}@gmail.com`;
  await page.locator('#email').fill(email);

  const company = `ABC Company ${Math.ceil(Math.random() * 900000)}`;
  await page.locator('#Company').fill(company);

  await page.getByLabel('Newsletter').check();

  await page.getByLabel('Password').fill('Asd@12345');
  await page.getByLabel('ConfirmPassword').fill('Asd@12345');

  await page.getByRole('button', { name: 'register-button' }).click();

  await expect(page.getByText('Your registrion completed')).toBeVisible();
});
