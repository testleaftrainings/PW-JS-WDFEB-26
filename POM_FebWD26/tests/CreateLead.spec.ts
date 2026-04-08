import { test } from "@playwright/test";
import { ViewLeadPage } from "../pages/06-viewLeadPage";
import { HomePage } from "../pages/03-homePage";
import { WelcomePage } from "../pages/02-welcomePage";
import { CreateLeadPage } from "../pages/05-createLeadPage";
import { LeadPage } from "../pages/04-leadPage";

import dotenv from "dotenv";
import data from "../Data/login.json"
import { test1 } from "../utility/customFixtures";


dotenv.config({ path: "Data/prod.env" })

test1(`Login page using POM`, async ({ loginfix,welfix,homfix,leadfix,crleadfix,vpfix }) => { //loginfix has both page + object of class

  //LoginPage
  //const lop = new LoginPage(page) // p1234123233141 -> blank page
  (await (await loginfix.loadurl(process.env.BaseUrl as string)).enterCredentials(data[0].Username, data[0].Password)).clickLogin()
 // await loginfix.enterCredentials(data[0].Username, data[0].Password);
 // await loginfix.clickLogin()

  //WelcomePage
 // const wp = new WelcomePage(page) // p1234123233141 -> blank page
  await welfix.clickCRM()

  //HomePage
//  const hp = new HomePage(page) // p1234123233141 -> blank page
  await homfix.clickLead()

  //LeadPage
//  const lp = new LeadPage(page) // p1234123233141 -> blank page
  await leadfix.clickCreateLead()

  //CreateLeadPage
 // const clp = new CreateLeadPage(page) // p1234123233141 -> blank page
  await crleadfix.enterMandatoryFields()
  await crleadfix.clickSubmit()

  //ViewLeadPage
  // const vp = new ViewLeadPage(page) // p1234123233141 -> blank page
  await vpfix.getLeadName()

 // await page.waitForTimeout(3000) // This is just to view the completion of the process


  //  await login.closeBrowser()




})