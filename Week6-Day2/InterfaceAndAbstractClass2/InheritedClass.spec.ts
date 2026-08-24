import { PlaywrightConnection } from "./AbstractClass.spec";


export class Updation extends PlaywrightConnection{
    executeUpdate(): void {
        console.log("DataBase updated to latest version");
    }

}