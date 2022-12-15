import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FhirhubServicesComponent } from './fhirhub-services.component';

describe('FhirhubServicesComponent', () => {
  let component: FhirhubServicesComponent;
  let fixture: ComponentFixture<FhirhubServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FhirhubServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FhirhubServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
