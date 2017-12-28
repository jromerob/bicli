export class ClubModel {
  $key?: string;
  email: string = "";
  name: string = "";
  phone: string = "";
  town: string = "";
  admin: string = ""; //id de usuario en firebase Auth

  constructor() { }

}
