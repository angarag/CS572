import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import { DataService } from './service/data.service';

@NgModule({
    declarations: [
      AppComponent ],
    imports: [
      BrowserModule,HttpClientModule,
      RouterModule.forRoot([
        { path: 'users', loadChildren: './users/users.module#UsersLazyModule'}
        ])
   
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  