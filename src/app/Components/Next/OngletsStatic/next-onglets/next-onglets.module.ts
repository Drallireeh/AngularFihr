import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NextOngletsContentComponent } from "../next-onglets-content/next-onglets-content.component";
import { NextOngletsComponent } from "./next-onglets.component";
import { NextPanelModule } from "../../Panel/next-panel/next-panel.module";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
	declarations: [
        NextOngletsComponent,
        NextOngletsContentComponent
	],
	imports: [
		CommonModule,
		NextPanelModule,
		InfiniteScrollModule
	],
	exports: [
		NextOngletsComponent,
        NextOngletsContentComponent
	]
})
export class NextOngletsModule { }