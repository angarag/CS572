import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>App Component</h1>
  <a [routerLink]="['']">Home</a>
  <a [routerLink]="['users']">Load Lazy Users Component</a>
  <router-outlet></router-outlet>
  `,
  // because LogService is here now both Components will have same instance
  // we moved LogService here because it's been used in DataService 
  // we can move it to a higher level in module!
  // we have DataService here so both Components will have same instance
  // basically they now share same data
  // Also both Components will communicate through this service
  // One Component will emit() an event and the other Component will subscribe to the same Emitter 
  providers: []
})
export class AppComponent {
  
  constructor(private dataService: DataService) { 
     
  }

  ngOnInit() {
    console.log('getting data'
    )
    this.dataService.getOnlineData()
    .subscribe((data) => {
      // this.data=data.data.results;
      console.log(data)
      localStorage.setItem('users',JSON.stringify(data['results']));

  });

    }

}

