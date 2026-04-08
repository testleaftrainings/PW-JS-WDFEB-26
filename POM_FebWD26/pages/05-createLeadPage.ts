import { LeadPage } from "./04-leadPage";
import { faker } from "@faker-js/faker";

export class CreateLeadPage extends LeadPage {
    homePage(): void {
        throw new Error("Method not implemented.");
    }

    async enterMandatoryFields() {
        // await this.page.locator(`#createLeadForm_companyName`).fill(faker.company.buzzNoun());
        // await this.page.locator(`#createLeadForm_firstName`).fill(faker.person.firstName());
        // await this.page.locator(`#createLeadForm_lastName`).fill(faker.person.lastName())

        await this.clearAndFill(`#createLeadForm_companyName`, faker.company.buzzNoun())
        await this.clearAndFill("#createLeadForm_firstName", faker.person.firstName())
        await this.clearAndFill("#createLeadForm_lastName", faker.person.lastName())
    }

    async clickSubmit() {
        await this.page.locator(`.smallSubmit`).click()
    }
}