import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective implements OnInit {
  @Input() visibility:boolean;
  constructor(
    private elm: ElementRef) { }

    ngOnInit(){
      if(this.visibility==false)
      this.elm.nativeElement.style.display='none'
    }

}
