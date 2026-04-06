import { LeadPage } from "./04-leadPage";
import { faker } from "@faker-js/faker";

export class CreateLeadPage extends LeadPage {

    async enterMandatoryFields(){
        await this.page.locator(`#createLeadForm_companyName`).fill(faker.company.buzzNoun());
        await this.page.locator(`#createLeadForm_firstName`).fill(faker.person.firstName());
        await this.page.locator(`#createLeadForm_lastName`).fill(faker.person.lastName())
    }

    async clickSubmit(){
        await this.page.locator(`.smallSubmit`).click()
    }
}