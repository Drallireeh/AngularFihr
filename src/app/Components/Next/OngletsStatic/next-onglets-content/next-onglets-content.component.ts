import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-next-onglets-content',
	templateUrl: './next-onglets-content.component.html',
	styleUrls: ['./next-onglets-content.component.less']
})
export class NextOngletsContentComponent implements OnInit {
	@Input('tabTitle') title: string = '';
	@Input() active = false;
	
	constructor() { }

	ngOnInit(): void {
	}

}
