import { test } from "@playwright/test";

test(`Learn window handling concurrent approach`, async ({ page, context }) => {

    await page.goto(`https://www.flipkart.com/`);

    const searchBox = page.locator("[placeholder='Search for Products, Brands and More']").first();

    await searchBox.fill("Phone");

    await searchBox.press("Enter");

    //like page.on listener for new page event to handle alerts.

    // listener for an click event

    // const newPage =  context.waitForEvent("page") // Second Event
    // /* work of waitFOrEvent is to capture the page so the await will be resolved only after it has capturer the page */

    // await page.locator(`//div[text()="CMF by Nothing Phone 2 Pro (Light Green, 256 GB)"]`).click();//first event // product title button//parent paage

    // const childPage = await newPage// Second event resolved here

    const [childPage] = await Promise.all([context.waitForEvent("page"),page.locator(`//div[text()="CMF by Nothing Phone 2 Pro (Light Green, 256 GB)"]`).click()])  

    //Array Destructuring method to capture the child page

    await childPage.waitForLoadState("domcontentloaded")

    console.log(await childPage.title()); // child page title

    console.log(await page.title()); // parent page title title

    await page.bringToFront()

    await page.locator(`//span[text()="Electronics"]`).click()

    await childPage.bringToFront()


})


test.only("Mutiple pages window handling",async ({page,context}) => {
    
    await page.goto("https://leafground.com/window.xhtml");  

    await Promise.all([context.waitForEvent("page"),page.getByText("Open Multiple",{exact:true}).click()]) 

    //const[parentPage,childPage1,childPage2] = context.pages() // array destructuring --> method one most used

    await page.waitForLoadState("domcontentloaded");

    // console.log(await parentPage.title());
    // console.log(await childPage1.title());
    // console.log(await childPage2.title());

     const allPages = context.pages(); //Normal method to capture all the pages in an array and then we can use for loop or any other method to get the title of each page

     console.log(await allPages[0].title());//parent page
     console.log(await allPages[1].title());//child page1
      console.log(await allPages[2].title());//child page2       
    


})