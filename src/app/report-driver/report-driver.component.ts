import { Component, Input, OnInit } from '@angular/core';
 
import { DriverModel } from '../models/DriverModel';
import { HomeService } from '../services/home.services';

@Component({
  selector: 'app-report-driver',
  templateUrl: './report-driver.component.html',
  styleUrls: ['./report-driver.component.css']
})
export class ReportDriverComponent implements OnInit {

  @Input() driverName="";
   driverModel : DriverModel [];

  constructor( private _ServicHome: HomeService) {
   }

  ngOnInit() {
  }


  getDriversList(driverName:string)
  {
    this._ServicHome.getDriversList(driverName).subscribe((data) => { 
      this.driverModel = data;
     });
  }


}
