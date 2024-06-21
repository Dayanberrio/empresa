// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoEmpleadosComponent } from './components/listado-empleados/listado-empleados.component';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { ListadoVacacionesComponent } from './components/listado-vacaciones/listado-vacaciones.component';
import { CrearVacacionComponent } from './components/crear-vacacion/crear-vacacion.component';
import { EditarVacacionComponent } from './components/editar-vacacion/editar-vacacion.component';
import { ListadoAsistenciasComponent } from './components/listado-asistencias/listado-asistencias.component';
import { CrearAsistenciaComponent } from './components/crear-asistencia/crear-asistencia.component';
import { EditarAsistenciaComponent } from './components/editar-asistencia/editar-asistencia.component';
import { ListadoHorariosComponent } from './components/listado-horarios/listado-horarios.component';
import { CrearHorarioComponent } from './components/crear-horario/crear-horario.component';
import { EditarHorarioComponent } from './components/editar-horario/editar-horario.component';

const routes: Routes = [
  { path: 'empleados', component: ListadoEmpleadosComponent },
  { path: 'crear-empleado', component: CrearEmpleadoComponent },
  { path: 'editar-empleado/:id', component: EditarEmpleadoComponent },
  { path: 'vacaciones', component: ListadoVacacionesComponent },
  { path: 'crear-vacacion', component: CrearVacacionComponent },
  { path: 'editar-vacacion/:id', component: EditarVacacionComponent },
  { path: 'asistencia', component: ListadoAsistenciasComponent },
  { path: 'crear-asistencia', component: CrearAsistenciaComponent},
  { path: 'editar-asistencia/:id', component: EditarAsistenciaComponent },
  { path: 'listado-horarios', component: ListadoHorariosComponent },
  { path: 'crear-horario', component: CrearHorarioComponent },
  { path: 'editar-horario/:id', component: EditarHorarioComponent },
  { path: '', redirectTo: '/empleados', pathMatch: 'full' },
  { path: '**', redirectTo: '/empleados' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

