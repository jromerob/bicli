import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RoutesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoutesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RoutesProvider Provider');
  }

}
