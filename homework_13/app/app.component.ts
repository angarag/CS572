import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-counter [counter]="parent_counter" (counterChange)="receiveEmit($event)"></app-counter>

  <p>Component Counter value: {{parent_counter}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';
  parent_counter:number;

  constructor(){
    this.parent_counter=1;
  }
  receiveEmit(x){
    this.parent_counter=x;
      console.log('Received:',x)
  }
}
