import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosSalleComponent } from './infos-salle.component';

describe('InfosSalleComponent', () => {
  let component: InfosSalleComponent;
  let fixture: ComponentFixture<InfosSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosSalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
