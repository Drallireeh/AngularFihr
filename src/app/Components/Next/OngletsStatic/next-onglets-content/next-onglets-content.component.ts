import { Component, Input, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { PanelService } from 'src/app/Services/panel.service';

@Component({
	selector: 'app-next-onglets-content',
	templateUrl: './next-onglets-content.component.html',
	styleUrls: ['./next-onglets-content.component.less']
})
export class NextOngletsContentComponent implements OnInit {
	@Input('tabTitle') title: string = '';
	@Input() active = false;

	@Input() scrollActive = false;

	scrollInf: Subject<void> = new Subject<void>();
	
	constructor(private scroll: PanelService) { 
		this.scroll.scrollPanel.next(this.title);
	}
	
	ngOnInit(): void {
	}

	onScrollDown(){
		if(this.scrollActive){
			this.scroll.scrollPanel.next(this.title);
		}
	}

}
