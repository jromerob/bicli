import { Component, Output, EventEmitter } from '@angular/core';
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
  @Output() ClubClick = new EventEmitter<ClubModel>();

  userClubs: ClubModel[];

  constructor(private clubsProvider: ClubsProvider, private navController: NavController) {
    console.log('Hello ClubsListComponent Component');
    this.clubsProvider.getClubs().subscribe(clubs => this.userClubs = clubs);
  }

  suscribeToClub(club: ClubModel) {
    alert("suscrito a " + club.name)
  }

  emitClubClick(club: ClubModel) {
    this.ClubClick.emit(club);
  }
}
