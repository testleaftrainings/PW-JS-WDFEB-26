import { test } from "@playwright/test";
import { ViewLeadPage } from "../pages/06-viewLeadPage";
import dotenv from "dotenv";
import data from "../Data/login.json"


dotenv.config({path:"Data/prod.env"})

test(`Login page using POM`, async ({ page }) => {


  const vp = new ViewLeadPage(page) // p1234123233141 -> blank page
  await vp.loadurl(process.env.BaseUrl as string);
  await vp.enterCredentials(data[0].Username, data[0].Password);
  await vp.clickLogin()
  await vp.clickCRM()
  await vp.clickLead()
  await vp.clickCreateLead()
  await vp.enterMandatoryFields()
  await vp.clickSubmit()
  await vp.getLeadName()





  //await page.waitForTimeout(3000) // This is just to view the completion of the process


  //  await login.closeBrowser()




})