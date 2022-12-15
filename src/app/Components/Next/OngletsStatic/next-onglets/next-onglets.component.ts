import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { NextOngletsContentComponent } from '../next-onglets-content/next-onglets-content.component';

@Component({
	selector: 'app-next-onglets',
	templateUrl: './next-onglets.component.html',
	styleUrls: ['./next-onglets.component.less']
})
export class NextOngletsComponent implements AfterContentInit {
	// liste des onglets
	@ContentChildren(NextOngletsContentComponent) tabs!: QueryList<NextOngletsContentComponent>;

	// On peut se connecter à cet event pour savoir l'onglet actif
	@Output() tabSelected = new EventEmitter<string>();

	// Quand ContentChildren est init
	ngAfterContentInit() {
		// récupération des différents onglets 
		let activeTabs = this.tabs.filter((tab) => tab.active);

		// S'il n'y a pas d'onglets actif, on active le premier
		if (activeTabs.length === 0) {
			this.selectTab(this.tabs.first);
		}
	}

	selectTab(tab: NextOngletsContentComponent, e?: Event) {
		if (e) e.preventDefault(); // Prevent le reload de la page

		// On désactive tous les onglets
		this.tabs.toArray().forEach(tab => tab.active = false);

		// Activation de l'onglet sur lequel l'utilisateur clic
		tab.active = true;

		// emit que l'on change d'onglet
		this.tabSelected.emit(tab.title);
	}

	constructor() { }
}
