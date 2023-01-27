import { Component, OnInit } from '@angular/core';
import { FhirTransactionInterface } from 'src/app/Interfaces/FhirHub/fhirTransaction-interface';
import { FhirTransactionService } from 'src/app/Services/FHIRhub-transaction/fhir-transaction.service';

@Component({
  selector: 'app-fhirhub-transaction',
  templateUrl: './fhirhub-transaction.component.html',
  styleUrls: ['./fhirhub-transaction.component.less']
})
export class FhirhubTransactionComponent implements OnInit {
 
  // Liste des datas
	listTransactions!: FhirTransactionInterface[];

  constructor(private FhirTransactionData: FhirTransactionService) { }

  ngOnInit(): void {
    this.getFhirService();
  }

  // Récupère les transactions
  getFhirService(): void {
		this.FhirTransactionData.getFHIRTransaction().subscribe(transactions => this.listTransactions = transactions);
	}
}
