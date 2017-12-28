import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../app/providers/auth.provider';
import { ProfileProvider } from '../../app/providers/profile.provider';
import { ProfileModel } from '../../app/models/profile.model';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  profile = new ProfileModel();
  loginPending: boolean = false;
  singinPending: boolean = false;
  tipoLogin = "profile";

  constructor(private profileProvider: ProfileProvider, public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private alertController: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin() {
    this.singinPending = true;
    this.authProvider.registerProfile(this.profile.email, this.profile.password)
      .then((profile) => {

        this.profileProvider.create(profile.uid, this.profile);
        let alert = this.alertController.create({
          title: 'Usuario ' + this.profile.email + " creado",
          subTitle: "Usuario creado correctamente",
          buttons: ['Aceptar']
        });
        alert.present();
        this.singinPending = false;
      })
      .catch(err => {
        this.singinPending = false;
        let alert = this.alertController.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })

  }

  login() {
    this.loginPending = true;
    this.authProvider.loginProfile(this.profile.email, this.profile.password)
      .then(
      (profile: any) => {
        console.log("Login succesfull")
        this.loginPending = false;
        this.profileProvider.set(profile.uid);
      })
      .catch(err => {
        this.loginPending = false;
        let alert = this.alertController.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Aceptar']
        });
        alert.present();

      })
  }

}
