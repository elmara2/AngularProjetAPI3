import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosEnseignantComponent } from './infos-enseignant.component';

describe('InfosEnseignantComponent', () => {
  let component: InfosEnseignantComponent;
  let fixture: ComponentFixture<InfosEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosEnseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
