import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FhirConfigInterface } from 'src/app/Interfaces/FhirHub/fhirConfig-interface';
import { FhirConfigFormInterface } from 'src/app/Interfaces/FhirHub/fhirConfigForm-interface';
import { FhirConfigForm2Interface } from 'src/app/Interfaces/FhirHub/fhirCongifForm2-interface';
import { FHIRConfig } from 'src/app/Mocks/mock-fhirConfig';
import { FHIRConfigForm } from 'src/app/Mocks/mock-fhirConfigForm';
import { FHIRConfigForm2 } from 'src/app/Mocks/mock-fhirConfigForm2';

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

	getOneFHIRConfigForm(id:number): Observable<FhirConfigFormInterface> {
		for (let i = 0; i < FHIRConfigForm.length; i++) {
			let FHIRConfigFormFound = FHIRConfigForm.find((FHIRConfigForm: { id: number; }) => FHIRConfigForm.id === id);
			if (FHIRConfigFormFound) return of(FHIRConfigFormFound);
		}
		return of();
	}
	getOneFHIRConfigForm2(id:number): Observable<FhirConfigForm2Interface> {
		for (let i = 0; i < FHIRConfigForm2.length; i++) {
			let FHIRConfigForm2Found = FHIRConfigForm2.find((FHIRConfigForm: { id: number; }) => FHIRConfigForm.id === id);
			if (FHIRConfigForm2Found) return of(FHIRConfigForm2Found);
		}
		return of();
	}
}
