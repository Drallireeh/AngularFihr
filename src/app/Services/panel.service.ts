import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  // SharedService
  scrollPanel: Subject<Object> = new Subject<Object>();

  panelScrolled(idPanel: string) {
		this.scrollPanel.next(idPanel);
	}

  constructor() { }
}
