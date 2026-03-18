
import { test } from "@playwright/test";
import dotenv from "dotenv"


let filename =process.env.envFileName || "qa"
//Here if I dont set the environment using the command $env:envFileName it is set as undefined in that scenario by default "qa" environment should be taken

/*Notes:
process.env.envFileName ==> will pickup the environment that I will giva as an input from the terminal
In the terminal
$env:envFileName="prod" */

dotenv.config({path:`Data/${filename}.env`});

test(`Learn to handle ENV data parameterization`, async ({ page }) => {

    await page.goto(process.env.BaseUrl as string)

    await page.locator('//input[@id="username"]').fill(process.env.LF_Username as string);
    await page.locator('//input[@id="password"]').fill(process.env.LF_Password as string);

    await page.waitForTimeout(3000)
    await page.locator(`//input[@class="decorativeSubmit"]`).click();

   // await page.locator(`//a[contains(text(),"CRM")]`).click();

// console.log(process.env.BaseUrl);
// console.log(process.env.LF_Username);
// console.log(process.env.LF_Password);






})


//console.log(process.env.USERNAME);// Expose the USERNAME from your local system// all the environment related data of my local system using process object

/* Command to check the environment:

$env:envFileName

Command to change the environment from terminal:
$env:envFileName="prod*/