import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { FhirConfigInterface } from 'src/app/Interfaces/FhirHub/fhirConfig-interface';
import { FhirConfigFormInterface } from 'src/app/Interfaces/FhirHub/fhirConfigForm-interface';
import { FhirConfigForm2Interface } from 'src/app/Interfaces/FhirHub/fhirCongifForm2-interface';
import { FhirConfigService } from 'src/app/Services/FHIRhub-config/fhir-config.service';

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

  // Liste des booléens d'affichage
  base: boolean = true;
  endpoint: boolean = false;
  configuration: boolean = false;
  form: boolean = false;
  form2: boolean = false;

  // Endpoint title
  endpointTitle: string = "";

  @Input() data!:string
  @Input() dataTab!: string;

  constructor(private FhirConfigData: FhirConfigService) { }

  ngOnInit(): void {
    this.getFhirConfig();
  }

  ngOnChanges(changes: SimpleChanges) {
    let change: SimpleChange = changes['dataTab']; 

    this.base = true;
    this.endpoint = false;
    this.configuration = false;
    this.form = false;
    this.form2 = false;
  }

  getFhirConfig(): void {
		this.FhirConfigData.getFHIRConfig().subscribe(configs => this.listConfig = configs);
    this.base = true;
    this.endpoint = false;
    this.configuration = false;
    this.form = false;
    this.form2 = false;
	}

  getOneFhirConfig(id: number): void {
    this.FhirConfigData.getOneFHIRConfig(id).subscribe(config => this.oneConfig = config);
    this.base = false;
    this.endpoint = true;
    this.configuration = false;
    this.form = false;
    this.form2 = false;
  }

  getOneFhirEndpoint(id: number): void {
    this.base = false;
    this.endpoint = false;
    this.configuration = true;
    this.form = false;
    this.form2 = false;
  }

  getOneFhirConfigForm(id:number): void {
    this.FhirConfigData.getOneFHIRConfigForm(id).subscribe(config => this.formConfig = config);
    this.base = false;
    this.endpoint = false;
    this.configuration = false;
    this.form = true;
    this.form2 = false;
  }

  getOneFhirConfigForm2(id:number): void {
    this.FhirConfigData.getOneFHIRConfigForm2(id).subscribe(config => this.formConfig2 = config);
    this.base = false;
    this.endpoint = false;
    this.configuration = false;
    this.form = false;
    this.form2 = true;
  }
}