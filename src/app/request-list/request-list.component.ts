import { Component, OnInit } from '@angular/core';
import { TripModel } from '../models/TripModel';
import { DriverModel } from '../models/DriverModel';
import {HomeService} from 'src/app/services/home.services'
import {Router} from '@angular/Router';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  constructor(private router:Router,private _ServicHome: HomeService) {}

  tripModel : TripModel[] ;

  pendingNumber : number;
  pendingList : TripModel[] =[];
  
  assignDriverNumber :number;
  assignDriverList : TripModel[] =[];

  driverAcceptNumber : number;
  driverAcceptList : TripModel[] =[];
  car : DriverModel[] ;


 gotoDriversList(pageName:string,trip:TripModel):void{this.router.navigate([`${pageName}`,JSON.stringify(trip)]);}



     ngOnInit() {
      this._ServicHome.getTrips().subscribe((data) => { 
        this.tripModel = data;
      
        this.tripModel.forEach(x=>{
          if (x.Status == 1)
          this.pendingList.push(x);
           if (x.Status == 2)
          this.assignDriverList.push(x);
          if (x.Status == 3)
          this.driverAcceptList.push(x);
      })

      if (this.pendingList == undefined)
      this.pendingNumber = 0;
      else
      this.pendingNumber = this.pendingList.length;

      if (this.assignDriverList == undefined)
      this.assignDriverNumber = 0;
      else
      this.assignDriverNumber = this.assignDriverList.length;

      if (this.driverAcceptList == undefined)
      this.driverAcceptNumber = 0;
      else
      this.driverAcceptNumber = this.driverAcceptList.length;

      
      })
    
  }

 
}
