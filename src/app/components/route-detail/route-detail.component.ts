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
  selector: 'route-detail',
  templateUrl: 'route-detail.component.html'
})
export class RouteDetailComponent implements OnInit, OnDestroy {


  @Input() route: RouteModel
  @Input() mode: string;
  @Output() OnNewRoute = new EventEmitter<RouteModel>();
  @Output() OnUpdateRoute = new EventEmitter<RouteModel>();
  routeObservable: Observable<RouteModel>;
  routeObservableSuscription: Subscription;
  userClubs: any[];
  routeCategories = CONFIG_APP.routeCategories;
  routeClubName: string = "";
  routeAuthorName: string = "";
  routeCategoryDescription: string = "";

  lat: number = 39.458441;
  lon: number = -5.876757;



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
    if (this.mode != "add") {
      this.routeObservable = this.routesProvider.get(this.route.id);
      this.routeObservableSuscription = this.routeObservable.subscribe(
        route => {
          this.route = route
          this.getClubName(route.clubId)
          this.getRouteTypeDescription(route.categoryId)
        }
      )

    }
    //obtenemos los clubes administrador por el usuario para el combo de nuevas rutas
    this.clubsProvider.getByAdmin(this.profileProvider.profile.id)
      .subscribe(userClubs => {
        this.userClubs = userClubs
        this.route.clubId = this.userClubs[0].id;
      })
  }

  ngOnDestroy() {
    if (this.mode == "edit") this.routeObservableSuscription.unsubscribe();
  }

  update() {
    this.routesProvider.update(this.route)
      .then(_ => {
        this.OnUpdateRoute.emit(this.route)
        this.toastProvider.presentToast("¡ Actualizado !")
      })
      .catch(_ => this.toastProvider.presentToast("Error al actualizar. No se guardaron los cambios"))
  }

  add() {
    this.routesProvider.addRoute(this.route, this.profileProvider.profile.id)
      .then(_ => {
        this.OnNewRoute.emit(this.route);
      })

  }

  like() {
    this.routesProvider.like(this.route, this.profileProvider.profile.id);
  }


  navToProgramRoute() {
    alert("Pte de implementar, programar esta ruta en una fecha")
  }

  private getClubName(ClubId) {
    this.clubsProvider.get(ClubId).subscribe(club => this.routeClubName = club.name)
  }

  private getRouteTypeDescription(CategoyId) {
    this.routeCategoryDescription = this.routesProvider.getRouteTypeDescription(CategoyId);
  }



}
