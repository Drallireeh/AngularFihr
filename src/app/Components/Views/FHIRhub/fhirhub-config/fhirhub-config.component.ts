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

  constructor(private FhirConfigData: FhirConfigService) { }

  ngOnInit(): void {
    this.getFhirService();
  }

  getFhirService(): void {
		this.FhirConfigData.getFHIRConfig().subscribe(configs => this.listConfig = configs);
	}

}
