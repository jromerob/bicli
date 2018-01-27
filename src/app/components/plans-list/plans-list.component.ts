import { Component, Output, EventEmitter, OnDestroy, Input, OnInit } from '@angular/core';
import { PlansProvider } from '../../providers/plans.provider';
import { ProfileProvider } from '../../providers/profile.provider';
import { PlanModel } from '../../models/plan.model';
import { NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ToastProvider } from '../../providers/toast.provider';


/**
 * Generated class for the PlansListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'plans-list',
  templateUrl: 'plans-list.component.html'
})
export class PlansListComponent implements OnInit, OnDestroy {
  @Output() planClick = new EventEmitter<PlanModel>();
  @Input() filterByAdmin: boolean;
  @Input() filterBySuscribed: boolean;
  @Input() filterByNotSuscribed: boolean;

  plans: Observable<PlanModel[]>;
  planSuscription: Subscription;

  constructor(private plansProvider: PlansProvider,
    private navController: NavController,
    private profileProvider: ProfileProvider,
    private toastProvider: ToastProvider) {

  }

  //Al iniciar el componente filtramos el observable para que el array de
  // planes solo contenga los correspondientes al filtro del componente
  ngOnInit() {
    this.plans = this.plansProvider.plans
  }

  ngOnDestroy() {
    this.plans.subscribe().unsubscribe();
  }


  emitPlanClick(plan: PlanModel) {
    this.planClick.emit(plan);
  }


}
