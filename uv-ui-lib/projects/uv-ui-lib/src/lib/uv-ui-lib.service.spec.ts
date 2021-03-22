import { TestBed } from '@angular/core/testing';

import { UvUiLibService } from './uv-ui-lib.service';

describe('UvUiLibService', () => {
  let service: UvUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UvUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
