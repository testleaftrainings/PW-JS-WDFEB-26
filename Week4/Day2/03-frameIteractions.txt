

import { test } from "@playwright/test";

test(`Interact with frames using URL`, async ({ page }) => {


    await page.goto("https://leafground.com/frame.xhtml")

    const frameUrl = page.frame({ url: "https://leafground.com/default.xhtml" })

    await frameUrl?.locator("#Click").click();
    /* ? => optional chaining
    if(frame){
    await frame.locator("#click").click()
    }else{
        console.log("Frame not found")
    } */
})

test(`Interact with frames using name`, async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml")

    const frameUrl = page.frame({ name: "frame2" })

    await frameUrl?.locator("#Click").click();
    /* ? => optional chaining
    if(frame){
    await frame.locator("#click").click()
    }else{
        console.log("Frame not found")
    } */

    await page.waitForTimeout(3000)
})

//framelocator

test(`Interact with frames using framelocator`, async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml")

    //interact using frameLocator

    const frameRef = page.frameLocator(`[src="default.xhtml"]`)

    await frameRef.locator("#Click").click()
    await page.waitForTimeout(3000) //alt+shift+f
})



//nested frames using framelocator

test.only(`Interact nested frames using frameLocator`, async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml")

    //interact using frameLocator

    const frame_outerframe = page.frameLocator(`[src="page.xhtml"]`) // identified the outer frame our of 3 in the apge

    const frame_innerframe = frame_outerframe.frameLocator('[src="framebutton.xhtml"]')
                          
    await frame_innerframe.locator("#Click").click()

    await page.waitForTimeout(3000) //alt+shift+f => format the document

 //   await page.locator("").click()//main page switch
 //   await frame_outerframe.locator("").click()


})