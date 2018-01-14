import { CoordinatesModel } from './coordinates.model';

/**
 * Modelo del plan de ruta, relaciona las rutas con una planificacion
 */
export class PlanModel {
  id_plan: number;
  id_club: number;
  id_ruta: number;
  id_meeting_point: number;
  Fecha: Date;
  hora: Date;

  constructor() {
  }


}
