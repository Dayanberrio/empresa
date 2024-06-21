// src/app/components/editar-empleado/editar-empleado.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleados } from '../../models/empleados';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit  {
  empleado: Empleados = {
    empleado_id: 0,
    nombre:'',
    apellido: '',
    telefono:0,
    email:'',
    direccion:'',
    puesto: '',
    fecha_contratacion: "",
    salario: 0
  };



  constructor(
    private empleadoService: EmpleadoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmpleado();
  }

  getEmpleado(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.empleadoService.getEmpleado(Number(id)).subscribe((data: Empleados) => {
        this.empleado = data;
      });
    }
  }

  actualizarEmpleado(): void {
    if (this.empleado.empleado_id !== undefined) {
      this.empleadoService.actualizarEmpleado(this.empleado.empleado_id, this.empleado).subscribe(() => {
        this.router.navigate(['/empleados']);
      });
    }
  }
}

