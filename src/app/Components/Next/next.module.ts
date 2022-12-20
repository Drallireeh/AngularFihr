import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';
import { NextPanelModule } from './Panel/next-panel/next-panel.module';
import { NextOngletsModule } from './OngletsStatic/next-onglets/next-onglets.module';
import { NextListeModule } from './Liste/next-liste/next-liste.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		FontAwesomeModule,
	],
	exports: [
		NextPanelModule,
		NextOngletsModule,
		NextListeModule
	]
})
export class NextModule { }