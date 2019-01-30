import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
  <ng-container>
  <p>I'm the Smart component and here is all my dumb children components:
  <ng-template [ngIf]="dumbs">
  <app-dumb *ngFor="let dumb of dumbs" [param]="dumb">
  </app-dumb>
</ng-template>
My invisible children:
<ng-template [ngIf]="objs">
<app-dumb *ngFor="let item of objs | keyvalue" [obj]="item">
</app-dumb>
</ng-template>
</p>
  </ng-container>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
  @Input() dumbs: any;
  @Input() objs: any;
  constructor() { }

  ngOnInit() {
  }

}
