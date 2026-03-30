import { expect, test } from "@playwright/test";

test.only(`Visual regression testing`, async ({ page }) => {

    await page.goto("https://www.flipkart.com");

    const ss = await page.screenshot({path:"Screenshots/current.png"}); // baseline image

    expect(ss).toMatchSnapshot()
})


test(`Visual regression testing for a webelemnt`, async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    const ele = page.locator(`[id="username"]`)

    const ss1 = await ele.screenshot(); // baseline image

    expect(ss1).toMatchSnapshot()
})