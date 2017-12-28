import { Component } from '@angular/core';

/**
 * Generated class for the RoutesListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'routes-list',
  templateUrl: 'routes-list.html'
})
export class RoutesListComponent {

  text: string;

  constructor() {
    console.log('Hello RoutesListComponent Component');
    this.text = 'Hello World';
  }

}
