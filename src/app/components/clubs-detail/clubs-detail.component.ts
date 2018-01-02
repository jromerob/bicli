import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClubModel } from '../../models';
import { CONFIG_APP } from '../../constants/config-app.constant';
import { ClubsProvider } from '../../providers/clubs.provider';
import { ProfileProvider } from '../../providers/profile.provider';
import { ToastProvider } from '../../providers/toast.provider';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'clubs-detail',
  templateUrl: 'clubs-detail.component.html'
})
export class ClubsDetailComponent implements OnInit, OnDestroy {

  @Input() club: ClubModel
  @Input() mode: string;
  @Output() OnNewClub = new EventEmitter<ClubModel>();
  @Output() OnUpdateClub = new EventEmitter<ClubModel>();
  clubObservable: Observable<ClubModel>;
  clubObservableSuscription: Subscription;



  constructor(public navCtrl: NavController, public navParams: NavParams, private clubsProvider: ClubsProvider, private profileProvider: ProfileProvider, private toastProvider: ToastProvider) {

  }


  /**
   * [ngOnInit description]
   * @return {[type]} [description]
   * Inicilizacion del componente, en el modo edición
   * 1º Obtenemos el observable del documento por id del club
   * 2º Nos suscribimos al observable y asignamos el objeto club recibido con los
   * cambios a la propiedad club del componente
   */
  ngOnInit() {
    // if (this.club) {
    //   if (this.club.logo == "") this.club.logo = CONFIG_APP.images.defaultClubLogo;
    // }
    this.club && (this.club.logo == "") ? this.club.logo = CONFIG_APP.images.defaultClubLogo : this.club.logo = this.club.logo;

    if (this.mode == "edit") {
      this.clubObservable = this.clubsProvider.get(this.club.id);
      this.clubObservableSuscription = this.clubObservable.subscribe(
        club => {
          this.club = club
          if (this.club.logo == "") this.club.logo = CONFIG_APP.images.defaultClubLogo;
        }
      )

    }

  }

  ngOnDestroy() {
    if (this.mode == "edit") this.clubObservableSuscription.unsubscribe();
  }

  update() {
    this.clubsProvider.update(this.club)
      .then(_ => {
        this.OnUpdateClub.emit(this.club)
        this.toastProvider.presentToast("¡ Actualizado !")
      })
      .catch(_ => this.toastProvider.presentToast("Error al actualizar. No se guardaron los cambios"))
  }

  add() {
    this.clubsProvider.addClub(this.club, this.profileProvider.profile.id)
      .then(_ => {
        this.clubsProvider.addSuscriber(this.club, this.profileProvider.profile.id)
        this.profileProvider.suscribeToClub(this.club.id)
        this.OnNewClub.emit(this.club);
      })

  }



}
