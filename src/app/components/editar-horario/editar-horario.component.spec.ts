import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHorarioComponent } from './editar-horario.component';

describe('EditarHorarioComponent', () => {
  let component: EditarHorarioComponent;
  let fixture: ComponentFixture<EditarHorarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarHorarioComponent]
    });
    fixture = TestBed.createComponent(EditarHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
