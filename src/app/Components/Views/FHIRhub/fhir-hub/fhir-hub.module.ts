import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FhirhubConfigComponent } from '../fhirhub-config/fhirhub-config.component';
import { FhirhubServicesComponent } from '../fhirhub-services/fhirhub-services.component';
import { FhirhubTransactionComponent } from '../fhirhub-transaction/fhirhub-transaction.component';


@NgModule({
  declarations: [
    FhirhubConfigComponent,
    FhirhubServicesComponent,
    FhirhubTransactionComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class FHIRhubModule { }