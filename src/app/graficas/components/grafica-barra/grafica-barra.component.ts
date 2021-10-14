import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;
  
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input() public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() public barChartData: ChartDataSets[] = [
   /*  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#F763C4', hoverBackgroundColor: 'red' },
    { data: [38, 18, 50, 19, 86, 67, 10], label: 'Series C', backgroundColor: '#D665E0', hoverBackgroundColor: 'red' }, */
  ];

  constructor() { }

  ngOnInit(): void {

    if(this.horizontal){
      this.barChartType = 'horizontalBar';
    }
  }

}
