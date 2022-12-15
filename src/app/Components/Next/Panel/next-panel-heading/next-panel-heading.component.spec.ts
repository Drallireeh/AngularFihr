import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPanelHeadingComponent } from './next-panel-heading.component';

describe('NextPanelHeadingComponent', () => {
  let component: NextPanelHeadingComponent;
  let fixture: ComponentFixture<NextPanelHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextPanelHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextPanelHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
