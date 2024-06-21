import { Component, OnInit } from '@angular/core';
import { Asistencia } from '../../models/asistencia';
import { Empleados } from '../../models/empleados';
import { AsistenciaService } from '../../services/asistencia.service';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-listado-asistencias',
  templateUrl: './listado-asistencias.component.html',
  styleUrls: ['./listado-asistencias.component.css']
})
export class ListadoAsistenciasComponent implements OnInit {
  asistencias: Asistencia[] = [];
  empleados: Empleados[] = [];

  constructor(
    private asistenciaService: AsistenciaService,
    private empleadoService: EmpleadoService
  ) { }

  ngOnInit(): void {
    this.getAsistencias();
    this.getEmpleados();
  }

  getAsistencias(): void {
    this.asistenciaService.getAsistencias()
      .subscribe(asistencias => this.asistencias = asistencias);
  }

  getEmpleados(): void {
    this.empleadoService.getEmpleados()
      .subscribe(empleados => this.empleados = empleados);
  }

  getEmpleadoNombre(empleado_id: number): string {
    const empleado = this.empleados.find(e => e.empleado_id === empleado_id);
    return empleado ? `${empleado.nombre} ${empleado.apellido}` : 'No encontrado';
  }

  deleteAsistencia(asistencia_id: number | undefined): void {
    if (confirm('¿Está seguro que desea eliminar esta asistencia?')) {
      if (asistencia_id !== undefined) {
        this.asistenciaService.eliminarAsistencia(asistencia_id)
          .subscribe(() => {
            this.getAsistencias();
          });
      }
    }
  }
}


