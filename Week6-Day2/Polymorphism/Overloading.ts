class FinalReport{
    //Method signature=> If there is no compile error, method signature is not required
    reportStep(message: string, status: string) : void
    reportStep(message: string, status: string, snap: boolean) : void

    //Single implementation=> 
        // Instead of separate implementation of 2 methods with same name(diff no of parameter), 
        // typescript uses optional parameter to make it single implementation
    reportStep(message: string, status: string, snap?: boolean){
        if(snap){
            console.log(`Message: ${message}, Status: ${status}, Need Snap `)
        }
        else{
            console.log(`Message: ${message}, Status: ${status}, Snap not needed `)
        }
    }
}

const repObj = new FinalReport();
repObj.reportStep("Error","Not Completed", true );
repObj.reportStep("Successful","Completed");