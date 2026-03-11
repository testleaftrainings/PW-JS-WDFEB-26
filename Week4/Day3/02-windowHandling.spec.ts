    // //browser
    // // browser context(lab) - window (invidual isolated profile + incognito window//Store any data)
    // // page

    // /* const browser = chromium.launch()
    // const context = browser.newContext()
    // const page = context.newPage() */



    // import { chromium,test } from "@playwright/test"

    // test(`Test to launch a browser`, async() => { // => fat arrow // it is called asynchronous arrow function

    // const browser = await chromium.launch({headless:false})
    // const context = await browser.newContext() // window => context(google profile)
    // const page1 =  await context.newPage()
    // const page2 = await context.newPage()
    // const page3 = await context.newPage()

    // await page1.goto(`http://leaftaps.com/opentaps/control/main`)

    // await page2.goto(`https://www.flipkart.com/`);

    // await page3.goto(`https://www.amazon.in/`)

   



    // /* In await it returns promise 
    // The 3 stages of promise:
    // 1. Pending
    // 2. Resolve
    // 3. Rejected  */

    // } )

    // /* Notes :
    // headed => with UI
    // headless => without UI */

    import { test } from "@playwright/test";

    test(`Learn window handling sequential`,async ({page,context}) => {

        await page.goto(`https://www.flipkart.com/`);

        const searchBox = page.locator("[placeholder='Search for Products, Brands and More']").first();
        
        await searchBox.fill("Phone");

        await searchBox.press("Enter");
            
        const newPage =  context.waitForEvent("page") // listener for an click event

 /* work of waitFOrEvent is to capture the page so the await will be resolved only after it has capturer the page */

        await page.locator(`//div[text()='MOTOROLA Edge 70 Fusion (Pantone BLUE SURF, 128 GB)']`).click();

        const childPage = await newPage

        console.log(await childPage.title());

        console.log(await page.title());  
        




    })