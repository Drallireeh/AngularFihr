import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextPanelComponent } from './next-panel.component';
import { NextPanelHeadingComponent } from '../next-panel-heading/next-panel-heading.component';
import { NextPanelBodyComponent } from '../next-panel-body/next-panel-body.component';
import { NextPanelBodyFiltersComponent } from '../next-panel-body-filters/next-panel-body-filters.component';
import { NextPanelActionsComponent } from '../next-panel-actions/next-panel-actions.component';

@NgModule({
  declarations: [
    NextPanelComponent,
    NextPanelHeadingComponent,
    NextPanelBodyComponent,
    NextPanelBodyFiltersComponent,
    NextPanelActionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NextPanelComponent,
    NextPanelBodyComponent,
    NextPanelBodyFiltersComponent,
    NextPanelActionsComponent
  ],
})
export class NextPanelModule { }
