import { CoordinatesModel } from './coordinates.model';

export class MeetingPointModel {
  name: string = "";
  adress: string = "";
  coordinates: CoordinatesModel;

  constructor() {
    this.coordinates = new CoordinatesModel();
  }


}
