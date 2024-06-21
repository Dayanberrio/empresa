import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
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
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListadoEmpleadosComponent,
    CrearEmpleadoComponent,
    EditarEmpleadoComponent,
    ListadoVacacionesComponent,
    CrearVacacionComponent,
    EditarVacacionComponent,
    ListadoAsistenciasComponent,
    CrearAsistenciaComponent,
    EditarAsistenciaComponent,
    ListadoHorariosComponent,
    CrearHorarioComponent,
    EditarHorarioComponent,
    FooterComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
