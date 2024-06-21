// src/app/models/vacacion.ts

export interface Vacacion {
    vacacion_id?: number; // El ID puede ser opcional si es autoincremental en la base de datos
    empleado_id: number;
    fecha_inicio: string;
    fecha_fin: string;
    motivo: string;
  }
  