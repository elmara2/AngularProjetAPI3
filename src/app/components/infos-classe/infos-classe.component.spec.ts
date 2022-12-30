import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosClasseComponent } from './infos-classe.component';

describe('InfosClasseComponent', () => {
  let component: InfosClasseComponent;
  let fixture: ComponentFixture<InfosClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosClasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
