import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FhirServiceInterface } from 'src/app/Interfaces/FhirHub/fhirService-interface';
import { FHIRService } from 'src/app/Mocks/mock-fhirService';

@Injectable({
  providedIn: 'root'
})
export class FhirServiceService {

  constructor() { }

  getFHIRService(): Observable<FhirServiceInterface[]> {
		const FHIRServiceData = of(FHIRService);
		return FHIRServiceData;
	}
}
