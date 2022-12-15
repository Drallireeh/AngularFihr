import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';
import { NextPanelModule } from './Panel/next-panel/next-panel.module';

@NgModule({
	declarations: [

	],
	imports: [
		CommonModule,
		FontAwesomeModule,
	],
	exports: [
		NextPanelModule,

	]
})
export class NextModule { }