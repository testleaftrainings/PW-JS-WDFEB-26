

import { test } from "@playwright/test";

test(`Test to handle alerts`, async ({ page }) => {

    await page.goto("https://leafground.com/alert.xhtml");

    page.on("dialog", async (alert) => {
        //page.on os an event listener to listen for user interaction like clicks to capture the alert

        /* Step1 : alert local variable captures the simple alert object */

        const message = alert.message(); // TO get the message of the alert
        console.log(message);

        const alertType = alert.type(); // TO get the type of alert
        console.log(alertType);

        if (alertType==="confirm") {
            await alert.accept();
        }else if(alertType==="prompt"){
            await alert.accept("Testleaf")
        }else
        

     //   alert.dismiss(); // To click "cancel" button to dismiss

         await alert.accept(); //To click "ok" button to accept the alert

    })


    await page.locator("(//span[text()='Show'])[1]").click() // simple alert click event to invoke an alert

    await page.waitForTimeout(3000)

    await page.locator("(//span[text()='Show'])[2]").click() // confirm alert //click event to invoke an alert

    await page.waitForTimeout(3000)

    await page.locator("(//span[text()='Show'])[5]").click() // prompt alert //click event to invoke an alert

    await page.waitForTimeout(3000)


})