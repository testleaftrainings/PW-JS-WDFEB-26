import { test } from "@playwright/test";

test(`Learn window handling concurrent approach`, async ({ page, context }) => {

    await page.goto(`https://www.flipkart.com/`);

    const searchBox = page.locator("[placeholder='Search for Products, Brands and More']").first();

    await searchBox.fill("Phone");

    await searchBox.press("Enter");

    //page.on

    // // listener for an click event
    // const newPage =  context.waitForEvent("page") // Second Event
    // /* work of waitFOrEvent is to capture the page so the await will be resolved only after it has capturer the page */

    // await page.locator(`//div[text()="CMF by Nothing Phone 2 Pro (Light Green, 256 GB)"]`).click();//first event // product title button//parent paage

    // const childPage = await newPage// Second event resolved here


    const [childPage] = await Promise.all([context.waitForEvent("page"), page.getByTestId(`MOBHATZHZYXYRSZ8`).locator("").click()])

    await childPage.waitForLoadState("domcontentloaded")

    console.log(await childPage.title()); // child page title

    console.log(await page.title()); // parent page title title

    await page.bringToFront()

    await page.locator(`//span[text()="Electronics"]`).click()

    await childPage.bringToFront()


})
