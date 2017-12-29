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
export class ClubDetailPage implements OnInit {

  //club: ClubModel = null;
  club: ClubModel

  constructor(public navCtrl: NavController, public navParams: NavParams, private clubsProvider: ClubsProvider) {

  }

  ngOnInit() {
    let club = this.navParams.get("club") as ClubModel;
    this.clubsProvider.get(club.id).subscribe(club => this.club = club)
  }

  update(club) {
    this.clubsProvider.update(club);
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ClubsDetailPage');

  }

}
