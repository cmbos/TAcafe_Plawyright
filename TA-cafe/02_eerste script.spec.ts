import { test, expect } from '@playwright/test';

test('TC-01: Navigeer naar bol.com', async ({ page }) => {
  await page.goto('https://www.bol.com/nl/nl/');
}); 