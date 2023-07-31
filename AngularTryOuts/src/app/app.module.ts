import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { NgChartsModule } from 'ng2-charts';
import { LinechartComponent } from './linechart/linechart.component';
import { HttpClientModule } from '@angular/common/http';
// import { PiechartComponent } from './piechart/piechart.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    LinechartComponent,
   // PiechartComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule.forRoot(),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
