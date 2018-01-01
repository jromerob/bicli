import { Component, Output, EventEmitter, OnDestroy, Input, OnInit } from '@angular/core';
import { ClubsProvider } from '../../providers/clubs.provider';
import { ProfileProvider } from '../../providers/profile.provider';
import { ClubModel } from '../../models/club.model';
import { NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ToastProvider } from '../../providers/toast.provider';

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
export class ClubsListComponent implements OnInit {
  @Output() ClubClick = new EventEmitter<ClubModel>();
  @Input() filterByAdmin: boolean;
  @Input() filterBySuscribed: boolean;
  @Input() filterByNotSuscribed: boolean;

  clubs: Observable<ClubModel[]>;
  clubSuscription: Subscription;

  constructor(private clubsProvider: ClubsProvider,
    private navController: NavController,
    private profileProvider: ProfileProvider,
    private toastProvider: ToastProvider) {

  }

  //Al iniciar el componente filtramos el observable para que el array de
  // clubes solo contenga los correspondientes al filtro del componente
  ngOnInit() {
    this.clubs = this.clubsProvider.clubs.map(
      (clubs) => {
        return this.filterClubs(clubs)
      }
    )
  }

  isAdministratedByMe(club: ClubModel): boolean {
    return club.admin == this.profileProvider.profile.id;
  }

  isSuscribedTo(club: ClubModel): boolean {
    return this.profileProvider.isSuscribedTo(club.id);

  }

  //al cam biar ls suscripción no se actualiza la vista porque el cambio de suscripción
  //se hace en el perfil, no en el club por lo que el observable no se dispara. Seria necesario forazrlo
  changeSuscriptionToClub(club: ClubModel, suscribe: boolean) {
    if (suscribe) {
      Promise.all([
        this.profileProvider.suscribeToClub(club.id),
        this.clubsProvider.addSuscriber(club, this.profileProvider.profile.id)
      ])
        .then(_ => this.toastProvider.presentToast(`Se ha suscrito al ${club.name}`))
        .catch(error => this.toastProvider.presentToast("Error al actualizar la suscripción"))
    } else {
      Promise.all([
        this.profileProvider.unsuscribeToClub(club.id),
        this.clubsProvider.removeSuscriber(club, this.profileProvider.profile.id)])
        .then(_ => this.toastProvider.presentToast(`Se ha eliminado la suscripción a ${club.name}`))
        .catch(error => this.toastProvider.presentToast("Error al actualizar la suscripción"))
    }

  }

  emitClubClick(club: ClubModel) {
    this.ClubClick.emit(club);
  }

  private filterClubs(clubs: ClubModel[]): ClubModel[] {
    let returnClubs: ClubModel[] = []

    if (!this.filterByAdmin && !this.filterBySuscribed && !this.filterByNotSuscribed) return clubs;

    if (this.filterByAdmin) {
      clubs.forEach(club => {
        if (this.isAdministratedByMe(club)) returnClubs.push(club)
      })
    }

    if (this.filterBySuscribed) {
      clubs.forEach(club => {
        if (this.isSuscribedTo(club)) returnClubs.push(club)
      })
    }
    if (this.filterByNotSuscribed) {
      clubs.forEach(club => {
        if (!this.isSuscribedTo(club)) returnClubs.push(club)
      })
    }

    return returnClubs
  }
}
