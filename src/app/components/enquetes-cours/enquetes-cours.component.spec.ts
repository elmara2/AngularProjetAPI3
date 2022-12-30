import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquetesCoursComponent } from './enquetes-cours.component';

describe('EnquetesCoursComponent', () => {
  let component: EnquetesCoursComponent;
  let fixture: ComponentFixture<EnquetesCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquetesCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquetesCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
