import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-panel',
  templateUrl: './next-panel.component.html',
  styleUrls: ['./next-panel.component.less']
})
export class NextPanelComponent implements OnInit {
  @Input() idString!: string; 
  @Input() panelTitle!: string; 
  @Input() return!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
