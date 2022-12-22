import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FhirConfigInterface } from 'src/app/Interfaces/FhirHub/fhirConfig-interface';
import { FHIRConfig } from 'src/app/Mocks/mock-fhirConfig';

@Injectable({
  providedIn: 'root'
})
export class FhirConfigService {

  config!: any;
  configList: FhirConfigInterface[] = FHIRConfig;

  constructor() { }

  getFHIRConfig(): Observable<FhirConfigInterface[]> {
		const FHIRConfigData = of(FHIRConfig);
		return FHIRConfigData;
	}

	getOneFHIRConfig(id: number): Observable<FhirConfigInterface> {
		for (let i = 0; i < FHIRConfig.length; i++) {
			let allergieFound = FHIRConfig.find((allergie: { id: number; }) => allergie.id === id);
			if (allergieFound) return of(allergieFound);
		}
		return of();
	}
}
