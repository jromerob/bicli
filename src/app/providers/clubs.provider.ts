import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClubModel } from '../models/club.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the ClubsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClubsProvider {

  private userClubs$: Observable<ClubModel[]>;
  private clubs$: Observable<ClubModel>;
  private clubsCollection: AngularFirestoreCollection<ClubModel>;
  private clubDocRef: AngularFirestoreDocument<ClubModel>;

  constructor(private angularFirestore: AngularFirestore) {
    //
    this.clubsCollection = this.angularFirestore.collection('clubs');
    this.userClubs$ = this.clubsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as ClubModel;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }


  addClub(club: ClubModel, adminUID: string) {
    // Persist a document id
    club.id = this.angularFirestore.createId();
    club.admin = adminUID;
    let clubObj = Object.assign({}, club)
    this.clubsCollection.doc(club.id).set(clubObj)

  }

  update(club: ClubModel) {
    this.clubDocRef.update(club);
  }

  get(id): Observable<any> {
    this.clubDocRef = this.angularFirestore.doc<ClubModel>(`clubs/${id}`);
    return this.clubDocRef.valueChanges();
  };


  getClubs(): Observable<ClubModel[]> {
    return this.userClubs$
  }

}
