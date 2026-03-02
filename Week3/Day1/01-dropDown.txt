
import { test } from "@playwright/test";

test(`Learn to handle dropdowns`, async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main')

    await page.locator('//input[@id="username"]').fill('Demosalesmanager');
    await page.locator('//input[@id="password"]').fill('crmsfa');
    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click();

    await page.locator(`//a[text()="Leads"]`).click();

    await page.locator(`//a[text()="Create Lead"]`).click();

    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(`Testleaf`);

    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(`Ravindran`);

    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill(`R`); // text box, button.. 

  //  await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{value:"LEAD_DIRECTMAIL"})    //dropdown element that is present in select tag
  //  await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{label:"Direct Mail"})    //dropdown element that is present in select tag
    await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{index:3})    //dropdown element that is present in select tag


  /* Notes:
Step1 : Identify the drop down from the page
Step2 :  Identify the dropdown value through value attribute, label, index*/

    await page.waitForTimeout(3000)

})
