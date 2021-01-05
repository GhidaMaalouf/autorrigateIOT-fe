import { Component, OnInit } from '@angular/core';
import { ChartsComponent } from '../charts/charts.component';
import {DataService} from '../data.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.dataService.SensorData);
    
  }
  getAverageMoisture(){
      let avg=0;
      let sum=0;
      let len=0;
      for(let dat in this.dataService.SensorData){
          len=len+1;
          sum=sum+this.dataService.SensorData.moisture;
      }
      avg=sum/len;
      return avg;
    }
  categ2=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,10,21,22,23,24]

  lineOptions={min: 0,max:100,tickInterval: 20, 
            title: { text: '', style: {fontSize: 13}}};
  barOptions={min: 0,max:100,tickInterval: 20, 
            title: { text: '', style: {fontSize: 13}}};
  dataInputBar=[{name:'Percentage' ,showInLegend: false,data:this.getAverageMoisture()}];
  dataInputLine=[{name:'Sensor Data',showInLegend: false,data: this.dataService.SensorData.moisture}]       
  categ=['Moisture Sensor' , 'Ultrasonic Sensor' , 'Rain Sensor'];
  title = 'Chart';
  Xline=23;
  tickLine=3;

}
