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
  public clubs: Observable<ClubModel[]>;
  private clubsCollection: AngularFirestoreCollection<ClubModel>;
  private clubDocRef: AngularFirestoreDocument<ClubModel>;

  constructor(private angularFirestore: AngularFirestore) {
    //
    this.clubsCollection = this.angularFirestore.collection('clubs');
    this.clubs = this.clubsCollection.valueChanges();

  }


  addClub(club: ClubModel, adminUID: string): Promise<void> {
    // Persist a document id
    club.id = this.angularFirestore.createId();
    club.admin = adminUID;
    let clubObj = Object.assign({}, club)
    return this.clubsCollection.doc(club.id).set(clubObj)

  }

  addSuscriber(club: ClubModel, suscriber: string): Promise<void> {

    let returPromise = new Promise<void>((resolve, reject) => {

      let clubDocRef = this.angularFirestore.doc<ClubModel>(`clubs/${club.id}`);
      let clubDoc$ = clubDocRef.valueChanges().subscribe(
        club => {
          clubDoc$.unsubscribe()
          club.subscribers.push(suscriber)
          clubDocRef.update(club)
            .then(_ => resolve())
            .catch(error => reject(error))

        }
      )
    })

    return returPromise;
  }


  removeSuscriber(club: ClubModel, suscriber: string): Promise<void> {

    let returPromise = new Promise<void>((resolve, reject) => {

      let clubDocRef = this.angularFirestore.doc<ClubModel>(`clubs/${club.id}`);
      let clubDoc$ = clubDocRef.valueChanges().subscribe(
        club => {
          clubDoc$.unsubscribe()
          let i = club.subscribers.indexOf(suscriber);
          if (i >= 0) club.subscribers.splice(i, 1)
          clubDocRef.update(club)
            .then(_ => resolve())
            .catch(error => reject(error))

        }
      )
    })

    return returPromise;

  };



  update(club: ClubModel): Promise<void> {
    return this.clubDocRef.update(club);
  }

  get(id): Observable<ClubModel> {
    this.clubDocRef = this.angularFirestore.doc<ClubModel>(`clubs/${id}`);
    return this.clubDocRef.valueChanges();
  };

  getByAdmin(userId): Observable<ClubModel[]> {
    return this.angularFirestore.collection<ClubModel>('clubs', ref => ref.where('admin', '==', userId))
      .valueChanges();
  };




}
