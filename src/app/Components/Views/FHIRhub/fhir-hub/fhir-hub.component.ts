import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fhirhub',
  templateUrl: './fhir-hub.component.html',
  styleUrls: ['./fhir-hub.component.less']
})
export class FHIRhubComponent implements OnInit {

  config:boolean = false;
  configForm:boolean = false;
  tabActive!:string;

  FHIRTitle:string = "LISTE DES SERVEURS FHIR REST"
  
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tab: any): void {
    this.tabActive = tab;
    this.configForm = false;
    if(tab == "Config"){
      this.config = true;
    }
    else {
      this.config = false;
    }
    if(tab == "Services"){
      this.FHIRTitle = "LISTE DES SERVEURS FHIR REST"
    }
    else if(tab == "Config"){
      this.FHIRTitle = "LISTE DES ETABLISSEMENTS"
    }
    else if(tab == "Transaction"){
      this.FHIRTitle = "LISTE DES TRANSACTIONS HL7"
    }
  }

  showBtnSuppr(): void {
    this.configForm = true;
  }
}
