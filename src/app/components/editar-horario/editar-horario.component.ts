import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Horario } from '../../models/horario';
import { Empleados } from '../../models/empleados';
import { HorarioService } from '../../services/horario.service';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-editar-horario',
  templateUrl: './editar-horario.component.html',
  styleUrls: ['./editar-horario.component.css']
})
export class EditarHorarioComponent implements OnInit {
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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEmpleados();
    this.getHorario(this.route.snapshot.params['id']);
  }

  getEmpleados(): void {
    this.empleadoService.getEmpleados()
      .subscribe(empleados => this.empleados = empleados);
  }

  getHorario(id: number): void {
    this.horarioService.getHorario(id)
      .subscribe(horario => this.horario = horario);
  }

  actualizarHorario(): void {
    this.horarioService.actualizarHorario(this.horario.horario_id!, this.horario)
      .subscribe(() => {
        this.router.navigate(['/listado-horarios']);
      });
  }
}

