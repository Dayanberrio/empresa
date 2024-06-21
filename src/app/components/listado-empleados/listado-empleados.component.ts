// src/app/components/listado-empleados/listado-empleados.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleados } from '../../models/empleados';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.css']
})
export class ListadoEmpleadosComponent implements OnInit {
  empleados: Empleados[] = [];

  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(): void {
    this.empleadoService.getEmpleados()
      .subscribe(empleados => this.empleados = empleados);
  }

              deleteEmpleado(empleado_id: number |  undefined): void {
                if (confirm('¿Está seguro que desea eliminar este empleado?')) {
                  if(empleado_id !== undefined){
                  this.empleadoService.eliminarEmpleado(empleado_id)
                    .subscribe(() => {
                     this.getEmpleados();
                    })};
                }
              }
}


