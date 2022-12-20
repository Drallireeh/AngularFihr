import { TestBed } from '@angular/core/testing';

import { FhirServiceService } from './fhir-service.service';

describe('FhirServiceService', () => {
  let service: FhirServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FhirServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
