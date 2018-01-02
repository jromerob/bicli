import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ProfileProvider } from '../../app/providers/profile.provider';
import { HomePage } from '../../pages/home/home';
import { NgForm } from '@angular/forms';
import { HomePage } from '../home/home.page';
import { ProfileModel } from '../../app/models/profile.model';
import { CONFIG_APP } from '../../app/constants/config-app.constant';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.page.html',
})
export class ProfilePage {
  private profile: ProfileModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private profileProvider: ProfileProvider) {
    this.profile = this.profileProvider.profile;
    if (this.profile.avatar == "") this.profile.avatar = CONFIG_APP.images.defaultAvatar;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  updateProfile(form: NgForm) {
    this.profileProvider.update(this.profile);
    this.navCtrl.setRoot(HomePage);
  }

  gotoChangePass() {
    alert("pte implementar")
  }
}
