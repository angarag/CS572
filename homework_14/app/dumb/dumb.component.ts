import { Component, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template:`
  <ng-template [ngIf]="param">
  <li>
  {{param}}
</li>
  </ng-template>
  <ng-template [ngIf]="obj">
  <li loggable isVisible [visibility]="obj.value">
  {{obj.key}}
</li>
  </ng-template>
`,
  styles: []
})
export class DumbComponent implements OnInit {
  @Input() param:any;
  @Input() obj:any;
  constructor() { }

  ngOnInit() {
  }

}
