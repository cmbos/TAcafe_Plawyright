import { test, expect } from '@playwright/test';

test('TC-04: Controleer zoekresultaat', async ({ page }) => {
    await page.goto('https://www.bol.com/nl/nl/');
    await page.locator('#js-first-screen-accept-all-button').click();
    await expect.soft(page).toHaveTitle('De winkel van ons allemaal | bol.com');
    await page.locator('[data-test="search_input_trigger"]').fill('trainingsachtbaan');
    await page.locator('[data-test="search-button"]').click();
    await expect(page.locator('div[class="product-subtitle"]').first()).toHaveText('Eenvoudig trainen met blijvend resultaat');
    await expect(page.locator('[data-test="login-link"]')).toBeVisible();
  });