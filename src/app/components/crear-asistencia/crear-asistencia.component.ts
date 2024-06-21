import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsistenciaService } from '../../services/asistencia.service';
import { Asistencia } from '../../models/asistencia';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleados } from '../../models/empleados';

@Component({
  selector: 'app-crear-asistencia',
  templateUrl: './crear-asistencia.component.html',
  styleUrls: ['./crear-asistencia.component.css']
})
export class CrearAsistenciaComponent implements OnInit {
  asistencia: Asistencia = {
    empleado_id: 0,
    fecha: new Date(),
    hora_entrada: '',
    hora_salida: ''
  };
  empleados: Empleados[] = [];

  constructor(
    private asistenciaService: AsistenciaService,
    private empleadoService: EmpleadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadEmpleados();
  }

  loadEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }

  guardarAsistencia(): void {
    this.asistenciaService.crearAsistencia(this.asistencia).subscribe(() => {
      this.router.navigate(['/asistencia']);
    });
  }
}
