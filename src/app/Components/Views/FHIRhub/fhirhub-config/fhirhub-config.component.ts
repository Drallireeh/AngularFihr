import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { FhirConfigInterface } from 'src/app/Interfaces/FhirHub/fhirConfig-interface';
import { FhirConfigFormInterface } from 'src/app/Interfaces/FhirHub/fhirConfigForm-interface';
import { FhirConfigForm2Interface } from 'src/app/Interfaces/FhirHub/fhirCongifForm2-interface';
import { FhirConfigService } from 'src/app/Services/FHIRhub-config/fhir-config.service';
import { faHospital } from '@fortawesome/free-solid-svg-icons';

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

  // Booléen d'affichage
  elementShow: number = 0;

  faHospital = faHospital;

  @Output() showBtnSuppr = new EventEmitter();
  @Output() changeTitle = new EventEmitter<string>();

  // Endpoint title
  endpointTitle: string = "";

  @Input() data!:string
  @Input() dataTab!: string;

  constructor(private FhirConfigData: FhirConfigService) {}

  ngOnInit(): void {
    this.getFhirConfig();
  }

  ngOnChanges(changes: SimpleChanges) {
    let change: SimpleChange = changes['dataTab']; 

    this.elementShow = 0;
  }

  getFhirConfig(): void {
		this.FhirConfigData.getFHIRConfig().subscribe(configs => this.listConfig = configs);
    this.elementShow = 0;
	}

  getOneFhirConfig(id: number): void {
    this.FhirConfigData.getOneFHIRConfig(id).subscribe(config => this.oneConfig = config);
    this.elementShow = 1;
    this.changeTitle.emit(`Liste des endpoints (${this.oneConfig.name})`);
  }

  getOneFhirEndpoint(id: number, endp: string): void {
    this.elementShow = 2;
    this.changeTitle.emit(`Configuration commune ${endp} (${this.oneConfig.name})`);
  }

  getOneFhirConfigForm(id:number): void {
    this.FhirConfigData.getOneFHIRConfigForm(id).subscribe(config => this.formConfig = config);
    this.elementShow = 3;
    this.showBtnSuppr.emit();
  }

  getOneFhirConfigForm2(id:number): void {
    this.FhirConfigData.getOneFHIRConfigForm2(id).subscribe(config => this.formConfig2 = config);
    this.elementShow = 4;
    this.showBtnSuppr.emit();
  }
}