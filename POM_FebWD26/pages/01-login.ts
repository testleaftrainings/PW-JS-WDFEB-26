
/* Actions performed for a login page :
1. Loading url
2. Enter Credentials
3. Click Login button */

import { Page } from "@playwright/test";
import {locators } from "../pages/locators";
import {PWWrapper} from "../utility/playwrightWrapper";

export class LoginPage extends PWWrapper{
    homePage(): void {
        
    }
    // selectors = {
    //     "usernameField": "#username",
    //     "pwdField": "#password",
    //     "loginSubmit":".decorativeSubmit"
    // }

    // page: Page // GLobal variable //property

    // constructor(Lpage: Page) { //p1234123233141 -> blank page// Lpage is the page reference got through constructor parametrization
    //     this.page = Lpage
    // }

    async loadurl(url: string) { // first actionability
        await this.page.goto(url)
        return this
        
    }

    async enterCredentials(username: string, password: string) { // second actionability
        // await this.page.locator(locators.usernameField).fill(username)
        // await this.page.locator(locators.pwdField).fill(password)

        // await this.clearAndFill(locators.usernameField,username) // css locators
       // await this.clearAndFill(locators.pwdField,password) // css locators

        await this.clearAndFill(this.selectors.unField(),username) // playwright locators
        await this.clearAndFill(this.selectors.pwField(),password) // playwright locators
        return this
    }

    async clickLogin() { // third actionability
     //   await this.page.locator(locators.loginSubmit).click();
     await this.selectors.lgtbn().click()
        await this.page.waitForTimeout(3000) // demo purpsoe
        return this
    }

selectors = {
    //key:value (arrow function which returns the locator)
unField: ()=>this.page.getByRole('textbox',{name:"username"}),
pwField: () => this.page.getByRole('textbox',{name:"password"}),

lgtbn : ()=>this.page.getByRole('button',{name:"Login"})

}

}


