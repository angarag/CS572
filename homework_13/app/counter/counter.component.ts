import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:
   `<p>
   Enter counter value: <input type="text" [value]="counter" (keyup)=emitValue(child_input.value) #child_input/>
   </p>
    <p>
    <button (click)="changeValue(-1)">-</button>
    <ng-content></ng-content>{{counterValue}}
      <button (click)="changeValue(+1)">+</button>
      </p>
      
  `,
  styles: []
})
export class CounterComponent{
  counterValue: number;
  @Input() counter:number;
  @Output() counterChange;
  constructor() {
    this.counterChange= new EventEmitter();
    this.counterValue = 0;
  }

  changeValue(val){
    this.counterValue=this.counterValue+val;
    this.counterChange.emit(this.counterValue);
    return this;
  }

  emitValue(x): void{
    x=parseInt(x);
    this.counterValue=x;
    console.log('input onChange', x)
    this.counterChange.emit(x)
  }

}
