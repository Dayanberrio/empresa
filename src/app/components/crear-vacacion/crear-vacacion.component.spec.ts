import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVacacionComponent } from './crear-vacacion.component';

describe('CrearVacacionComponent', () => {
  let component: CrearVacacionComponent;
  let fixture: ComponentFixture<CrearVacacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearVacacionComponent]
    });
    fixture = TestBed.createComponent(CrearVacacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
