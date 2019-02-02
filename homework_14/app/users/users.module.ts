import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersLazyComponent } from './users.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';

@NgModule({
  declarations: [UsersLazyComponent,UserdetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersLazyComponent },
      { path: ':uuid', component: UserdetailsComponent}
   
    ])

  ],
  providers: [],
  bootstrap: [UsersLazyComponent]
})
export class UsersLazyModule { }
