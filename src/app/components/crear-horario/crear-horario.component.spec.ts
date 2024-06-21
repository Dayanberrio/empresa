import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHorarioComponent } from './crear-horario.component';

describe('CrearHorarioComponent', () => {
  let component: CrearHorarioComponent;
  let fixture: ComponentFixture<CrearHorarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearHorarioComponent]
    });
    fixture = TestBed.createComponent(CrearHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
