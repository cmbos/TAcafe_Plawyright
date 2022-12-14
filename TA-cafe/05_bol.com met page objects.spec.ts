import { test, expect, request } from '@playwright/test';
import { LoginPage } from '../models/LoginPage';

test.describe('Bol.com - login scenario\'s', () => {

    test('TC-01: Inloggen met juiste credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.load();
        await loginPage.login("christian.bos@gmail.com", "q1w2e3r4T%");
        await loginPage.checkLoggedIn("Christian");
    });

    test('TC-02: Inloggen met foutieve username', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.load();
        await loginPage.login("foutief.adres@gmail.com", "W@chtwoord!");
        await loginPage.checkErrorMessage("De combinatie van e-mailadres en wachtwoord is niet geldig.")
    });

    test('TC-03: Inloggen met foutief wachtwoord', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.load();
        await loginPage.login("christian.bos@gmail.com", "W@chtwoord!");
        await loginPage.checkErrorMessage("De combinatie van e-mailadres en wachtwoord is niet geldig.")
    });
});