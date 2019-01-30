import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
<app-smart [dumbs]="arr" [objs]="objs">
</app-smart>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr = [3,2,4,5,'mars',7.0];
  objs = {3:true,2:false,4:true,5:false,'mars':true,7.0:true};

  constructor(){
  }

}
