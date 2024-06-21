import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVacacionesComponent } from './listado-vacaciones.component';

describe('ListadoVacacionesComponent', () => {
  let component: ListadoVacacionesComponent;
  let fixture: ComponentFixture<ListadoVacacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoVacacionesComponent]
    });
    fixture = TestBed.createComponent(ListadoVacacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
