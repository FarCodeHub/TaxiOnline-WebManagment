import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { TripModel } from '../models/TripModel';
import { DriverModel } from '../models/DriverModel';

@Injectable({
    providedIn: 'root'
  })
  export class HomeService {
  
  
    constructor(private http: HttpClient) { }


    getTrips(): Observable<TripModel[]> {
        return this.http.get<TripModel[]>('http://taxiapi.iranbarnet.com/api/GetRequestTrips');
      }

    getActiveDrivers(): Observable<DriverModel[]> {
        return this.http.get<DriverModel[]>('http://taxiapi.iranbarnet.com/api/GetActiveDrivers');
      }

      getTripsList(status:string): Observable<TripModel[]> {

        const httpOptions = { 
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          })
        };

        return this.http.get<TripModel[]>('http://taxiapi.iranbarnet.com/api/GetTripsList?status='+status,httpOptions);
      } 
      getDriversList(driverName:string): Observable<DriverModel[]> {

        const httpOptions = { 
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          })
        };

        return this.http.get<DriverModel[]>('http://taxiapi.iranbarnet.com/api/GetDriversList?driverName='+driverName,httpOptions);
      } 

  }