import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClubModel } from '../../app/models/club.model';
import { ClubsProvider } from '../../app/providers/clubs.provider';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ClubsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-club-detail',
  templateUrl: 'club-detail.html',
})
export class ClubDetailPage {

  club: ClubModel
  mode: string;

  constructor(public navParams: NavParams, private navController: NavController) {
    this.club = this.navParams.get("club") as ClubModel;
    if (this.club) {
      //si recibimos club por paramtros estamos en edicion
      this.mode = "edit";
    } else {
      //si no recibimos club por paramtros estamos en nuevo por lo que creamos un nuevo objeto
      this.mode = "add"
      this.club = new ClubModel();
    }
  }

  navToBack() {
    this.navController.pop();

  }

}
