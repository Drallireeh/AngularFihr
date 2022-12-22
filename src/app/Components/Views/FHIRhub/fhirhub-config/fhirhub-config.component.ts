import { Component, OnInit } from '@angular/core';
import { FhirConfigInterface } from 'src/app/Interfaces/FhirHub/fhirConfig-interface';
import { FhirConfigService } from 'src/app/Services/FHIRhub-config/fhir-config.service';

@Component({
  selector: 'app-fhirhub-config',
  templateUrl: './fhirhub-config.component.html',
  styleUrls: ['./fhirhub-config.component.less']
})
export class FhirhubConfigComponent implements OnInit {

  // Liste des datas
	listConfig!: FhirConfigInterface[];
  oneConfig!: FhirConfigInterface;

  // Liste des booléens d'affichage
  base: boolean = true;
  endpoint: boolean = false;

  // Endpoint title
  endpointTitle: string = "";

  constructor(private FhirConfigData: FhirConfigService) { }

  ngOnInit(): void {
    this.getFhirConfig();
  }

  getFhirConfig(): void {
		this.FhirConfigData.getFHIRConfig().subscribe(configs => this.listConfig = configs);
	}

  getOneFhirConfig(id: number): void {
    this.FhirConfigData.getOneFHIRConfig(id).subscribe(config => this.oneConfig = config);
  }

}
