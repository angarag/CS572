import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Cell2Component } from "../cell2/cell2.component";
import { Tictactoe2Service } from "./../tictactoe2.service";
@Component({
  selector: "app-tictactoe2",
  templateUrl: "./tictactoe2.component.html",
  styleUrls: ["./tictactoe2.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Tictactoe2Component implements OnInit {
  private cells: any = new Array(9);
  private current_player: string;
  constructor(private svs: Tictactoe2Service) {}
  winner_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  ngOnInit() {
    this.current_player = "X";
    this.svs.emit.subscribe(id => {
      this.cells[id] = this.current_player;
      if (!this.hasWinner()) {
        if (!this.cells.includes(undefined)) this.current_player = "Noone wins";
        else this.changePlayer();
      } else {
        this.current_player = this.current_player + " wins";
        this.svs.done();
      }
    });
  }
  changePlayer() {
    if (this.current_player == "X") this.current_player = "O";
    else this.current_player = "X";
  }
  hasWinner() {
    const Xs = this.cells.filter(i => i == "X");
    const Os = this.cells.filter(i => i == "O");
    const arr = {
      X: [],
      O: []
    };
    let result = false;
    if (Xs.length > 2 || Os.length > 2) {
      console.log("Winner detection is running", Xs, Os);
      for (let i in this.cells)
        if (this.cells[i] != undefined) arr[this.cells[i]].push(parseInt(i));
      for (let i of this.winner_combinations) {
        let count = 0;
        for (let x of arr.X) {
          if (i.includes(x)) count++;
        }
        if (count == 3) {
          console.log("X wins");
          return true;
        }
        count = 0;
        for (let o of arr.O) {
          if (i.includes(o)) {
            count++;
          }
        }
        if (count == 3) {
          console.log("O wins");
          return true;
        }
      }
      console.log(arr);
    }
    return result;
  }

  reset() {
    this.cells = new Array(9);
    //this.svs.reset();
    this.current_player = this.current_player.indexOf("X") != -1 ? "O" : "X";
  }
  isOver() {
    if (this.current_player.indexOf("wins") != -1) return true;
    console.log(this.cells);
    if (this.cells.filter(i => i == null).length == 0) return true;
    return false;
  }
}
