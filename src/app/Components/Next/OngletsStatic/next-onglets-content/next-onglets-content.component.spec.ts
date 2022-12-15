import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextOngletsContentComponent } from './next-onglets-content.component';

describe('NextOngletsContentComponent', () => {
  let component: NextOngletsContentComponent;
  let fixture: ComponentFixture<NextOngletsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextOngletsContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextOngletsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
