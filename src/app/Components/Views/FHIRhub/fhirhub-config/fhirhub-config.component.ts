import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { FhirConfigInterface } from 'src/app/Interfaces/FhirHub/fhirConfig-interface';
import { FhirConfigFormInterface } from 'src/app/Interfaces/FhirHub/fhirConfigForm-interface';
import { FhirConfigForm2Interface } from 'src/app/Interfaces/FhirHub/fhirCongifForm2-interface';
import { FhirConfigService } from 'src/app/Services/FHIRhub-config/fhir-config.service';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';
import { NumberFormatStyle } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-fhirhub-config',
  templateUrl: './fhirhub-config.component.html',
  styleUrls: ['./fhirhub-config.component.less']
})
export class FhirhubConfigComponent implements OnInit, OnChanges {

  // Liste des datas
	listConfig!: FhirConfigInterface[];
  oneConfig!: FhirConfigInterface;
  formConfig!: FhirConfigFormInterface;
  formConfig2!: FhirConfigForm2Interface;

  // Booléen d'affichage des sections
  elementShow: number = 0;

  // Création des formulaires
  form1 = this.fb.group({
    oid: ['', Validators.required],
    adresse: [''],
    readme: [''],
    index: [''],
    mails: [''],
    auteur: [''],
    mail: ['', Validators.email],
    emetteur: [''],
    certificat: [''],
    mdp: ['']
  });

  form2 = this.fb.group({
    adresseEndpoint: ['', Validators.required],
    adresseEndpointDMP: [''],
    adresseEndpointMSS: [''],
    OIDRacineDMP: [''],
    gestion: false,
    age: [0],
    ageMini: [0],
    reevaluation: [0],
    confidentialite: [[false, false, false]],
    confidentialiteLabel: [["autoriser les documents masqués au praticiens ET au patient", "interdire rendre invisible un document visible par le patient", "interdire rendre invisible un document visible par les représentants du patient"]],
    automatisation: [[false, false, false]],
    automatisationLabel: [["NE PAS demander une confirmation pour rendre visible un document au patient ou ses représentants", "envoyer automatiquement les documents éligibles vers le DMP au moment de leur signature", "envoyer automatiquement les documents éligibles vers la MSS au moment de leur signature"]]
  });

  // Icônes
  faHospital = faHospital;

  // Events à faire remonter au parent
  @Output() showBtnSuppr = new EventEmitter();
  @Output() changeTitle = new EventEmitter<string>();

  // Récupération des infos du parent 
  @Input() data!:string
  @Input() dataTab!: string;

  // test
  @Input() actionButton: Observable<string> = new Observable<string>();

  // Récupère le service de FhirConfig et le formBuilder
  constructor(private FhirConfigData: FhirConfigService, private fb: FormBuilder) {}

  ngOnInit(): void {
    // Init le premier appel des configs
    this.getFhirConfig();

    // test
    this.actionButton.subscribe((test) => {
        if(test == "saveConfig"){
          if(this.elementShow == 3){
            this.onSubmit1();
          }
          else if(this.elementShow == 4){
            this.onSubmit2();
          }
        }
        else if(test == "deleteConfig"){
          console.log('destroy config')
        }
    } )
  }

  ngOnChanges(changes: SimpleChanges) {
    let change: SimpleChange = changes['dataTab']; 

    // Si le tab change, on reset la variable d'affichage des configs
    if(change != undefined){
      this.elementShow = 0;
    }
  }

  // Fonction de récupération et d'affichage des établissements
  getFhirConfig(): void {
		this.FhirConfigData.getFHIRConfig().subscribe(configs => this.listConfig = configs);
    this.elementShow = 0;
	}

  // Fonction de récupération et d'affichage des configs d'un établissement
  getOneFhirConfig(id: number): void {
    this.FhirConfigData.getOneFHIRConfig(id).subscribe(config => this.oneConfig = config);
    this.elementShow = 1;
    this.changeTitle.emit(`Liste des endpoints (${this.oneConfig.name})`);
  }

  // Fonction de récupération et d'affichage d'un endpoint d'une config d'un établissement
  getOneFhirEndpoint(id: number, endp: string): void {
    this.elementShow = 2;
    this.changeTitle.emit(`Configuration commune ${endp} (${this.oneConfig.name})`);
  }

  // Fonction de récupération et d'affichage du formulaire 1 de l'endpoint choisi
  getOneFhirConfigForm(id:number): void {
    this.FhirConfigData.getOneFHIRConfigForm(id).subscribe(config => this.formConfig = config);
    this.elementShow = 3;
    this.showBtnSuppr.emit();
    this.form1.patchValue({
        oid: this.formConfig.oid,
        adresse: this.formConfig.adresse,
        readme: this.formConfig.readme,
        index: this.formConfig.index,
        mails: this.formConfig.mails,
        auteur: this.formConfig.auteur,
        mail: this.formConfig.mail,
        emetteur: this.formConfig.emetteur,
        mdp: this.formConfig.mdp
    })
  }

  // Fonction de récupération et d'affichage du formulaire 2 de l'endpoint choisi
  getOneFhirConfigForm2(id:number): void {
    this.FhirConfigData.getOneFHIRConfigForm2(id).subscribe(config => this.formConfig2 = config);
    this.elementShow = 4;
    this.showBtnSuppr.emit();
    this.form2.patchValue({
      adresseEndpoint: this.formConfig2.adresseEndpoint,
      adresseEndpointDMP: this.formConfig2.adresseEndpointDMP,
      adresseEndpointMSS: this.formConfig2.adresseEndpointMSS,
      OIDRacineDMP: this.formConfig2.OIDRacineDMP,
      gestion: this.formConfig2.gestion,
      age: this.formConfig2.age,
      ageMini: this.formConfig2.ageMini,
      reevaluation: this.formConfig2.reevaluation,
      confidentialite: this.formConfig2.confidentialite,
      confidentialiteLabel: this.formConfig2.confidentialiteLabel,
      automatisation: this.formConfig2.automatisation,
      automatisationLabel: this.formConfig2.automatisationLabel
    })
  }

  test(string:any){
    console.log("I work")
  }

  // Fonctions au submit des formulaires
  onSubmit1(){
    console.log(this.form1.value)
  }

  onSubmit2(){
    console.log(this.form2.value)
  }
}