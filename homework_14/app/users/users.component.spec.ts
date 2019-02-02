import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLazyComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersLazyComponent;
  let fixture: ComponentFixture<UsersLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
