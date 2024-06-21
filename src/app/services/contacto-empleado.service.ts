// src/app/services/empleado.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleados } from '../models/empleados';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiUrl = 'http://localhost/api_angular/routes/empleado';

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleados[]> {
    return this.http.get<Empleados[]>(this.apiUrl);
  }

  getEmpleado(id: number): Observable<Empleados> {
    return this.http.get<Empleados>(`${this.apiUrl}/${id}`);
  }

 
}
