import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-fhirhub',
  templateUrl: './fhir-hub.component.html',
  styleUrls: ['./fhir-hub.component.less']
})
export class FHIRhubComponent implements OnInit {

  // Liste des variables d'affichage
  config:boolean = false;
  configForm:boolean = false;
  tabActive!:string;

  // Emit les évènements liés aux boutons d'actions du panel heading
	@Input() actionButtons = new EventEmitter<string>();

  actionButton: Subject<string> = new Subject<string>();

  // Titre du panel
  FHIRTitle:string = "LISTE DES SERVEURS FHIR REST";
  
  constructor() { }

  ngOnInit(): void {
  }

  // Fonction de changement d'onglet au clic
  changeTab(tab: any): void {
    this.tabActive = tab;
    this.configForm = false;
    if(tab == "Config"){
      this.config = true;
    }
    else {
      this.config = false;
    }
    // Changement du titre du tab
    if(tab == "Services"){
      this.changeTitle("LISTE DES SERVEURS FHIR REST")
    }
    else if(tab == "Config"){
      this.changeTitle("LISTE DES ETABLISSEMENTS")
    }
    else if(tab == "Transaction"){
      this.changeTitle("LISTE DES TRANSACTIONS HL7")
    }
  }

  // Affiche le bouton de suppression à l'ouverture de l'onglet de config 
  showBtnSuppr(): void {
    this.configForm = true;
  }

  // Modifie le titre du panel
  changeTitle(title: string): void {
    this.FHIRTitle = title;
  }

  // Emit l'action des boutons
  emitActionButton(emitTitle: string) {
    this.actionButton.next(emitTitle);
  }
   
}
