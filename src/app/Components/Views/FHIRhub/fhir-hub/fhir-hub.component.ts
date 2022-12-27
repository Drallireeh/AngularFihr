import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fhirhub',
  templateUrl: './fhir-hub.component.html',
  styleUrls: ['./fhir-hub.component.less']
})
export class FHIRhubComponent implements OnInit {

  config:boolean = false;
  tabActive!:string
;
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tab: any): void {
    this.tabActive = tab;
    if(tab == "Config"){
      this.config = true;
    }
    else {
      this.config = false;
    }
  }
}
