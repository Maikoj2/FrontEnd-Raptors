import { TestBed } from '@angular/core/testing';

import { CssChangeService } from './css-change.service';

describe('CssChangeService', () => {
  let service: CssChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
