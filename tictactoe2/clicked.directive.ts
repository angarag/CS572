import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: "[appClicked]"
})
export class ClickedDirective {
  constructor(private elm: ElementRef) {}

  @HostListener("click") foo() {
    console.log("Directive", this.elm.nativeElement, "clicked");
    //this.elm.nativeElement.className = "clicked";
  }
}
