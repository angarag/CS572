import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {ViewChildren , QueryList , AfterViewInit, ContentChild, OnChanges} from '@angular/core';
@Component({
  selector: 'app-counter',
  template:
   `<p>
   Enter counter value: <input type="text" [value]="counter"
    (input)="setValue($event.target.value)"
    (keyup)=emitValue(child_input.value) #child_input/>
   </p>
    <p>
    <button (click)="changeValue(-1)">-</button>
    {{counterValue}}
      <button (click)="changeValue(+1)">+</button>
      </p>
      <ng-content></ng-content>
      
  `,
  styles: [`p{color:red}`]
})
export class CounterComponent implements OnChanges{
  counterValue: number;
  @Input() counter:number;
  @Input() val1;
  @Input() val2:number;
  @Input() val3;
@ContentChild('insideNGContent') ng_content;

  @Output() counterChange;
  constructor() {
    this.counterChange= new EventEmitter();
    //this.counterValue = 0;
  }

  //Option#3 - Not finished
  ngOnChanges(changes){
    console.log(this.ng_content)
    console.log(`the above one is NG Content, the below one is Component input onChanges:`)
    console.log(changes);//.counter.currentValue)
  }
  //Option#2
  setValue(val){
    let x=parseInt(val);
    this.counterValue=x;
    this.counterChange.emit(x);
  }
  changeValue(val){
    this.counterValue=this.counterValue+val;
    this.counterChange.emit(this.counterValue);
    return this;
  }

    /*Option#1
    Alternative option to (input)="setValue($event.target.value)"
    this.counterValue=x; 
    */
  emitValue(x): void{
    console.log(`Input types received: Val1: ${typeof this.val1}, Val2: ${typeof this.val2}, Val3: ${typeof this.val3}`)
    console.log('input onChange', x)
    x=parseInt(x);
    this.counterChange.emit(x)
  }

}
