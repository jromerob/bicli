import { Component } from '@angular/core';

/**
 * Generated class for the ClubsListSubcribedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'clubs-list-subcribed',
  templateUrl: 'clubs-list-subcribed.html'
})
export class ClubsListSubcribedComponent {

  text: string;

  constructor() {
    console.log('Hello ClubsListSubcribedComponent Component');
    this.text = 'Hello World';
  }

}
