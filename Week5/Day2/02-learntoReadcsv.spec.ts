
import { test } from "@playwright/test";
import {parse} from "csv-parse/sync"
import fs from "fs"

test.describe.serial("Test to execute the scripts in serials mode",async () => {

   let records : any[] = parse(fs.readFileSync("Data/login.csv"),{columns:true,skip_empty_lines:true})
    
for( let data of records){

test(`Learn to handle CSV data parameterization ${data.tcid}`, async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main')

    await page.locator('//input[@id="username"]').fill(data.username);
    await page.locator('//input[@id="password"]').fill(data.password);

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
