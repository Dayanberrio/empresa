import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAsistenciaComponent } from './crear-asistencia.component';

describe('CrearAsistenciaComponent', () => {
  let component: CrearAsistenciaComponent;
  let fixture: ComponentFixture<CrearAsistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearAsistenciaComponent]
    });
    fixture = TestBed.createComponent(CrearAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
