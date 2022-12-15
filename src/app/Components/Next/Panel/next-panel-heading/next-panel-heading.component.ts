import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-panel-heading',
  templateUrl: './next-panel-heading.component.html',
  styleUrls: ['./next-panel-heading.component.less']
})
export class NextPanelHeadingComponent implements OnInit {
  @Input() title!: string;
  @Input() return: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
