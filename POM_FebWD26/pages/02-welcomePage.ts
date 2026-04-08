import { LoginPage } from "./01-login";
import { locators  } from "../pages/locators";

export class WelcomePage extends LoginPage  {

    async clickCRM(){
         await this.page.locator(locators.crmClick).click();
         return this
    }

   
}