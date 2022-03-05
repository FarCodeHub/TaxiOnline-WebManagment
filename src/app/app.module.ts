import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BidiModule} from '@angular/cdk/bidi';
 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import { HomeComponent } from './home/home.component';
import { RequestListComponent } from './request-list/request-list.component';
import { TripsComponent } from './trips/trips.component';
import { ServicesComponent } from './services/services.component';
import { DriversComponent } from './drivers/drivers.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { FinancialComponent } from './financial/financial.component';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { ReportTripComponent } from './report-trip/report-trip.component';
import { ReportDriverComponent } from './report-driver/report-driver.component';
import { FormsModule } from '@angular/forms';
 
 
 
@NgModule({
  declarations: [
  
    AppComponent,
    HomeComponent,
    RequestListComponent,
    TripsComponent,
    ServicesComponent,
    DriversComponent,
    FinancialComponent,
    ReportsListComponent,
    ReportTripComponent,
    ReportDriverComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BidiModule,
    FormsModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts'),}),  
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
