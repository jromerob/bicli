import { Component } from '@angular/core';

/**
 * Generated class for the ClubsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'clubs-list',
  templateUrl: 'clubs-list.html'
})
export class ClubsListComponent {

  text: string;

  constructor() {
    console.log('Hello ClubsListComponent Component');
    this.text = 'Hello World';
  }

}
