import { Component, OnInit } from '@angular/core';
import { number } from 'echarts';
import {HomeService} from 'src/app/services/home.services'
import { TripModel } from '../models/TripModel';
@Component({
  selector: 'app-report-trip',
  templateUrl: './report-trip.component.html',
  styleUrls: ['./report-trip.component.css']
})
export class ReportTripComponent implements OnInit {




  constructor(private _ServicHome: HomeService) { }

  status = '-1';
  tripModel : TripModel[] ;

  ngOnInit() {
    
  }

  getTripsList(status:string){
    this._ServicHome.getTripsList(status).subscribe((data) => { 
      this.tripModel = data;
     });
    }
     

}
