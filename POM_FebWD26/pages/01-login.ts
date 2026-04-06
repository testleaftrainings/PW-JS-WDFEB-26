
/* Actions performed for a login page :
1. Loading url
2. Enter Credentials
3. Click Login button */

import { Page } from "@playwright/test";
import {locators } from "../pages/locators";

export class LoginPage {

    // selectors = {
    //     "usernameField": "#username",
    //     "pwdField": "#password",
    //     "loginSubmit":".decorativeSubmit"
    // }

    page: Page // GLobal variable //property

    constructor(Lpage: Page) { //p1234123233141 -> blank page// Lpage is the page reference got through constructor parametrization
        this.page = Lpage
    }

    async loadurl(url: string) { // first actionability
        await this.page.goto(url)
    }


    async enterCredentials(username: string, password: string) { // second actionability
        await this.page.locator(locators.usernameField).fill(username)
        await this.page.locator(locators.pwdField).fill(password)
    }

    async clickLogin() { // third actionability
        await this.page.locator(locators.loginSubmit).click();
        await this.page.waitForTimeout(3000) // demo purpsoe
    }



}


