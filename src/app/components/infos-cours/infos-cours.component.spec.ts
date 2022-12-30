import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosCoursComponent } from './infos-cours.component';

describe('InfosCoursComponent', () => {
  let component: InfosCoursComponent;
  let fixture: ComponentFixture<InfosCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
