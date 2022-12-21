import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FhirConfigInterface } from 'src/app/Interfaces/FhirHub/fhirConfig-interface';
import { FHIRConfig } from 'src/app/Mocks/mock-fhirConfig';

@Injectable({
  providedIn: 'root'
})
export class FhirConfigService {

  constructor() { }

  getFHIRConfig(): Observable<FhirConfigInterface[]> {
		const FHIRConfigData = of(FHIRConfig);
		return FHIRConfigData;
	}
}
