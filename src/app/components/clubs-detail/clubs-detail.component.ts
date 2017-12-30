import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClubModel } from '../../models';
import { CONFIG_APP } from '../../constants/config-app.constant';
import { ClubsProvider } from '../../providers/clubs.provider';
import { ProfileProvider } from '../../providers/profile.provider';
import { ToastProvider } from '../../providers/toast.provider';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'clubs-detail',
  templateUrl: 'clubs-detail.component.html'
})
export class ClubsDetailComponent implements OnInit {

  @Input() club: ClubModel
  @Input() mode: string;
  @Output() OnNewClub = new EventEmitter<ClubModel>();
  @Output() OnUpdateClub = new EventEmitter<ClubModel>();
  clubObservable: Observable<ClubModel>;



  constructor(public navCtrl: NavController, public navParams: NavParams, private clubsProvider: ClubsProvider, private profileProvider: ProfileProvider, private toastProvider: ToastProvider) {

  }

  ngOnInit() {
    if (this.club) {
      if (this.club.logo == "") this.club.logo = CONFIG_APP.images.defaultClubLogo;
    }
    //this.club ? this.mode = "edit" : this.mode = "add";
    if (this.mode == "edit") {
      this.clubObservable = this.clubsProvider.get(this.club.id);
      this.clubObservable.subscribe(
        club => {
          this.club = club
          if (this.club.logo == "") this.club.logo = CONFIG_APP.images.defaultClubLogo;
        }
      )

    }

    // else {
    //   this.club = new ClubModel();
    // }
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
    this.OnNewClub.emit(this.club);

  }



}
