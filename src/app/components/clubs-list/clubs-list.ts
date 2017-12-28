import { Component } from '@angular/core';
import { ClubsProvider } from '../../providers/clubs.provider';
import { ClubModel } from '../../models/club.model';
import { NavController, NavParams } from 'ionic-angular';

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

  userClubs: any;

  constructor(private clubsProvider: ClubsProvider) {
    console.log('Hello ClubsListComponent Component');
    this.userClubs = this.clubsProvider.getUserClubs();
  }

  suscribeToClub(club: ClubModel) {
    alert("suscrito a " + club.name)
  }

  gotoDetail(club: ClubModel) {
    alert("ir a " + club.name)
  }
}
