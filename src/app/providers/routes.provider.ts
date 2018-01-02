import { Injectable } from '@angular/core';
import { RouteModel } from '../models/route.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the RoutesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoutesProvider {



  /*
    Generated class for the ClubsProvider provider.

    See https://angular.io/guide/dependency-injection for more info on providers
    and Angular DI.
  */
  public routes: Observable<RouteModel[]>;
  private routesCollection: AngularFirestoreCollection<RouteModel>;
  private routeDocRef: AngularFirestoreDocument<RouteModel>;

  constructor(private angularFirestore: AngularFirestore) {
    //
    this.routesCollection = this.angularFirestore.collection('routes');
    this.routes = this.routesCollection.valueChanges();

  }


  addRoute(route: RouteModel, userUID: string): Promise<void> {
    // Persist a document id
    route.id = this.angularFirestore.createId();
    //asignamos el usuario creador
    route.userId = userUID;
    //
    let routeObj = Object.assign({}, route)
    return this.routesCollection.doc(route.id).set(routeObj)

  }

  update(route: RouteModel): Promise<void> {
    return this.routeDocRef.update(route);
  }

  get(id): Observable<RouteModel> {
    this.routeDocRef = this.angularFirestore.doc<RouteModel>(`routes/${id}`);
    return this.routeDocRef.valueChanges();
  };




}
