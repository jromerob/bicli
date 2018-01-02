import { Component } from '@angular/core';

/**
 * Generated class for the RoutesDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'routes-detail',
  templateUrl: 'routes-detail.component.html'
})
export class RoutesDetailComponent {

  text: string;

  constructor() {
    console.log('Hello RoutesDetailComponent Component');
    this.text = 'Hello World';
  }

}
