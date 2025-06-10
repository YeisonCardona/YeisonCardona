import { TestBed } from '@angular/core/testing';

import { MemoizeService } from './memoize.service';

describe('MemoizeService', () => {
  let service: MemoizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
