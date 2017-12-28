import { Component } from '@angular/core';
import { App, IonicPage } from 'ionic-angular';
import { RoutesPage } from '../routes/routes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public appCtrl: App) {

  }

  goto(params: string) {
    this.appCtrl.getRootNav().setRoot(RoutesPage)
  }

}
