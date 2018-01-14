import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlanDetailPage } from '../plan-detail/plan-detail.page';

/**
 * Generated class for the RoutesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-plans',
  templateUrl: 'plans.page.html',
})
export class PlansPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navToPlanDetail(Plan: any) {
    this.navCtrl.push(PlanDetailPage, { plan: Plan, mode: "view" })
  }
  navToNewPlan() {
    this.navCtrl.push(PlanDetailPage, { mode: "add" })
  }
  navToPlanEdit() {
    this.navCtrl.push(PlanDetailPage, { mode: "edit" })
  }
}
