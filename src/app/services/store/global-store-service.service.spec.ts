import { TestBed } from '@angular/core/testing';

import { GlobalStoreServiceService } from './global-store-service.service';

describe('GlobalStoreServiceService', () => {
  let service: GlobalStoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalStoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
