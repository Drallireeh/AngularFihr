import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { StaticsModule } from './Components/Statics/statics.module';
import { NextModule } from './Components/Next/next.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FHIRhubComponent } from './Components/Views/FHIRhub/fhir-hub/fhir-hub.component';
import { FhirhubServicesComponent } from './Components/Views/FHIRhub/fhirhub-services/fhirhub-services.component';
import { FhirhubTransactionComponent } from './Components/Views/FHIRhub/fhirhub-transaction/fhirhub-transaction.component';
import { FhirhubConfigComponent } from './Components/Views/FHIRhub/fhirhub-config/fhirhub-config.component';


@NgModule({
	declarations: [
		AppComponent,
  FHIRhubComponent,
  FhirhubServicesComponent,
  FhirhubTransactionComponent,
  FhirhubConfigComponent,
	],
	imports: [
		CommonModule,
		BrowserModule,
		AppRoutingModule,
		StaticsModule,
    NextModule,
		BrowserAnimationsModule,
		FontAwesomeModule,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
