import { test } from "@playwright/test";
import { LoginPage } from "./02-login";

test(`Login page using POM`,async ({page}) => {
    

    const login = new LoginPage(page);
    await login.loadurl("http://leaftaps.com/opentaps/control/main")
    await login.enterCredentials()
    await login.clickLogin()

  //  await login.closeBrowser()




})