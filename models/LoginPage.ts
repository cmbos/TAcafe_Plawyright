import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    page: Page;
    popupButton: Locator;
    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    nameDisplayed: Locator;
    errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popupButton = page.locator("id=js-first-screen-accept-all-button");
        this.usernameInput = page.locator("id=login_email");
        this.passwordInput = page.locator("id=login_password");
        this.loginButton = page.locator("css=[data-test='login-form-submit']")
        this.nameDisplayed = page.locator("xpath=//label[@data-test='account-link']/strong[text()='Christian']");
        this.errorMessage = page.locator("css=[data-test='alert-item']")
    }

    async load() {
        await this.page.goto("https://www.bol.com/nl/account/login.html");
        await this.popupButton.click();
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async checkLoggedIn(expectedName: string) {
        await expect(this.nameDisplayed).toContainText(expectedName);
    }

    async checkErrorMessage(expectedMessage: string) {
        await expect(this.errorMessage).toContainText(expectedMessage);
    }
}
