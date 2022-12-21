import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FhirTransactionInterface } from 'src/app/Interfaces/FhirHub/fhirTransaction-interface';
import { FhirTransaction } from 'src/app/Mocks/mock-fhirTransaction';

@Injectable({
  providedIn: 'root'
})
export class FhirTransactionService {

  constructor() { }

  getFHIRTransaction(): Observable<FhirTransactionInterface[]> {
		const FHIRServiceData = of(FhirTransaction);
		return FHIRServiceData;
	}
}
