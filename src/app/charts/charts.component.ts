import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Input } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @Input()  charttype:any;
  @Input()  chartSeries:any;
  @Input()  xAxisCategories?:any;
  @Input()  chartWidth?:any;
  @Input()  yAxisoptions?:any;
  @Input()  xAxisoptions?:any;
  @Input()  tick?:any;
  @Input()  suffix?:any;
  @Input()  title:any;
  public Highcharts = Highcharts;
  constructor() { }

  chartOptions :any;
  updateFlag:false;

  ngOnInit() {

  	this.chartOptions  = {   
      chart: {
        borderWidth:1,
        borderRadius:5,
        borderColor: '#EEEAE8',
         type: this.charttype,
         height: (7/16 *100 ) +'%' ,
         width:this.chartWidth, 
       },
      title: {
         text: this.title,
         align:"left",
         paddingLeft: 100,
         style:{

           fontsize:30,
           fontWeight: 'bold',

         }
      },
      xAxis:{
            max: this.xAxisoptions,
            tickInterval: this.tick,
            categories: this.xAxisCategories,
            title: {  text:''} ,
            minPadding:0,
            maxPadding:0,
            labels: {
              style: {
                fontSize: 13
              }
            }
      },
 
      yAxis : this.yAxisoptions,
         labels: {
            overflow: 'justify',
            labels: {
              style: {
                fontSize: 13
              }
            }
            
         
      },
      tooltip : {
         valueSuffix: this.suffix,
      },
      plotOptions : {
        column:{
          borderRadiusTopLeft: 8,
        borderRadiusTopRight: 8
         },
         bar: {
            dataLabels: {
               enabled: true
            }
         }
      },
      credits:{
         enabled: false
      },
      series: 
      this.chartSeries

    };
  	
  }
}
