import { test, expect } from '@playwright/test';

test('TC-02: Inloggen op bol.com', async ({ page }) => {
    await page.goto('https://www.bol.com/nl/account/login.html');
    await page.locator('#js-first-screen-accept-all-button').click();
    await page.locator('[data-test="login-form-email"]').fill('mijn@emailadres.nl');
    await page.locator('[data-test="login-form-password"]').fill('12345')
    await page.locator('[data-test="login-form-submit"]').click();
});

test('TC-03: New role locators', async ({ page }) => {
    await page.goto('https://www.bol.com/nl/account/login.html');
    await page.locator('#js-first-screen-accept-all-button').click();
    await page.getByLabel('E-mailadres').fill('mijn@emailadres.nl');
    await page.getByPlaceholder('Wachtwoord').fill('12345')
    await page.getByRole('button', { name: 'Inloggen' }).click();
});