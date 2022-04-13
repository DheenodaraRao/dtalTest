import { http } from "./BaseApi";

export class DriverApi {
    static createDriver(name){
        const endpoint = '/driver';

        const data = {
            name
        };

        return http.post(endpoint,data);
    }
}