import {Payments} from "./InterfaceForAbstractClass.spec";

export abstract class CanaraBank implements Payments{
    cashOnDelivery(): void {
        console.log("Cash on delivery");
    }
    upiPayments(): void {
        console.log("UPI payment");
    }
    cardPayments(): void {
        console.log("Card Payment");
    }
    internetBanking(): void {
        console.log("Internet banking");
    }
    abstract recordPaymentDetails(status : String ):void ;
}