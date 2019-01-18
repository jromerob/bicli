import { Injectable } from '@angular/core';
import { PlanModel } from '../models/plan.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the PlansProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlansProvider {
  public plans: Observable<PlanModel[]>;
  private plansCollection: AngularFirestoreCollection<PlanModel>;
  private planDocRef: AngularFirestoreDocument<PlanModel>;

  constructor(private angularFirestore: AngularFirestore) {
    //
    this.plansCollection = this.angularFirestore.collection('plans');
    this.plans = this.plansCollection.valueChanges();

  }


  addPlan(plan: PlanModel, adminUID: string): Promise<void> {
    // Persist a document id
    plan.idPlan = this.angularFirestore.createId();
    let planObj = Object.assign({}, plan)
    return this.plansCollection.doc(plan.idPlan).set(planObj)

  }


  update(plan: PlanModel): Promise<void> {
    return this.planDocRef.update(plan);
  }
  /**
   * Recupera todos los planes
   */
  getAll(): Observable<PlanModel> {
    this.planDocRef = this.angularFirestore.doc<PlanModel>(`plans`);
    return this.planDocRef.valueChanges();
  };

  get(id): Observable<PlanModel> {
    this.planDocRef = this.angularFirestore.doc<PlanModel>(`plans/${id}`);
    return this.planDocRef.valueChanges();
  };

  getByAdmin(userId): Observable<PlanModel[]> {
    return this.angularFirestore.collection<PlanModel>('plans', ref => ref.where('admin', '==', userId))
      .valueChanges();
  };




}
