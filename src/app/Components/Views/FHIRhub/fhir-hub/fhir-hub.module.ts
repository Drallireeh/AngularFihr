import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FHIRhubComponent } from '../fhir-hub/fhir-hub.component'
import { FhirhubConfigComponent } from '../fhirhub-config/fhirhub-config.component';
import { FhirhubServicesComponent } from '../fhirhub-services/fhirhub-services.component';
import { FhirhubTransactionComponent } from '../fhirhub-transaction/fhirhub-transaction.component';
import { NextModule } from '../../../Next/next.module';


@NgModule({
  declarations: [
    FHIRhubComponent,
    FhirhubConfigComponent,
    FhirhubServicesComponent,
    FhirhubTransactionComponent
  ],
  imports: [
    CommonModule,
    NextModule
  ]
})
export class FHIRhubModule { }