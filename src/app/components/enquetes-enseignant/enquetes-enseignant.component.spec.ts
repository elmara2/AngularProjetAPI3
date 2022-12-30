import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquetesEnseignantComponent } from './enquetes-enseignant.component';

describe('EnquetesEnseignantComponent', () => {
  let component: EnquetesEnseignantComponent;
  let fixture: ComponentFixture<EnquetesEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquetesEnseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquetesEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
