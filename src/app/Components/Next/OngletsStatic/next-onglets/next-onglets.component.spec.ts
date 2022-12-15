import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextOngletsComponent } from './next-onglets.component';

describe('NextOngletsComponent', () => {
  let component: NextOngletsComponent;
  let fixture: ComponentFixture<NextOngletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextOngletsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextOngletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
