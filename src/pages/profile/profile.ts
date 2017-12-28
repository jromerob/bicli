import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ProfileProvider } from '../../app/providers/profile.provider';
import { NgForm } from '@angular/forms';

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
    this.profile = this.profileProvider.profile;
  }

  ngOnInit() {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  updateProfile(form: NgForm) {
    this.profileProvider.update(this.profile);
    this.navCtrl.popToRoot();
  }

  gotoChangePass() {
    alert("pte implementar")
  }
}
