
//First Steps to Automate

//browser
// browser context(lab) - window (invidual isolated profile + incognito window//Store any data)
// page

/* const browser = chromium.launch()
const context = browser.newContext()
const page = context.newPage() */



import { chromium, test } from "@playwright/test"

test(`Test to launch a browser`, async ({ page }) => { // page fixture will handle the opening and closing of the browser

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    //  await page.locator(`[id="username"]`).fill(`demoCSR2`);

    //  await page.locator(`#username`).fill(`demoCSR2`);

 //   await page.locator(`input`).nth(0).fill(`demoCSR2`)

 await page.locator(`input`).first().fill(`demoCSR2`)

    //  await page.locator(`[id="password"]`).fill(`crmsfa`);

    //     await page.locator(`#password`).fill(`crmsfa`);

    await page.locator(`input`).nth(1).fill(`crmsfa`)

    //   await page.locator(`[class="decorativeSubmit"]`).click()

    //       await page.locator('.decorativeSubmit').click();

  //  await page.locator(`input`).nth(2).click()

  await page.locator(`input`).last().click()

    await page.waitForTimeout(3000)








})

