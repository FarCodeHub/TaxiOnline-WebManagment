import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RequestListComponent } from './request-list/request-list.component';
import { TripsComponent } from './trips/trips.component';
import { DriversComponent } from './drivers/drivers.component';
import {FinancialComponent} from './financial/financial.component';
import {ReportsListComponent} from './reports-list/reports-list.component';
import {ReportTripComponent} from './report-trip/report-trip.component'
import {ReportDriverComponent} from './report-driver/report-driver.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'request-list', component: RequestListComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'drivers/:trip', component: DriversComponent },
  { path: 'financial', component: FinancialComponent },
  { path: 'reportsList', component: ReportsListComponent },
  { path: 'report-trip', component: ReportTripComponent },
  { path: 'report-driver', component: ReportDriverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
