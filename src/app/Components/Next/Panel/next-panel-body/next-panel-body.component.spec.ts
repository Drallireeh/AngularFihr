import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPanelBodyComponent } from './next-panel-body.component';

describe('NextPanelBodyComponent', () => {
  let component: NextPanelBodyComponent;
  let fixture: ComponentFixture<NextPanelBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextPanelBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextPanelBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
