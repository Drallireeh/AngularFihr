import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FHIRhubComponent } from './fhir-hub.component';

describe('FHIRhubComponent', () => {
  let component: FHIRhubComponent;
  let fixture: ComponentFixture<FHIRhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FHIRhubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FHIRhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
