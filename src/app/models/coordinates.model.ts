import { CONFIG_APP } from '../constants/config-app.constant';

export class CoordinatesModel {
  lat: number;
  lon: number;


  constructor() {
    this.lat = CONFIG_APP.defaultCoordinates.lat;
    this.lon = CONFIG_APP.defaultCoordinates.lon;
  }

};
