import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FhirServiceInterface } from 'src/app/Interfaces/FhirHub/fhirService/fhirService-interface';
import { FhirServiceDetailInterface } from 'src/app/Interfaces/FhirHub/fhirService/fhirServiceDetail-interface';
import { FhirServiceService } from 'src/app/Services/FHIRhub-service/fhir-service.service';

@Component({
  selector: 'app-fhirhub-services',
  templateUrl: './fhirhub-services.component.html',
  styleUrls: ['./fhirhub-services.component.less']
})
export class FhirhubServicesComponent implements OnInit {
 
  // Liste des datas
	listServices!: FhirServiceInterface[];
  listServiceDetails!: FhirServiceDetailInterface[];

  // Liste des booléens d'affichage
  base: boolean = true;
  detail: boolean = false;

  @Output() changeTitle = new EventEmitter<string>();

  constructor(private FhirServiceData: FhirServiceService) { }

  ngOnInit(): void {
    this.getFhirService();
  }

  getFhirService(): void {
		this.FhirServiceData.getFHIRService().subscribe(services => this.listServices = services);
	}

  getServiceDetail(nameService:string): void {
    this.FhirServiceData.getFhirServiceDetail().subscribe(services => this.listServiceDetails = services);
    this.base = false;
    this.detail = true;
    this.changeTitle.emit(`DETAIL DU SERVICE FHIR ${nameService}`);
  }
}
