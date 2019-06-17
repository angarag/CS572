import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class Tictactoe2Service {
  current_player: string;
  emit = new EventEmitter();
  parent = new EventEmitter();
  constructor() {
    this.current_player = "X";
  }

  played(id) {
    console.log("Service:", id);
    this.emit.emit(id);
    const prev = this.current_player;
    this.changePlayer();
    return prev;
  }
  changePlayer() {
    if (this.current_player == "X") this.current_player = "O";
    else this.current_player = "X";
  }
  reset() {
    this.parent.emit("reset");
  }

  done() {
    this.parent.emit("done");
  }
}
