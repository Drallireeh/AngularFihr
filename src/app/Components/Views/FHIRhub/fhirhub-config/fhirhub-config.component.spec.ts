import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FhirhubConfigComponent } from './fhirhub-config.component';

describe('FhirhubConfigComponent', () => {
  let component: FhirhubConfigComponent;
  let fixture: ComponentFixture<FhirhubConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FhirhubConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FhirhubConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
