import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FHIRhubModule } from './FHIRhub/fhir-hub/fhir-hub.module'
import { NextModule } from '../Next/next.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FHIRhubModule,
    NextModule
  ]
})
export class ViewsModule { }
