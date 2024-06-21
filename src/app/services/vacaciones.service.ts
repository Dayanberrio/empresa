// src/app/services/vacaciones.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { Vacacion } from '../models/vacacion';

@Injectable({
  providedIn: 'root'
})
export class VacacionesService {
  private apiUrl = 'http://localhost/api_angular/routes/vacaciones';

  constructor(private http: HttpClient) { }

  getVacaciones(): Observable<Vacacion[]> {
    return this.http.get<Vacacion[]>(this.apiUrl);
  }

  getVacacion(id: number): Observable<Vacacion> {
    return this.http.get<Vacacion>(`${this.apiUrl}/${id}`);
  }

  crearVacacion(vacacion: Vacacion): Observable<Vacacion> {
    return this.http.post<Vacacion>(this.apiUrl, vacacion);
  }

  actualizarVacacion(id: number, vacacion: Vacacion): Observable<Vacacion> {
    return this.http.put<Vacacion>(`${this.apiUrl}/${id}`, vacacion);
  }

  eliminarVacacion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
