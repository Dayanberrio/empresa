import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVacacionComponent } from './editar-vacacion.component';

describe('EditarVacacionComponent', () => {
  let component: EditarVacacionComponent;
  let fixture: ComponentFixture<EditarVacacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarVacacionComponent]
    });
    fixture = TestBed.createComponent(EditarVacacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
