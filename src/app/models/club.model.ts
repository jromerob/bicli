export class ClubModel {
  id?: string;
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

  constructor() {
    this.coordinates = { lat: "", lon: "" }
  }


}
