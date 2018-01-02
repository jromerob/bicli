export class ClubModel {
  id?: string;
  image: string = "";
  name: string = "";
  route: string = ""; //lugares de paso
  geometries: any;
  distance: string = "";
  category: number; //categoria de 1 a 10
  user: string = ""; //autor de la ruta
  club: string; //club creador de la ruta
  likes: number;
  observarions: string;

  constructor() {

  }


}
