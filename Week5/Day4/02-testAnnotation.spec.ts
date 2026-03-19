
import { expect, test } from "@playwright/test";

test.describe.serial("Serial execution",async () => {

test(`Learn test annotation test.skip`, async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('//input[@id="username"]').fill('Demosalesmanager');
    await page.locator('//input[@id="password"]').fill('crmsfa');
    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click();

    await page.waitForTimeout(3000)//demo purpose
})

test(`Learn test annotation test.fixme`, async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main')

    await page.locator('//input[@id="username"]').fill('Demosalesmanager');
    await page.locator('//input[@id="password"]').fill('crmsfa');
    await page.locator(`//input[@class="decorativeSubmit"]`).click();
    await page.locator(`//a[contains(text(),"CRM")]`).click();
    await page.waitForTimeout(3000)//demo purpose
})

test.fail(`Learn test annotation test.fail`, async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main')

    await page.locator('//input[@id="username"]').fill('Demosalesmanager');
    await page.locator('//input[@id="password"]').fill('crmsfa');
    await expect(page.locator(`//input[@class="decorativeSubmit"]`)).toBeDisabled();
    await page.locator(`//input[@class="decorativeSubmit"]`).click();
    await page.locator(`//a[contains(text(),"CRM")]`).click();
    await page.waitForTimeout(3000)//demo purpose
})

test(`Learn test annotation test.slow`, async ({ page }) => {
    test.slow()
     await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.locator('//input[@id="username"]').fill('Demosalesmanager');
    await page.locator('//input[@id="password"]').fill('crmsfa');
        await page.locator(`//input[@class=""]`).click();
    await page.locator(`//a[contains(text(),"CRM")]`).click();
    await page.waitForTimeout(3000)//demo purpose
})

})