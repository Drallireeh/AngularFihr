import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextListeComponent } from './next-liste.component';

describe('NextListeComponent', () => {
  let component: NextListeComponent;
  let fixture: ComponentFixture<NextListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
