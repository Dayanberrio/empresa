import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoHorariosComponent } from './listado-horarios.component';

describe('ListadoHorariosComponent', () => {
  let component: ListadoHorariosComponent;
  let fixture: ComponentFixture<ListadoHorariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoHorariosComponent]
    });
    fixture = TestBed.createComponent(ListadoHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
