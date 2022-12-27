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
			let FHIRConfigFound = FHIRConfig.find((FHIRConfig: { id: number; }) => FHIRConfig.id === id);
			if (FHIRConfigFound) return of(FHIRConfigFound);
		}
		return of();
	}

	getOneFHIREndpoint(id: number): Observable<FhirConfigInterface> {
		for (let i = 0; i < FHIRConfig.length; i++) {
			let FHIREndpointFound = FHIRConfig.find((FHIREndpoint: { id: number; }) => FHIREndpoint.id === id);
			if (FHIREndpointFound) return of(FHIREndpointFound);
		}
		return of();
	}
}
