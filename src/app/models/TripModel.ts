
import {DriverModel} from 'src/app/models/DriverModel';

export interface TripModel {

    FromAddress: string;
    ToAddress: string;
    PersianDateTime:string;
    TypeTripName: string;
    CustomerName:string;
    UnitName:string;
    DriverTrip:DriverModel;
    DriverId:number;
    Status:number;
    StatusName:string;
    PersianStartTime:string;
    PersianEndTime:string;
    
    // CarName:string;
    // Type:number
    // CarType:string;
    // CarNumber:string;
    // ControlTrip:number;

}