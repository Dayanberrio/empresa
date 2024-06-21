// src/app/services/asistencia.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asistencia } from '../models/asistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  private apiUrl = 'http://localhost/api_angular/routes/asistencia';

  constructor(private http: HttpClient) { }

  getAsistencias(): Observable<Asistencia[]> {
    return this.http.get<Asistencia[]>(this.apiUrl);
  }

  getAsistencia(id: number): Observable<Asistencia> {
    return this.http.get<Asistencia>(`${this.apiUrl}/${id}`);
  }

  crearAsistencia(asistencia: Asistencia): Observable<Asistencia> {
    return this.http.post<Asistencia>(this.apiUrl, asistencia);
  }

  actualizarAsistencia(id: number, asistencia: Asistencia): Observable<Asistencia> {
    return this.http.put<Asistencia>(`${this.apiUrl}/${id}`, asistencia);
  }

  eliminarAsistencia(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
