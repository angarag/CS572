import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Tictactoe2Component } from "./tictactoe2/tictactoe2.component";
import { Cell2Component } from "./cell2/cell2.component";
import { Routes, RouterModule } from "@angular/router";
import { ClickedDirective } from "./clicked.directive";
import { Tictactoe2Service } from "./tictactoe2.service";
const routes: Routes = [{ path: "tictactoe2", component: Tictactoe2Component }];

@NgModule({
  declarations: [Tictactoe2Component, Cell2Component, ClickedDirective],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Tictactoe2Service],
  bootstrap: [Tictactoe2Component]
})
export class Tictactoe2Module {}
