import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClubModel } from '../models/club.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthProvider } from './auth.provider';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the ClubsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClubsProvider {

  private userClubs: ClubModel[];
  private userClubs$: Observable<ClubModel[]>;
  private clubs$: Observable<ClubModel>;
  private clubsCollection: AngularFirestoreCollection<ClubModel>;
  private itemDocRef: AngularFirestoreDocument<ClubModel>;

  constructor(private angularFirestore: AngularFirestore, private authProvider: AuthProvider) {
    console.log('Hello ClubsProvider Provider');
  }


  addClub(club: ClubModel) {
    this.clubsCollection.add(club);
  }


  getUserClubs(): Observable<ClubModel[]> {
    this.clubsCollection = this.angularFirestore.collection('clubs');
    this.userClubs$ = this.clubsCollection.valueChanges();
    return this.userClubs$
  }

  getAllClubs(): Observable<ClubModel> {
    this.clubsCollection = this.angularFirestore.collection('clubs');
    this.clubs$ = this.itemDocRef.valueChanges();
    return this.clubs$
  }


}
