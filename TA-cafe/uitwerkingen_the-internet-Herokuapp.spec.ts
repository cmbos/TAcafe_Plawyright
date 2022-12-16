import { test, expect } from '@playwright/test';

test.describe('Basis element interactie op the-internet-herokuapp.com', () => {

    test('Oefening 1: Inloggen met valide credentials', async ({ page }) => {
        // Navigeer naar https://the-internet.herokuapp.com/login
        await page.goto('https://the-internet.herokuapp.com/login');

        // Log in met de genoemde credentials
        await page.locator('id=username').fill('tomsmith');
        await page.locator('id=password').fill('SuperSecretPassword!');
        await page.locator('css=button').click();

        // Voeg een controle toe op de tekst "You logged into a secure area!"
        await expect(page.locator('id=flash')).toContainText('You logged into a secure area!');
    });

    test('Oefening 2: Klikken op checkboxes', async ({ page }) => {
        // Navigeer naar https://the-internet.herokuapp.com/checkboxes
        await page.goto('https://the-internet.herokuapp.com/checkboxes');

        // Vink checkbox 1 aan en 2 uit
        await page.check('xpath=//input[1]');
        await page.uncheck('xpath=//input[2]');

        // Voeg een controle toe voor beide checkboxes
        expect(await page.isChecked('xpath=//input[1]')).toBe(true);
        expect(await page.isChecked('xpath=//input[2]')).toBe(false);
    });

    test('Oefening 3: Een optie in de drowdown selecteren', async ({ page }) => {
        // Navigeer naar https://the-internet.herokuapp.com/dropdown
        await page.goto('https://the-internet.herokuapp.com/dropdown');

        // Selecteer Option 2 uit de dropdown
        await page.selectOption('id=dropdown', { label: 'Option 1' });

        // Voeg een controle toe voor de gekozen waarde in de dropdown
        const waarde = await page.$eval('#dropdown', sel => sel.value);
        expect(waarde).toBe('1');
    });

    test('Oefening 4: Een modal popup-window sluiten', async ({ page }) => {
        // Navigeer naar https://the-internet.herokuapp.com/entry_ad
        await page.goto('https://the-internet.herokuapp.com/entry_ad')

        // Er verschijnt een modal pop-up venster, sluit deze door op de link 'Close' te klikken
        await page.locator('css=#modal >> text=Close').click();

        // Voeg een controle toe voor de modal window, deze moet niet meer zichtbaar zijn
        await expect(page.locator('css=#modal >> text=Close')).not.toBeVisible();
    });

    test('Oefening 5: Hover over een element', async ({ page }) => {
        // Navigeer naar https://the-internet.herokuapp.com/hovers
        await page.goto('https://the-internet.herokuapp.com/hovers');

        // Hover met de muis over de tweede afbeelding
        await page.hover('xpath=(//div[@class="figure"]/img)[2]');

        // Voeg een controle toe voor de text "name: user2"
        await expect(page.locator('text=name: user2')).toBeVisible();
    });

});