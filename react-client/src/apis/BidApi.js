import { http } from "./BaseApi";

export class BidApi {
    static getBids(){
        const endpoint = '/bid';

        return http.get(endpoint);
    }

    static createBid(licenceClass, licenceNumber, driverID, date, amount){
        const endpoint = '/bid';
        const data =  {
            licence: {
                licenceClass: licenceClass,
                licenceNumber: licenceNumber,
                driver: {
                    id: driverID
                },
                
            },
            date: date,
            amount: amount
        };

        return http.post(endpoint, data);
    }
}