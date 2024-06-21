// src/app/components/crear-vacacion/crear-vacacion.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vacacion } from '../../models/vacacion';
import { VacacionesService } from '../../services/vacaciones.service';
import { Empleados } from '../../models/empleados';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-crear-vacacion',
  templateUrl: './crear-vacacion.component.html',
  styleUrls: ['./crear-vacacion.component.css']
})
export class CrearVacacionComponent implements OnInit {
  vacacion: Vacacion = {
    empleado_id: 0,
    fecha_inicio: "",
    fecha_fin: "",
    motivo: ''
  };
  empleados: Empleados[] = [];

  constructor(
    private vacacionService: VacacionesService,
    private empleadoService: EmpleadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(): void {
    this.empleadoService.getEmpleados()
      .subscribe(empleados => {
        this.empleados = empleados;
      });
  }

  guardarVacacion(): void {
    this.vacacionService.crearVacacion(this.vacacion)
      .subscribe(() => {
        this.router.navigate(['/vacaciones']);
      });
  }
}
