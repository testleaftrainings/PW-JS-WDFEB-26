
import { test } from "@playwright/test";
import  credentials  from "../../../Data/login.json";

test.describe.serial("Test to execute the scripts in serials mode",async () => {
    
for( let data of credentials){

test(`Learn to handle JSON data parameterization ${data.TCaseId}`, async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main')

    await page.locator('//input[@id="username"]').fill(data.Username);
    await page.locator('//input[@id="password"]').fill(data.Password);

    await page.waitForTimeout(3000)
    await page.locator(`//input[@class="decorativeSubmit"]`).click();

   // await page.locator(`//a[contains(text(),"CRM")]`).click();

    // console.log(credentials[0].Username); // demosalesmanager
    // console.log(credentials[0].Password); // crmsfa

    // console.log(credentials[1].Username); // democsr2
    // console.log(credentials[1].Password); // crmsfa


})
}

})
// Internally inside a for of loop :

// First Iteration :
// --------------

// test(`Learn to handle JSON data parameterization`, async ({ page }) => {

//     await page.goto('http://leaftaps.com/opentaps/control/main')

//     await page.locator('//input[@id="username"]').fill(data.Username); //demosalesmanager
//     await page.locator('//input[@id="password"]').fill(data.Password); // crmsfa

//     await page.waitForTimeout(3000)
//     await page.locator(`//input[@class="decorativeSubmit"]`).click();

//     await page.locator(`//a[contains(text(),"CRM")]`).click();

//     // console.log(credentials[0].Username); // demosalesmanager
//     // console.log(credentials[0].Password); // crmsfa

//     // console.log(credentials[1].Username); // democsr2
//     // console.log(credentials[1].Password); // crmsfa  



// })

// Second Iteration :
// -----------------

// test(`Learn to handle JSON data parameterization`, async ({ page }) => {

//     await page.goto('http://leaftaps.com/opentaps/control/main')

//     await page.locator('//input[@id="username"]').fill(data.Username); //democsr2
//     await page.locator('//input[@id="password"]').fill(data.Password); // crmsfa

//     await page.waitForTimeout(3000)
//     await page.locator(`//input[@class="decorativeSubmit"]`).click();

//     await page.locator(`//a[contains(text(),"CRM")]`).click();

//     // console.log(credentials[0].Username); // demosalesmanager
//     // console.log(credentials[0].Password); // crmsfa

//     // console.log(credentials[1].Username); // democsr2
//     // console.log(credentials[1].Password); // crmsfa
    
    



// })
