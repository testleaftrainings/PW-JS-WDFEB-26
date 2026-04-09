//import { test } from "@playwright/test";

import { test } from "./fixture";


//normal test keyword has page fixture but a custom fixture will have extended featutes of existing test and page fixture
test(`Using custom fixture`,async ({page}) => {

    // await page.goto(`http://leaftaps.com/opentaps/control/main`)

    //     await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`);

    //     await page.locator(`//input[@id="password"]`).fill(`crmsfa`);

    //     await page.locator(`//input[@class="decorativeSubmit"]`).click();
    
console.log(await page.title()); // 


})