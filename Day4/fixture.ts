
import { test as baseT} from "@playwright/test";


//baseT === test is donr inorder avoid confusion with same name "test"

export const test = baseT.extend({

    page: async ({ browser }, use) => {
        const page = await browser.newPage()

        await page.goto(`http://leaftaps.com/opentaps/control/main`)

        await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`);

        await page.locator(`//input[@id="password"]`).fill(`crmsfa`);

        await page.locator(`//input[@class="decorativeSubmit"]`).click();

        await use(page) // Line seperates the start and end of the test execution

        //await page.close()
    }

})