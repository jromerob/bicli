export class RouteModel {
  id?: string;
  image: string = "";
  name: string = "";
  route: string = ""; //lugares de paso
  geometries: any;
  distance: string = "";
  level: number = 0; //categoria de 1 a 10
  category: string = ""
  userId: string = ""; //autor de la ruta
  clubId: string = ""; //club creador de la ruta
  likes: number = 0;
  observations: string = "";

  constructor() {

  }


}
