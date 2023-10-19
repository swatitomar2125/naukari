import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AppRoutingModule } from './app-routing-module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { PaidServicesPageComponent } from './paid-services/paid-services-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    JobsPageComponent,
    HomePageComponent,
    PaidServicesPageComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    NoopAnimationsModule,
   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
