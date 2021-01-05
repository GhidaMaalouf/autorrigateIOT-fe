import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ChartsComponent } from './charts/charts.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HttpClientModule } from '@angular/common/http';

 const routes: Routes = [
   ];



@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    ChartsComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HighchartsChartModule,
    HttpClientModule
    
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
