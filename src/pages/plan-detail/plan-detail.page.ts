import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlanModel } from '../../app/models/plan.model';

/**
 * Generated class for the PlansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-plan-detail',
  templateUrl: 'plan-detail.page.html',
})
export class PlanDetailPage {

  plan: PlanModel
  mode: string;

  constructor(public navParams: NavParams, private navController: NavController) {
    this.plan = this.navParams.get("route") as PlanModel;
    if (this.plan) {
      //si recibimos plan por paramtros estamos en edicion o en modo vista
      this.mode = "view";
      this.mode = this.navParams.get("mode")
    } else {
      //si no recibimos plan por paramtros estamos en nuevo por lo que creamos un nuevo objeto
      this.mode = "add"
      this.plan = new PlanModel();
    }
  }

  navToBack() {
    this.navController.pop();
  }

  setModePlanEdit() {
    this.mode = "edit"
  }

  navToAddPlan() {
    this.navController.push(PlanDetailPage, {})
  }


}
