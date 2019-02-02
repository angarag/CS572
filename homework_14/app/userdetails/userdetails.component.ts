import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'userdetails',
  template: `
  <li>
  {{user_id}}
  </li>
  `,
  styles: []
})
export class UserdetailsComponent implements OnInit {
  @Input() user:any;
  user_id;
  constructor(private route: ActivatedRoute) { 
    route.params.subscribe((p)=>{
      this.user_id=p['uuid']
    })
  }

  ngOnInit() {
  }

}
