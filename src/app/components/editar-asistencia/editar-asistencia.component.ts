import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsistenciaService } from '../../services/asistencia.service';
import { Asistencia } from '../../models/asistencia';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleados } from '../../models/empleados';

@Component({
  selector: 'app-editar-asistencia',
  templateUrl: './editar-asistencia.component.html',
  styleUrls: ['./editar-asistencia.component.css']
})
export class EditarAsistenciaComponent implements OnInit {
  asistencia: Asistencia | undefined;
  empleados: Empleados[] = [];

  constructor(
    private asistenciaService: AsistenciaService,
    private empleadoService: EmpleadoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAsistencia();
    this.loadEmpleados();
  }

  loadAsistencia(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.asistenciaService.getAsistencia(id).subscribe(data => {
      this.asistencia = data;
    });
  }

  loadEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }

  actualizarAsistencia(): void {
    if (this.asistencia) {
      this.asistenciaService.actualizarAsistencia(this.asistencia.asistencia_id!, this.asistencia).subscribe(() => {
        this.router.navigate(['/asistencia']);
      });
    }
  }
}
