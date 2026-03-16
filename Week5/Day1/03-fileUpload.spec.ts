import { test } from "@playwright/test";
import path from "path";

test(`Learn File Upload using input tag and type attribute in DOM`, async ({ page }) => {

    await page.goto("https://leafground.com/file.xhtml");

    // const uploadFile =  page.locator(`(//input[@type="file"])[1]`);// Single file upload

    const uploadFile = page.locator(`(//input[@type="file"])[2]`); // Mutiple file upload

    //   await uploadFile.setInputFiles(path.join(__dirname,`../../../Data/Qeagle-Logo.png`))

    await uploadFile.setInputFiles([path.join(__dirname, `../../../Data/Qeagle-Logo.png`), path.join(__dirname, `../../../Data/TestLeaf_Logo.png`)])

    await page.waitForTimeout(3000);

})


test.only(`Learn File Upload without Type=file attribute and without input tag`,async ({page}) => {
    

    await page.goto(`https://the-internet.herokuapp.com/upload`);

    const filePromise = page.waitForEvent("filechooser")

    await page.locator(`[id="drag-drop-upload"]`).click();

    const fileUpload = await filePromise

    await fileUpload.setFiles("Data/Qeagle-Logo.png")

    await page.waitForTimeout(3000)


})


/* Classroom Activity:
 1. Upload multiple files from the Data folder to the application where you dont have type = file
  https://the-internet.herokuapp.com/upload usinf absolute path */