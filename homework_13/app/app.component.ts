import { Component } from '@angular/core';
import {ViewChild, AfterViewInit, ngAfterContentInit,OnInit } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  template: `
  <app-counter [counter]="parent_counter"
   [val1]="parent_val"
   val2="{{parent_val}}"
   val3="3"
    (counterChange)="receiveEmit($event)">
    <span #insideNGContent>NG_Content_defined_by_Parent</span>
    
  </app-counter>

  <p>Component Counter value: {{parent_counter}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, ngAfterContentInit {
  title = 'angularProject';
  parent_counter:number;
  parent_val:number;
  @ViewChild(CounterComponent) messageViewChild: CounterComponent;
  constructor(){
    this.parent_counter=1;
    this.parent_val=12;
  }
  ngAfterContentInit() {
    this.messageViewChild.counterValue = 0;//'Passed as View Child';
}
  receiveEmit(x){
    this.parent_counter=x;
      console.log('Received:',x)
  }
}
