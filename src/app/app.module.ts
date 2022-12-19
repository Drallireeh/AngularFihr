import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { StaticsModule } from './Components/Statics/statics.module';
import { NextModule } from './Components/Next/next.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewsModule } from './Components/Views/views.module';


@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		CommonModule,
		BrowserModule,
		AppRoutingModule,
		StaticsModule,
    	NextModule,
		ViewsModule,
		BrowserAnimationsModule,
		FontAwesomeModule,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
