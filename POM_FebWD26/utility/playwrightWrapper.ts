import { Locator, Page } from "@playwright/test"


export abstract class PWWrapper{

        page: Page // GLobal variable //property

    constructor(Lpage: Page) { //p1234123233141 -> blank page// Lpage is the page reference got through constructor parametrization
        this.page = Lpage
    }

    abstract homePage() : void

    // async clearAndFill(locator:string,data:string){
    //      await this.page.locator(locator).clear()
    //      await this.page.locator(locator).fill(data)

     async clearAndFill(locator: string | Locator, data: string) {

    const element = typeof locator === "string"
        ? this.page.locator(locator)   // CSS/XPath
        : locator                      // Playwright Locator

    await element.clear()
    await element.fill(data)
}
}