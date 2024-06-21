
export interface Empleados {
    empleado_id?: number; // El ID puede ser opcional si es generado automáticamente en el backend
    nombre: string;
    apellido: string;
    telefono: number;
    email:string;
    direccion:string;
    puesto: string;
    fecha_contratacion: string; // Considera el formato adecuado de fecha
    salario: number;
  }
  