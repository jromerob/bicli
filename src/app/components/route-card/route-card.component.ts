import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RouteModel } from '../../models/route.model';
import { RoutesProvider } from '../../providers/routes.provider';
import { ClubsProvider } from '../../providers/clubs.provider';
import { ProfileProvider } from '../../providers/profile.provider';
import { ToastProvider } from '../../providers/toast.provider';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { CONFIG_APP } from '../../constants/config-app.constant';

/**
 * Generated class for the RoutesDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'route-card',
  templateUrl: 'route-card.component.html'
})
export class RouteCardComponent implements OnInit {


  @Input() routeId: number
  @Input() mode: string;
  @Output() OnNewRoute = new EventEmitter<RouteModel>();
  @Output() OnUpdateRoute = new EventEmitter<RouteModel>();
  routeObservable: Observable<RouteModel>;
  routeObservableSuscription: Subscription;
  route: RouteModel;
  userClubs: any[];
  routeCategories = CONFIG_APP.routeCategories;
  routeClubName: string = "";
  routeClubShortName: string = "";
  routeAuthorName: string = "";
  routeCategoryDescription: string = "";
  activeMap: boolean;




  constructor(public navCtrl: NavController, public navParams: NavParams,
    private routesProvider: RoutesProvider, private profileProvider: ProfileProvider,
    private clubsProvider: ClubsProvider, private toastProvider: ToastProvider) {

  }


  /**
   * [ngOnInit description]
   * @return {[type]} [description]
   * Inicilizacion del componente, en el modo edición
   * 1º Obtenemos el observable del documento por id del route
   * 2º Nos suscribimos al observable y asignamos el objeto route recibido con los
   * cambios a la propiedad route del componente
   */
  ngOnInit() {

    this.routeObservable = this.routesProvider.get(this.routeId);
    this.routeObservableSuscription = this.routeObservable.subscribe(
      route => {
        this.route = route
        this.getClubName(route.clubId);
        this.getClubShortName(route.clubId)

        this.getRouteAuthorName(route.userId)
        this.getRouteTypeDescription(route.categoryId)
      }
    )
  }

  private getClubName(ClubId) {
    this.clubsProvider.get(ClubId).subscribe(club => this.routeClubName = club.name)
  }


  private getClubShortName(ClubId) {
    this.clubsProvider.get(ClubId).subscribe(club => this.routeClubShortName = club.abbreviation)
  }

  private getRouteAuthorName(UID) {
    this.profileProvider.get(UID).subscribe(

      user => this.routeAuthorName = user.name

    )
  }

  private getRouteTypeDescription(CategoyId) {
    this.routeCategoryDescription = this.routesProvider.getRouteTypeDescription(CategoyId);
  }




}
