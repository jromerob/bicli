import { CoordinatesModel } from './coordinates.model';

export class MeetingPointModel {
  name: string = "";
  address: string = "";
  coordinates: CoordinatesModel;

  constructor() {
    this.coordinates = new CoordinatesModel();
  }


}
