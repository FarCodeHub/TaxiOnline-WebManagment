import { Component, OnInit } from '@angular/core';
import { TripModel } from '../models/TripModel';
import { HomeService } from '../services/home.services';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  constructor(private _ServicHome: HomeService) { }
  tripModel : TripModel[] ;
  countTraveling :TripModel[];
 
   



  ngOnInit() {

//     this._ServicHome.getTrips().subscribe((data) => { this.tripModel = data})

//     this.tripModel.forEach(x=>{
//       if (x.DriverId == null)
//       this.countTraveling.push(x);
// })
 
 

}
}
