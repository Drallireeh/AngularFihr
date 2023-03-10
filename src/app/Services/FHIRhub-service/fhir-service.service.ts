import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FhirServiceInterface } from 'src/app/Interfaces/FhirHub/fhirService/fhirService-interface';
import { FHIRService } from 'src/app/Mocks/mock-fhirService';
import { FhirServiceDetailInterface } from 'src/app/Interfaces/FhirHub/fhirService/fhirServiceDetail-interface';
import { FhirServiceDetailParamsInterface } from 'src/app/Interfaces/FhirHub/fhirService/fhirServiceDetailParams-interface';
import { FHIRServiceDetail } from 'src/app/Mocks/mock-fhirServiceDetail';

@Injectable({
  providedIn: 'root'
})
export class FhirServiceService {

  constructor() { }

  getFHIRService(): Observable<FhirServiceInterface[]> {
		const FHIRServiceData = of(FHIRService);
		return FHIRServiceData;
	}

  getFhirServiceDetail(): Observable<FhirServiceDetailInterface[]> {
		const FHIRServiceDetailData = of(FHIRServiceDetail);
		return FHIRServiceDetailData;
	}

	getFhirServiceDetailParams(index: number, number: number): Observable<FhirServiceDetailParamsInterface[]> {
		const FHIRServiceDetailParamsData = of(FHIRServiceDetail[0].params);
		return FHIRServiceDetailParamsData;
	}
}
