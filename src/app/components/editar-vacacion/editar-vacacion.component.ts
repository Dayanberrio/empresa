// editar-vacacion.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacacion } from '../../models/vacacion';
import { Empleados } from '../../models/empleados'; // Asegúrate de tener el modelo correcto aquí
import { VacacionesService } from '../../services/vacaciones.service';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-editar-vacacion',
  templateUrl: './editar-vacacion.component.html',
  styleUrls: ['./editar-vacacion.component.css']
})
export class EditarVacacionComponent implements OnInit {
  vacacion: Vacacion = {
    empleado_id: 0,
    fecha_inicio: '',
    fecha_fin: '',
    motivo: ''
  };
  empleados: Empleados[] = [];
  vacacionId!: number;

  constructor(
    private vacacionesService: VacacionesService,
    private empleadoService: EmpleadoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.vacacionId = this.route.snapshot.params['id'];
    this.getVacacion(this.vacacionId);
    this.getEmpleados();
  }

  getVacacion(id: number): void {
    this.vacacionesService.getVacacion(id)
      .subscribe(vacacion => this.vacacion = vacacion);
  }

  getEmpleados(): void {
    this.empleadoService.getEmpleados()
      .subscribe(empleados => this.empleados = empleados);
  }

  guardarCambios(): void {
    this.vacacionesService.actualizarVacacion(this.vacacionId, this.vacacion)
      .subscribe(() => {
        this.router.navigate(['/vacaciones']);
      });
  }
}
