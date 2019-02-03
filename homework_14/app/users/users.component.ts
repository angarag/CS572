import { Component, OnInit,Input } from '@angular/core';

import { DataService } from '../service/data.service';
@Component({
  selector: 'app-users',
  template: `
  <h1>User details</h1>
  <ul>
  <div *ngFor="let user of users">
  <li>
  <a [routerLink]="['users',user.login.uuid]" (click)="sendUUID(user.login.uuid)">
  {{user.name.first}} {{user.name.last}}
  </a>
  </li>
  </div>
  </ul>
  `,
  styles: [],
  providers: [DataService]
})
export class UsersLazyComponent implements OnInit {
  users;
  constructor(private dataService: DataService){}
  sendUUID(id){
    this.dataService.emitValue(id);
  }
  ngOnInit() {
    this.users= this.dataService.getCachedData();
   // console.log(this.users)
 
}
}
