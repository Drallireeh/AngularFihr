import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-next-panel-body-filters',
	template: `<div class="panel-body-filters">
    	<ng-content></ng-content>
  	</div>`,
	styleUrls: ['./next-panel-body-filters.component.less']
})
export class NextPanelBodyFiltersComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
