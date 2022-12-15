import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NextOngletsContentComponent } from "../next-onglets-content/next-onglets-content.component";
import { NextOngletsComponent } from "./next-onglets.component";

@NgModule({
	declarations: [
        NextOngletsComponent,
        NextOngletsContentComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		NextOngletsComponent,
        NextOngletsContentComponent
	]
})
export class NextOngletsModule { }