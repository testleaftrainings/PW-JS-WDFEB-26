import { WelcomePage } from "./02-welcomePage";

export class HomePage extends WelcomePage {

    async clickLead(){
         await this.page.locator(`//a[text()="Leads"]`).click();
    }
}