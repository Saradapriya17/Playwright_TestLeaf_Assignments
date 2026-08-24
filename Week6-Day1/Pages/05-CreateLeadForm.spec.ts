import { loginProcess } from "./01-LoginPage.spec";

export class leadForm extends loginProcess{

    async fillLeadForm(){

        await this.page.locator("#createLeadForm_companyName").fill("Testleaf");
        await this.page.locator("#createLeadForm_firstName").fill("Sara");
        await this.page.locator("#createLeadForm_lastName").fill("Priya");
        await this.page.selectOption("#createLeadForm_dataSourceId",{label:"Direct Mail"});
        await this.page.selectOption("#createLeadForm_marketingCampaignId",{value:"DEMO_MKTG_CAMP"});
        await this.page.selectOption("#createLeadForm_industryEnumId",{index:6});
        await this.page.locator("#createLeadForm_currencyUomId").selectOption("INR");
        await this.page.locator("#createLeadForm_personalTitle").fill("Ms");
        await this.page.locator("#createLeadForm_generalProfTitle").fill("Engg");
        await this.page.locator("#createLeadForm_annualRevenue").fill("200000");
        await this.page.locator("#createLeadForm_departmentName").fill("IT");
        await this.page.locator("#createLeadForm_primaryPhoneNumber").fill("1234567890");
        await this.page.locator('//input[@value="Create Lead"]').click();
    }
}