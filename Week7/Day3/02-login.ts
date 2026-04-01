
/* Actions performed for a login page :
1. Loading url
2. Enter Credentials
3. Click Login button */

import { chromium, Page } from "@playwright/test";

export class LoginPage { 

    page:Page // GLobal variable //property

    constructor(Lpage:Page){ // Lpage is the page reference got through constructor parametrization
        this.page=Lpage
    }

    async loadurl(url: string) { // first actionability
        await this.page.goto(url)
    }


    async enterCredentials() { // second actionability
        await this.page.locator("#username").fill("demosalesmanager")
        await this.page.locator("#password").fill("crmsfa")
    }

    async clickLogin() { // third actionability
         await this.page.locator(".decorativeSubmit").click();
         await this .page.waitForTimeout(3000) // demo purpsoe
    }

    async closeBrowser(){
        await this.page.close()
    }
}


