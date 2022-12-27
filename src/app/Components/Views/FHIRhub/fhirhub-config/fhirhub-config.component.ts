import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { FhirConfigInterface } from 'src/app/Interfaces/FhirHub/fhirConfig-interface';
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

  // Liste des booléens d'affichage
  base: boolean = true;
  endpoint: boolean = false;
  configuration: boolean = false;

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
  }

  getFhirConfig(): void {
		this.FhirConfigData.getFHIRConfig().subscribe(configs => this.listConfig = configs);
    this.base = true;
    this.endpoint = false;
    this.configuration = false;
	}

  getOneFhirConfig(id: number): void {
    this.FhirConfigData.getOneFHIRConfig(id).subscribe(config => this.oneConfig = config);
    this.base = false;
    this.endpoint = true;
    this.configuration = false;
  }

  getOneFhirEndpoint(id: number): void {
    this.base = false;
    this.endpoint = false;
    this.configuration = true;
  }

  updateAllergieEvent(): void {
    console.log('oui')
  }

}
