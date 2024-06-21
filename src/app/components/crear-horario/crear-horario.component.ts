import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Horario } from '../../models/horario';
import { Empleados } from '../../models/empleados';
import { HorarioService } from '../../services/horario.service';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-crear-horario',
  templateUrl: './crear-horario.component.html',
  styleUrls: ['./crear-horario.component.css']
})
export class CrearHorarioComponent implements OnInit {
  horario: Horario = {
    empleado_id: 0,
    dia_semana: 'Lunes',
    hora_entrada: '',
    hora_salida: ''
  };
  empleados: Empleados[] = [];
  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  constructor(
    private horarioService: HorarioService,
    private empleadoService: EmpleadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(): void {
    this.empleadoService.getEmpleados()
      .subscribe(empleados => this.empleados = empleados);
  }

  crearHorario(): void {
    this.horarioService.crearHorario(this.horario)
      .subscribe(() => {
        this.router.navigate(['/listado-horarios']);
      });
  }
}
