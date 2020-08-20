import { TestBed } from '@angular/core/testing';

import { NcoviService } from './ncovi.service';

describe('NcoviService', () => {
  let service: NcoviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NcoviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
