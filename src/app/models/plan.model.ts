import { CoordinatesModel } from './coordinates.model';

/**
 * Modelo del plan de ruta, relaciona las rutas con una planificacion
 */
export class PlanModel {
  id_plan: string;
  id_club: string;
  id_ruta: string;
  id_meeting_point: string;
  Fecha: Date;
  hora: Date;

  constructor() {
  }


}
