import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[loggable]'
})
export class LoggableDirective {

  constructor() { }

  @HostListener('click') foo(){
    console.log('item is clicked')
  }
}
