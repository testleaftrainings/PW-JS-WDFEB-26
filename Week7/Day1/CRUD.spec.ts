import { expect, test } from "@playwright/test";
import { createLead, fetchLead, generateToken } from "./apiutility";

test.use({storageState:"Data/login_SF.json"})

let lname : any

test(`Playwright locators`, async ({ page,request }) => {

    await generateToken(request); // Named Function is called to make an API call for generation of token // Step1

    await createLead(request) // Named Function is called to make an API call for creation of lead // Step2

    lname = await fetchLead(request) // Named Function is called to make an API call to retreive the lead info // Step3 

    await page.goto('https://testleaf22-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home');

  // LastName: 'RavindranPlaywright300326' //because we are using return keyword in out async named function the last name value will be returned / retreived at the time of calling
  //  await page.goto('https://login.salesforce.com/?locale=in');  

    //  await page.getByRole(`textbox`, { name: "Username" }).fill(`ravindran.ramdas@testleaf.com`) // Accessbility tree
  
    // await page.getByRole(`textbox`, { name: "Password" }).fill(`Ravisalesplay#1234`)
    // await page.getByRole(`button`, { name: "Log In" }).click();

   // await page.getByRole(`button`,{name:"App Launcher"}).click();

   await page.getByTitle("App Launcher",{exact:true}).click();

   await page.getByRole("button",{name:"View All Applications"}).click();

   //await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Leads");
   await page.getByRole("combobox",{name:"Search apps or items..."}).fill("Leads")

   await page.getByText("Leads",{exact:true}).click();

    const searchBox = page.getByPlaceholder("Search this list...");

    await searchBox.fill(lname);

    await searchBox.press("Enter")


      await page.waitForTimeout(3000)
})





