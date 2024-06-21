export interface Horario {
    horario_id?: number;
    empleado_id: number;
    dia_semana: 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado' | 'Domingo';
    hora_entrada: string;
    hora_salida: string;
  }
  