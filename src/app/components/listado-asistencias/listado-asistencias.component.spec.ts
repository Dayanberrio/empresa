import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAsistenciasComponent } from './listado-asistencias.component';

describe('ListadoAsistenciasComponent', () => {
  let component: ListadoAsistenciasComponent;
  let fixture: ComponentFixture<ListadoAsistenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoAsistenciasComponent]
    });
    fixture = TestBed.createComponent(ListadoAsistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
