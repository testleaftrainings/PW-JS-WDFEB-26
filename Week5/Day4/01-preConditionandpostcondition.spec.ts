
import { test } from "@playwright/test";
import { parse } from "csv-parse/sync"
import fs from "fs"

test.describe.serial("Test to execute the scripts in serials mode", async () => {

    let records: any[]

    //test.berforeAll() => data connectivity 
    test.beforeAll(`Read CSV data`, async () => {
        console.log(`beforAll() block executed once before execution of ll the test modules`);
        records = parse(fs.readFileSync("Data/login.csv"), { columns: true, skip_empty_lines: true }) // records => let declaration hence block scoped
    })


    test.beforeEach(`Login functionality `, async ({ page }) => {

        console.log(`beforeEach() block executed before execution of each module`);
        await page.goto('http://leaftaps.com/opentaps/control/main');
        await page.locator('//input[@id="username"]').fill(records[0].username);
        await page.locator('//input[@id="password"]').fill(records[0].password);
        await page.waitForTimeout(3000)
        await page.locator(`//input[@class="decorativeSubmit"]`).click();
        await page.locator(`//a[contains(text(),"CRM")]`).click();

    })


    test("Lead Module", async ({ page }) => {
        console.log("Executing the lead module");
        await page.locator(`//a[text()="Create Lead"]`).click()
        await page.waitForTimeout(3000)

    })

    test("Account Module", async ({ page }) => {
        console.log("Executing the Account module");
        await page.locator(`//a[text()="Create Account"]`).click()
        await page.waitForTimeout(3000)

    })

    test.afterEach("Fetch the test status of each test", async ({ }, testinfo) => {
        console.log(`Executing after each test script`);
        console.log(testinfo.status);
        console.log(testinfo.title);
    })

    test.afterAll("Upload all the attachments", async () => {
        console.log(`Executed after completion of all the test modules`);
        console.log(`The report and screenshot are uploaded in the test management to JIRA`);

    })
})



