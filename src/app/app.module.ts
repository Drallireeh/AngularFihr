import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { StaticsModule } from './Components/Statics/statics.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FHIRhubComponent } from './Components/Views/FHIRhub/fhir-hub/fhir-hub.component';


@NgModule({
	declarations: [
		AppComponent,
  FHIRhubComponent,
	],
	imports: [
		CommonModule,
		BrowserModule,
		AppRoutingModule,
		StaticsModule,
		BrowserAnimationsModule,
		FontAwesomeModule,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
