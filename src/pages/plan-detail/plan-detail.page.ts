import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlanModel } from '../../app/models/plan.model';
import { ClubsProvider } from '../../app/providers/clubs.provider';
import { ClubModel, RouteModel } from '../../app/models';
import { PlansProvider } from '../../app/providers/plans.provider';
import { RoutesProvider } from '../../app/providers/routes.provider';

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
export class PlanDetailPage implements OnInit {


  plan: PlanModel
  mode: string;
  club:ClubModel;
  route:RouteModel;


  constructor(public navParams: NavParams, private navController: NavController,
     private clubsProvider:ClubsProvider,
     private routeProvider:RoutesProvider) {
    this.plan = this.navParams.get("plan") as PlanModel;
    this.mode = this.navParams.get("mode")
    if (this.mode==='add') this.plan = new PlanModel();
    
  }


  ngOnInit(): void {
   
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
