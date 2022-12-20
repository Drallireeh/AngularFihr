import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextLigneComponent } from './next-ligne.component';

describe('NextLigneComponent', () => {
  let component: NextLigneComponent;
  let fixture: ComponentFixture<NextLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextLigneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
