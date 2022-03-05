import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverModel } from '../models/DriverModel';
import { TripModel } from '../models/TripModel';
import { HomeService } from '../services/home.services';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  constructor(private _ServicHome: HomeService,private route: ActivatedRoute,private router: Router,private http: HttpClient)
  {this.trp = JSON.parse(route.snapshot.params["trip"]); }
  drivers : DriverModel[] ;

  trp :TripModel;



assignActiveDriver(tripId,driverId)
{
  let httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };


  this.http.post('http://taxiapi.iranbarnet.com/api/AssignDriverToTrip?tripId='+tripId+'&driverId='+ driverId, httpOptions)
    .subscribe(data => {
      if (data != null)
        this.router.navigate(['/request-list'])

    });
}


 async ngOnInit() {

  this._ServicHome.getActiveDrivers().subscribe(data => this.drivers = data)

  }

}
