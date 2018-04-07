import { Component, Output, EventEmitter, OnDestroy, Input, OnInit } from '@angular/core';
import { RoutesProvider } from '../../providers/routes.provider';
import { ProfileProvider } from '../../providers/profile.provider';
import { RouteModel } from '../../models/route.model';
import { NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ToastProvider } from '../../providers/toast.provider';


/**
 * Generated class for the RoutesListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'routes-list',
  templateUrl: 'routes-list.component.html'
})
export class RoutesListComponent implements OnInit, OnDestroy {
  @Output() routeClick = new EventEmitter<RouteModel>();
  @Input() filterByAdmin: boolean;
  @Input() filterBySuscribed: boolean;
  @Input() filterByNotSuscribed: boolean;

  routes: Observable<RouteModel[]>;
  routeSuscription: Subscription;

  constructor(private routesProvider: RoutesProvider,
    private navController: NavController,
    private profileProvider: ProfileProvider,
    private toastProvider: ToastProvider) {

  }

  //Al iniciar el componente filtramos el observable para que el array de
  // routees solo contenga los correspondientes al filtro del componente
  ngOnInit() {
    this.routes = this.routesProvider.routes.map(
      (routes) => {
        return this.filterRoutes(routes)
      }
    )
  }

  ngOnDestroy() {
    this.routes.subscribe().unsubscribe();
  }

  isSuscribedTo(route: RouteModel): boolean {
    return this.profileProvider.isSuscribedTo(route.id);
  }

  emitRouteClick(route: RouteModel) {
    this.routeClick.emit(route);
  }

  private filterRoutes(routes: RouteModel[]): RouteModel[] {
    let returnRoutes: RouteModel[] = []

    if (!this.filterByAdmin && !this.filterBySuscribed && !this.filterByNotSuscribed) return routes;

    if (this.filterBySuscribed) {
      routes.forEach(route => {
        if (this.isSuscribedTo(route)) returnRoutes.push(route)
      })
    }
    if (this.filterByNotSuscribed) {
      routes.forEach(route => {
        if (!this.isSuscribedTo(route)) returnRoutes.push(route)
      })
    }
    return returnRoutes
  }

  getRouteTypeDescription(routeCategoryId): string {
    return this.routesProvider.getRouteTypeDescription(routeCategoryId);
  }

}
