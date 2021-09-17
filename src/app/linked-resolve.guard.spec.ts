import { TestBed } from '@angular/core/testing';

import { LinkedResolveGuard } from './linked-resolve.guard';

describe('LinkedResolveGuard', () => {
  let guard: LinkedResolveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LinkedResolveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
