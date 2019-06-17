import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ContentChild,
  ElementRef,
  ViewEncapsulation,
  Output,
  ChangeDetectionStrategy
} from "@angular/core";
import { Tictactoe2Service } from "./../tictactoe2.service";

@Component({
  selector: "app-cell2",
  templateUrl: "./cell2.component.html",
  styleUrls: ["./cell2.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cell2Component implements OnInit {
  @Input() cid: number;
  @ContentChild("parentData") span: ElementRef;
  constructor(private svs: Tictactoe2Service) {}
  ngOnInit() {
    console.log("OnInit: Child ", this.cid);
    this.svs.parent.subscribe(msg => {
      switch (msg) {
        case "done":
          console.log(
            `Child %s received Game over message from Parent`,
            this.cid
          );
          break;
        case "reset":
          console.log(`Child %s received Reset message from Parent`, this.cid);
          break;
      }
    });
  }
  emit() {
    this.svs.played(this.cid);
  }
  hasContent() {
    if (this.span.nativeElement.textContent !== "") return true;
    return false;
  }
}
