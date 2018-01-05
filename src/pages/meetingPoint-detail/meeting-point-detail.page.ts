import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClubModel, MeetingPointModel } from '../../app/models';

/**
 * Generated class for the ClubsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'meeting-point-detail',
  templateUrl: 'meeting-point-detail.page.html',
})
export class MeetingPointDetailPage {

  club: ClubModel
  meetingPoint: MeetingPointModel

  constructor(public navParams: NavParams, private navController: NavController) {
    this.club = this.navParams.get("club") as ClubModel;
    this.meetingPoint = this.navParams.get("meetingPoint") as MeetingPointModel;

  }

  navToBack() {
    this.navController.pop();
  }

}
