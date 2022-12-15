import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPanelBodyFiltersComponent } from './next-panel-body-filters.component';

describe('NextPanelBodyFiltersComponent', () => {
  let component: NextPanelBodyFiltersComponent;
  let fixture: ComponentFixture<NextPanelBodyFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextPanelBodyFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextPanelBodyFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
