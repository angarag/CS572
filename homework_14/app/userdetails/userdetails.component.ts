import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'userdetails',
  template: `
<br/>
  User detail of {{user.name.first}}
  <li>
 {{user.email}}
  </li>
  <li>
  {{user.gender}}
  </li>
  <li>
  {{user.login.uuid}}
  </li>
  `,
  styles: []
})
export class UserdetailsComponent implements OnInit {
  @Input() user:any;
  user_id;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe((item)=>{
      let uuid= item.uuid;
      let arr=this.dataService.getCachedData()
      arr.forEach((item)=>{
        if(item.login.uuid===uuid)
        this.user=item;
      })
 
    }) 
  }

  ngOnInit() {
  }

}
