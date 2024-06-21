import { Component, OnInit } from '@angular/core';
import { Horario } from '../../models/horario';
import { Empleados } from '../../models/empleados';
import { HorarioService } from '../../services/horario.service';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-listado-horarios',
  templateUrl: './listado-horarios.component.html',
  styleUrls: ['./listado-horarios.component.css']
})
export class ListadoHorariosComponent implements OnInit {
  horarios: Horario[] = [];
  empleados: Empleados[] = [];

  constructor(
    private horarioService: HorarioService,
    private empleadoService: EmpleadoService
  ) { }

  ngOnInit(): void {
    this.getHorarios();
    this.getEmpleados();
  }

  getHorarios(): void {
    this.horarioService.getHorarios()
      .subscribe(horarios => this.horarios = horarios);
  }

  getEmpleados(): void {
    this.empleadoService.getEmpleados()
      .subscribe(empleados => this.empleados = empleados);
  }

  getEmpleadoNombre(empleado_id: number): string {
    const empleado = this.empleados.find(e => e.empleado_id === empleado_id);
    return empleado ? `${empleado.nombre} ${empleado.apellido}` : 'No encontrado';
  }

  deleteHorario(horario_id: number | undefined): void {
    if (confirm('¿Está seguro que desea eliminar este horario?')) {
      if (horario_id !== undefined) {
        this.horarioService.eliminarHorario(horario_id)
          .subscribe(() => {
            this.getHorarios();
          });
      }
    }
  }
}
