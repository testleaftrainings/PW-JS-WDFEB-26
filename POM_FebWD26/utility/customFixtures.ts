
import { test as baseTest } from "@playwright/test"
import { LoginPage } from "../pages/01-login"
import { WelcomePage } from "../pages/02-welcomePage"
import { HomePage } from "../pages/03-homePage"
import { LeadPage } from "../pages/04-leadPage"
import { CreateLeadPage } from "../pages/05-createLeadPage"
import { ViewLeadPage } from "../pages/06-viewLeadPage"


//test1 is the new test runner instead of test 
//const test1 = {test(existing test features)=>page fixture + extra features(creation of object)}=> object fixture
// inorder to use all he features of your existing "test" functionality we have create an alias name for test
type myFixture = {
    loginfix: LoginPage
    welfix: WelcomePage
    homfix: HomePage
    leadfix: LeadPage
    crleadfix:CreateLeadPage
    vpfix: ViewLeadPage
}

export const test1 = baseTest.extend<myFixture>({

    //key : value
    loginfix: async ({ page }, use) => {
        const lop = new LoginPage(page)
        await use(lop) //Here the use is a divider before the use all the features will be cosumed
    },
    welfix: async ({ page }, use) => {
        const wp = new WelcomePage(page)
        await use(wp)
    },
    homfix: async ({ page }, use) => {
        const hp = new HomePage(page)
        await use(hp)
    },
    leadfix: async ({ page }, use) => {
        const lp = new LeadPage(page)
        await use(lp)
    },
    crleadfix: async ({ page }, use) => {
       const clp = new CreateLeadPage(page) 
        await use(clp)
    },
    vpfix: async ({ page }, use) => {
        const vp = new ViewLeadPage(page)
        await use(vp)
    }

})