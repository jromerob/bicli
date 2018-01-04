import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RouteDetailPage } from '../route-detail/route-detail.page';

/**
 * Generated class for the RoutesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-routes',
  templateUrl: 'routes.page.html',
})
export class RoutesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoutesPage');
  }

  navToRouteDetail(route: any) {
    this.navCtrl.push(RouteDetailPage, { route: route, mode: "view" })
  }
  navToAddRoute() {
    this.navCtrl.push(RouteDetailPage, { mode: "add" })
  }
  navToRouteEdit() {
    this.navCtrl.push(RouteDetailPage, { mode: "edit" })
  }
}
