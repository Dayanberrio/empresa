import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleados } from '../../models/empleados';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent {
  empleado: Empleados = {
    empleado_id: 0,
    nombre: '',
    apellido: '',
    telefono:0,
    email:'',
    direccion:'',
    puesto: '',
    fecha_contratacion: '',
    salario: 0
  };

  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  onSubmit(): void {
    console.log('Formulario enviado', this.empleado); // Añadido para depuración
    this.empleadoService.crearEmpleado(this.empleado).subscribe({
      next: (response) => {
        console.log('Empleado creado:', response);
        this.router.navigate(['/empleados']);
      },
      error: (error) => {
        console.error('Error al crear el empleado:', error);
      }
    });
  }
}
