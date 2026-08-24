class APIClient{
    sendRequest(endpoint: string, requestBody: string, requestStatus: boolean): void;
    sendRequest(endpoint: string): void;

    sendRequest(endpoint: string, requestBody?: string, requestStatus?: boolean){
        if(requestStatus){
            console.log(`Endpoint:${endpoint}, Request Body:${requestBody}, Request Status:${requestStatus}`);
        }
        else{
            console.log(`Endpoint:${endpoint}`);
        }
    }
} 

const APIClientObj = new APIClient();
APIClientObj.sendRequest("URL");
APIClientObj.sendRequest("URL","POST",true);
