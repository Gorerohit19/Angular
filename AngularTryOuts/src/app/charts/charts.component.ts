import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit{
  
  theaterId: number=1;
  ravenues:any[] | undefined;
  constructor(private svc : DashboardService){}
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,

    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 500,
        max:5000,
        ticks: {
          stepSize: 500,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'TheaterName' },
    ],
  };


  ngOnInit(): void {
    this.svc.GetRevenue(this.theaterId).subscribe((response) => {
      this.ravenues = response;
      this.barChartData.labels = this.ravenues?.map((rev)=> rev.name);
      this.barChartData.datasets[0].data=this.ravenues?.map((rev) =>rev.amount);
    });
  }
}