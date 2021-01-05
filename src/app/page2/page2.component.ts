import { Component, OnInit } from '@angular/core';
import { ChartsComponent } from '../charts/charts.component';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }
  categ2=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,10,21,22,23,24]

  lineOptions={min: 0,max:100,tickInterval: 20, 
            title: { text: '', style: {fontSize: 13}}};
  barOptions={min: 0,max:100,tickInterval: 20, 
            title: { text: '', style: {fontSize: 13}}};
  dataInputBar=[{name:'Percentage' ,showInLegend: false,data: [80,77,82]}];
  dataInputLine=[{name:'Sensor Data',showInLegend: false,data: [80,81,80,79,80,77,76,79,81,82,84,80,81,80,79,80,77,76,79,81,82,84,80,81]}]       
  categ=['Moisture Sensor' , 'Ultrasonic Sensor' , 'Rain Sensor'];
  title = 'Chart';
  Xline=23;
  tickLine=3;
  dataInputPie=[{ type:'pie',innerSize: '80%', name:'Lost time Rate',data:[['Taken',28],['remaining',72]]}];
  dataInputFunnel=[{ data:[['Sick',14.4],['Recap',18.3],['Emergency',10.3]]}]

}
