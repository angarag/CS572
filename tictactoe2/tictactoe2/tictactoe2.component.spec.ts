import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Tictactoe2Component } from "./tictactoe2.component";

describe("Tictactoe2Component", () => {
  let component: Tictactoe2Component;
  let fixture: ComponentFixture<Tictactoe2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tictactoe2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tictactoe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
