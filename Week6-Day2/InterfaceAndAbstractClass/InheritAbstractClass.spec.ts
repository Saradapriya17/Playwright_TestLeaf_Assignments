import { CanaraBank } from "./AbstractClass.spec";

export class Amazon extends CanaraBank{
    recordPaymentDetails( status: string ): void {
        console.log(`Payment ${status}`);
    }
}

