import { CoordinatesModel } from './coordinates.model';

/**
 * Modelo del plan de ruta, relaciona las rutas con una planificacion
 */
export class PlanModel {
  idPlan: string;
  idClub: string;
  idRuta: string;
  idMeetingPoint: string;
  time: Date;
}
