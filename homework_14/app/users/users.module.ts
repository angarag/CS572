import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersLazyComponent } from './users.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';

import { DataService as Guard }  from '../service/data.service';
@NgModule({
  declarations: [UsersLazyComponent,
    UserdetailsComponent
],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersLazyComponent },
      { path: 'users/:uuid', component: UserdetailsComponent, canActivate: [Guard]},

    ])

  ],
  providers: [],
  bootstrap: [UsersLazyComponent]
})
export class UsersLazyModule { }
