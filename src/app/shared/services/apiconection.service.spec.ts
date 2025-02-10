import { TestBed } from '@angular/core/testing';

import { ApiconectionService } from './apiconection.service';

describe('ApiconectionService', () => {
  let service: ApiconectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiconectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
