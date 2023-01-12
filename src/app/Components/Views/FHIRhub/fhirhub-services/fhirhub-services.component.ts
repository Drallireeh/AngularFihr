import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FhirServiceInterface } from 'src/app/Interfaces/FhirHub/fhirService/fhirService-interface';
import { FhirServiceDetailInterface } from 'src/app/Interfaces/FhirHub/fhirService/fhirServiceDetail-interface';
import { FhirServiceDetailParamsInterface } from 'src/app/Interfaces/FhirHub/fhirService/fhirServiceDetailParams-interface';
import { FhirServiceService } from 'src/app/Services/FHIRhub-service/fhir-service.service';
import { PanelService } from 'src/app/Services/panel.service';

@Component({
  selector: 'app-fhirhub-services',
  templateUrl: './fhirhub-services.component.html',
  styleUrls: ['./fhirhub-services.component.less']
})
export class FhirhubServicesComponent implements OnInit {
 
  // Liste des datas
	listServices!: FhirServiceInterface[];
  listServiceDetails!: FhirServiceDetailInterface[];
  listServiceDetailsParamsData!: FhirServiceDetailParamsInterface[];
  listServiceDetailsParams: FhirServiceDetailParamsInterface[] = [];

  // Liste des booléens d'affichage
  base: boolean = true;
  detail: boolean = false;

  // Liste des variables pour le scroll infini
  indexParams = 0;

  @Output() changeTitle = new EventEmitter<string>();

  constructor(private FhirServiceData: FhirServiceService, private test: PanelService) {
    this.test.scrollPanel.subscribe((data) => {
      if(data == "Services" && this.detail == true){
        this.onScrollDown();
      }
  })
   }
  ngOnInit(): void {
    this.getFhirService();
  }

  getFhirService(): void {
		this.FhirServiceData.getFHIRService().subscribe(services => this.listServices = services);
	}

  getServiceDetail(nameService:string, index:number, number:number): void {
    this.FhirServiceData.getFhirServiceDetail().subscribe(services => this.listServiceDetails = services);
    this.FhirServiceData.getFhirServiceDetailParams(index, number).subscribe(servicesParams => this.listServiceDetailsParamsData = servicesParams);
    this.base = false;
    this.detail = true;
    this.addServiceDetails(this.indexParams, 10)
    this.changeTitle.emit(`DETAIL DU SERVICE FHIR ${nameService}`);

  }

  addServiceDetails(index: number, number: number): void {
    for(let i = index; i < number + index; i++){
      if(this.listServiceDetailsParamsData[i]){
        this.listServiceDetailsParams.push(this.listServiceDetailsParamsData[i]);
        this.indexParams += 1;
      }
      else {
        console.log('finito le scroll la')
        return;
      }
    }
  }

  onScrollDown(): void {
    this.addServiceDetails(this.indexParams, 10)
  }
}
