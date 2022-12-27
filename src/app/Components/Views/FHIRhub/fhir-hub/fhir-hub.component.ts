import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fhirhub',
  templateUrl: './fhir-hub.component.html',
  styleUrls: ['./fhir-hub.component.less']
})
export class FHIRhubComponent implements OnInit {

  config:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tab: any): void {
    if(tab == "Config"){
      this.config = true;
    }
    else {
      this.config = false;
    }
  }
}
