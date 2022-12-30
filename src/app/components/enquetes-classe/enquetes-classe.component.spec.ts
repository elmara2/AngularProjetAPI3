import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquetesClasseComponent } from './enquetes-classe.component';

describe('EnquetesClasseComponent', () => {
  let component: EnquetesClasseComponent;
  let fixture: ComponentFixture<EnquetesClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquetesClasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquetesClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
