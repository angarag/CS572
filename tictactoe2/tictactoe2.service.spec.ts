import { TestBed } from "@angular/core/testing";

import { Tictactoe2Service } from "./tictactoe2.service";

describe("Tictactoe2Service", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: Tictactoe2Service = TestBed.get(Tictactoe2Service);
    expect(service).toBeTruthy();
  });
});
