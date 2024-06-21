// src/app/services/empleado.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleados } from '../models/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://localhost/api_angular/routes/empleados';

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleados[]> {
    return this.http.get<Empleados[]>(this.apiUrl);
  }

  getEmpleado(id: number): Observable<Empleados> {
    return this.http.get<Empleados>(`${this.apiUrl}/${id}`);
  }

  crearEmpleado(empleado: Empleados): Observable<Empleados> {
    return this.http.post<Empleados>(this.apiUrl, empleado);
  }

  actualizarEmpleado(id: number, empleado: Empleados): Observable<Empleados> {
    return this.http.put<Empleados>(`${this.apiUrl}/${id}`, empleado);
  }

  eliminarEmpleado(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
