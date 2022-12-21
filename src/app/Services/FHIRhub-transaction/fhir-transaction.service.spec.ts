import { TestBed } from '@angular/core/testing';

import { FhirTransactionService } from './fhir-transaction.service';

describe('FhirTransactionService', () => {
  let service: FhirTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FhirTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
