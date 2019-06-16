import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class Tictactoe2Service {
  emit = new EventEmitter();
  parent = new EventEmitter();
  constructor() {}

  played(id) {
    console.log("Service:", id);
    this.emit.emit(id);
  }
  reset() {
    this.parent.emit("reset");
  }

  done() {
    this.parent.emit("done");
  }
}
