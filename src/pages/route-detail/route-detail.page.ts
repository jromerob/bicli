import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RouteModel } from '../../app/models/route.model';

/**
 * Generated class for the RoutesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-route-detail',
  templateUrl: 'route-detail.page.html',
})
export class RouteDetailPage {

  route: RouteModel
  mode: string;

  constructor(public navParams: NavParams, private navController: NavController) {
    this.route = this.navParams.get("route") as RouteModel;
    if (this.route) {
      //si recibimos route por paramtros estamos en edicion o en modo vista
      this.mode = "view";
      this.mode = this.navParams.get("mode")
    } else {
      //si no recibimos route por paramtros estamos en nuevo por lo que creamos un nuevo objeto
      this.mode = "add"
      this.route = new RouteModel();
    }
  }

  navToBack() {
    this.navController.pop();
  }

  setModeRouteEdit() {
    this.mode = "edit"
  }
  navToAddRoute() {
    this.navController.push(RouteDetailPage, {})
  }


}
