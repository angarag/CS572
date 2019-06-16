import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ViewEncapsulation
} from "@angular/core";
import { Tictactoe2Service } from "./../tictactoe2.service";

@Component({
  selector: "app-cell2",
  templateUrl: "./cell2.component.html",
  styleUrls: ["./cell2.component.scss"]
})
export class Cell2Component implements OnInit {
  @Input() cid: number;
  private is_clicked: boolean;
  constructor(private svs: Tictactoe2Service) {}
  ngOnInit() {
    console.log("OnInit: Child ", this.cid);
    this.is_clicked = false;
    this.svs.parent.subscribe(msg => {
      switch (msg) {
        case "done":
          console.log(
            `Child %s received Game over message from Parent`,
            this.cid
          );
          this.disableClick();
          break;
        case "reset":
          console.log(`Child %s received Reset message from Parent`, this.cid);
          this.enableClick();
          break;
      }
    });
  }
  enableClick() {
    this.is_clicked = false;
  }

  disableClick() {
    this.is_clicked = true;
  }
  emit() {
    //this.disableClick();
    this.svs.played(this.cid);
  }
}
