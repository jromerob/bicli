import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ClubsProvider } from '../../providers/clubs.provider';
import { ProfileProvider } from '../../providers/profile.provider';
import { ClubModel } from '../../models/club.model';
import { NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the ClubsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'clubs-list',
  templateUrl: 'clubs-list.component.html'
})
export class ClubsListComponent implements OnDestroy {
  @Output() ClubClick = new EventEmitter<ClubModel>();

  clubs: ClubModel[];
  getClubSuscription: Subscription;

  constructor(private clubsProvider: ClubsProvider, private navController: NavController, private profileProvider: ProfileProvider) {
    console.log('Hello ClubsListComponent Component');
    this.getClubSuscription = this.clubsProvider.getClubs().subscribe(clubs => this.clubs = clubs);
  }

  ngOnDestroy() {
    this.getClubSuscription.unsubscribe();
  }

  isAdministratedByMe(club: ClubModel): boolean {
    return club.admin == this.profileProvider.profile.id;
  }

  isSuscribedTo(club: ClubModel): boolean {
    return this.profileProvider.isSuscribedTo(club.id);

  }

  changeSuscriptionToClub(club: ClubModel, suscribe: boolean) {
    if (suscribe) {
      this.profileProvider.suscribeToClub(club.id)
    } else {
      this.profileProvider.unsuscribeToClub(club.id)
    }

  }

  emitClubClick(club: ClubModel) {
    this.ClubClick.emit(club);
  }
}
