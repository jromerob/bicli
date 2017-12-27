import { Component } from '@angular/core';

/**
 * Generated class for the ProfileDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-detail',
  templateUrl: 'profile-detail.html'
})
export class ProfileDetailComponent {

  text: string;

  constructor() {
    console.log('Hello ProfileDetailComponent Component');
    this.text = 'Hello World';
  }

}
