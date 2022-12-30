import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquetesSalleComponent } from './enquetes-salle.component';

describe('EnquetesSalleComponent', () => {
  let component: EnquetesSalleComponent;
  let fixture: ComponentFixture<EnquetesSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquetesSalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquetesSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
