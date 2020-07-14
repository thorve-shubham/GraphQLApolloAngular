import { TestBed } from '@angular/core/testing';

import { ApolloserviceService } from './apolloservice.service';

describe('ApolloserviceService', () => {
  let service: ApolloserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApolloserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
