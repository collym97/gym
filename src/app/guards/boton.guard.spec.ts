import { TestBed } from '@angular/core/testing';

import { BotonGuard } from './boton.guard';

describe('BotonGuard', () => {
  let guard: BotonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BotonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
