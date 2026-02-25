    
    //First Steps to Automate

    //browser
    // browser context(lab) - window (invidual isolated profile + incognito window//Store any data)
    // page

    /* const browser = chromium.launch()
    const context = browser.newContext()
    const page = context.newPage() */



    import { chromium,test } from "@playwright/test"

    test(`Test to launch a browser`, async({page}) => { // page fixture will handle the opening and closing of the browser

    // const browser = await chromium.launch()
    // const context = await browser.newContext()
    // const page =  await context.newPage()

    await page.goto(`http://leaftaps.com/opentaps/control/main`);



    



    } )

