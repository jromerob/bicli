import { Component } from '@angular/core';
import { App, IonicPage } from 'ionic-angular';
import { RoutesPage } from '../routes/routes.page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  constructor(public appCtrl: App) {

  }

  goto(params: string) {
    this.appCtrl.getRootNav().setRoot(RoutesPage)
  }

}
