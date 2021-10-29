import { TestBed } from '@angular/core/testing';

import { HpdataService } from './hpdata.service';

describe('HpdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HpdataService = TestBed.get(HpdataService);
    expect(service).toBeTruthy();
  });
});
