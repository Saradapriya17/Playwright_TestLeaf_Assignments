import { DatabaseConnection } from "./Interface.spec";

export abstract class PlaywrightConnection implements DatabaseConnection{
    connect(): void {
        console.log("Database connected");
    }
    disconnect(): void {
        console.log("Database disconnected");
    }
    abstract executeUpdate(): void ;

}