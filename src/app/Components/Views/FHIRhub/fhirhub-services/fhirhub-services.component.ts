import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';
import { FhirServiceInterface } from 'src/app/Interfaces/FhirHub/fhirService/fhirService-interface';
import { FhirServiceDetailInterface } from 'src/app/Interfaces/FhirHub/fhirService/fhirServiceDetail-interface';
import { FhirServiceDetailParamsInterface } from 'src/app/Interfaces/FhirHub/fhirService/fhirServiceDetailParams-interface';
import { FhirServiceService } from 'src/app/Services/FHIRhub-service/fhir-service.service';
import { PanelService } from 'src/app/Services/panel.service';

import { InfiniteScrollScript } from 'src/app/Script/infiniteScroll'

@Component({
  selector: 'app-fhirhub-services',
  templateUrl: './fhirhub-services.component.html',
  styleUrls: ['./fhirhub-services.component.less']
})
export class FhirhubServicesComponent implements OnInit {

  // Init l'infinite scroll
  infiniteScript: any = InfiniteScrollScript;
 
  // Liste des datas
	listServices!: FhirServiceInterface[];
  listServiceDetails!: FhirServiceDetailInterface[];
  listServiceDetailsParamsData!: FhirServiceDetailParamsInterface[];
  listServiceDetailsParams: FhirServiceDetailParamsInterface[] = [];

  // Liste des booléens d'affichage
  details: boolean = false;
  detailParamsActive:boolean = false;
  buttonParamsText: string = "Affiche les paramètres usuels"

  // Liste des variables pour le scroll infini
  indexParams = 0;

  // Récupération des données des composants parents et enfants
  @Input() dataTab!: string;
  @Output() changeTitle = new EventEmitter<string>();

  // Connection à l'évent de scroll Infini pour rechager des datas
  constructor(private FhirServiceData: FhirServiceService, private test: PanelService) {
    this.test.scrollPanel.subscribe((data) => {
      if(data == "Services" && this.details == true){
        this.onScrollDown();
      }
  })
   }
  ngOnInit(): void {
    // Init le premier appel de services
    this.getFhirService();
  }

  // Au changement de tab reset les datas et l'element affiché
  ngOnChanges(changes: SimpleChanges) {
    let change: SimpleChange = changes['dataTab']; 

    this.details = false;
    this.indexParams = 0;
    this.listServiceDetailsParams = [];
  }

  // Récupère la liste de services
  getFhirService(): void {
		this.FhirServiceData.getFHIRService().subscribe(services => this.listServices = services);
	}

  // Récupère toutes les informations d'un service
  getServiceDetail(nameService:string, index:number, number:number): void {
    this.FhirServiceData.getFhirServiceDetail().subscribe(services => this.listServiceDetails = services);
    this.FhirServiceData.getFhirServiceDetailParams(index, number).subscribe(servicesParams => this.listServiceDetailsParamsData = servicesParams);
    this.details = true;
    var ctnGlobal:any = document.getElementById('Services');
    ctnGlobal.scrollTop = 0;
    this.addServiceDetails(this.indexParams, 10);
    this.changeTitle.emit(`DETAIL DU SERVICE FHIR ${nameService}`);
  }

  // Rajoute des données dans le tableau de service par tranche de 10 selon le scroll 
  addServiceDetails(index: number, number: number): void {
    for(let i = index; i < number + index; i++){
      if(this.listServiceDetailsParamsData[i]){
        this.listServiceDetailsParams.push(this.listServiceDetailsParamsData[i]);
        this.indexParams += 1;
      }
      else {
        return;
      }
    }
    // Timeout pour faire passer le calcul de height en bas de la pile en attendant de recevoir les datas via des requêtes ajax
    setTimeout(() => {
      var ctnGlobal:any = document.getElementById('Services');
      var ctn:any = document.getElementById('SerivcesOnglet');
      if(ctn.offsetHeight < ctnGlobal.offsetHeight){
        this.addServiceDetails(this.indexParams, 10);
      }
    }, 0)
  }

  // Fonction de fin de scroll
  onScrollDown(): void {
    this.addServiceDetails(this.indexParams, 10)
  }

  // Affiche les paramètres usuels + reset le tableau de données
  showUsualParams(event: any): void {
    this.detailParamsActive = !this.detailParamsActive;
    this.detailParamsActive ? event.target.innerText="Cache les paramètres usuels" : event.target.innerText="Affiche les paramètres usuels";
    this.indexParams = 0;
    this.listServiceDetailsParams = [];
    this.addServiceDetails(this.indexParams, 10);
    var ctnGlobal:any = document.getElementById('Services');
    ctnGlobal.scrollTop = 0;
  }
}
