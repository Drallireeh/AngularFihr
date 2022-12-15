import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FhirhubTransactionComponent } from './fhirhub-transaction.component';

describe('FhirhubTransactionComponent', () => {
  let component: FhirhubTransactionComponent;
  let fixture: ComponentFixture<FhirhubTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FhirhubTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FhirhubTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
