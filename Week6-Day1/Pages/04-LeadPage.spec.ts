import { loginProcess } from "./01-LoginPage.spec";

export class leadPage extends loginProcess{

    async createLead(){
        await this.page.getByRole("link",{name: "Create Lead", exact: true}).click();
    }
}