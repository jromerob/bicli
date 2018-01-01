export class ClubModel {
  id?: string;
  logo: string = "";
  email: string = "";
  name: string = "";
  abbreviation: string = "";
  coordinates: {
    lat: "",
    lon: ""
  };
  phone: string = "";
  town: string = "";
  admin: string = ""; //id de usuario en firebase Auth
  subscribers: string[] = [];

  constructor() {
    this.coordinates = { lat: "", lon: "" }
  }


}
