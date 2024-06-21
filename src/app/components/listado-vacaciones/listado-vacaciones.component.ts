// src/app/components/listado-vacaciones/listado-vacaciones.component.ts

import { Component, OnInit } from '@angular/core';
import { Vacacion } from '../../models/vacacion';
import { VacacionesService } from '../../services/vacaciones.service';
import { Empleados } from '../../models/empleados';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-listado-vacaciones',
  templateUrl: './listado-vacaciones.component.html',
  styleUrls: ['./listado-vacaciones.component.css']
})
export class ListadoVacacionesComponent implements OnInit {
  vacaciones: Vacacion[] = [];
  empleados: Empleados[] = [];

  constructor(private vacacionesService: VacacionesService, private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.getVacaciones();
    this.loadEmpleados();
  }

  getVacaciones(): void {
    this.vacacionesService.getVacaciones()
      .subscribe(vacaciones => this.vacaciones = vacaciones);
  }

  loadEmpleados(): void {
    this.empleadoService.getEmpleados()
      .subscribe(empleados => this.empleados = empleados);
  }

  getEmpleadoNombre(id: number): string {
    const empleado = this.empleados.find(e => e.empleado_id === id);
    return empleado ? `${empleado.nombre} ${empleado.apellido}` : 'Desconocido';
  }

  deleteVacacion(vacacion_id: number | undefined): void {
    if (confirm('¿Está seguro que desea eliminar esta vacación?')) {
      if (vacacion_id !== undefined) {
        this.vacacionesService.eliminarVacacion(vacacion_id)
          .subscribe(() => {
            this.getVacaciones(); // Recargar la lista después de eliminar
          });
      }
    }
  }
}
