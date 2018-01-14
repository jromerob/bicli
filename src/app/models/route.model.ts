import { CoordinatesModel } from './coordinates.model';

export class RouteModel {
  id?: string;
  name: string = "";
  route: string = ""; //lugares de paso
  geometries: any;
  distance: string = "";
  level: number = 0; //categoria de 1 a 10
  categoryId: string = ""
  userId: string = ""; //autor de la ruta
  clubId: string = ""; //club creador de la ruta
  likes: number = 0;
  observations: string = "";
  centerCoordinates: CoordinatesModel; //coodenadas del punto central de la ruta

  constructor() {
    this.centerCoordinates = new CoordinatesModel();
  }


}
