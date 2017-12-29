import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClubDetailPage } from '../club-detail/club-detail';

/**
 * Generated class for the ClubsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-clubs',
  templateUrl: 'clubs.html',
})
export class ClubsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClubsPage');
  }

  gotoClubDetail(club: any) {
    this.navCtrl.push(ClubDetailPage, { club: club })
  }

}
