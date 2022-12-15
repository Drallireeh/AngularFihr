import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPanelActionsComponent } from './next-panel-actions.component';

describe('NextPanelActionsComponent', () => {
  let component: NextPanelActionsComponent;
  let fixture: ComponentFixture<NextPanelActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextPanelActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextPanelActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
