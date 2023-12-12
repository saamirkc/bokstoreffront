import { TestBed } from '@angular/core/testing';

import { KhaltiService } from './khalti.service';

describe('KhaltiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KhaltiService = TestBed.get(KhaltiService);
    expect(service).toBeTruthy();
  });
});
