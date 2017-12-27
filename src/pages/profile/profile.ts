import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileProvider } from '../../app/providers/profile.provider';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {
  profile: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private profileProvider: ProfileProvider) {

  }

  ngOnInit() {
    this.profile = this.profileProvider.profile$.forEach(profile => this.profile = profile)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
