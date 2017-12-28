import { Component } from '@angular/core';

/**
 * Generated class for the ClubsDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'clubs-detail',
  templateUrl: 'clubs-detail.html'
})
export class ClubsDetailComponent {

  text: string;

  constructor() {
    console.log('Hello ClubsDetailComponent Component');
    this.text = 'Hello World';
  }

}
