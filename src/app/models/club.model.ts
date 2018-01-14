import { CoordinatesModel } from './coordinates.model';
import { MeetingPointModel } from './meetingPoint.model';

export class ClubModel {
  id?: string;
  logo: string = "";
  email: string = "";
  name: string = "";
  abbreviation: string = "";
  coordinates: CoordinatesModel;
  phone: string = "";
  town: string = "";
  admin: string = ""; //id de usuario en firebase Auth
  subscribers: string[] = [];
  meetingPoints: MeetingPointModel[] = [];

  constructor() {
    this.coordinates = new CoordinatesModel();
  }


}
