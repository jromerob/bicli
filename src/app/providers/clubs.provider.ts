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
  //private clubs: ClubModel[] = [];
  public clubs: Observable<ClubModel[]>;
  private clubsCollection: AngularFirestoreCollection<ClubModel>;
  private clubDocRef: AngularFirestoreDocument<ClubModel>;

  constructor(private angularFirestore: AngularFirestore) {
    //
    this.clubsCollection = this.angularFirestore.collection('clubs');
    //this.clubs = this.clubsCollection.valueChanges();

    this.clubs = this.clubsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as ClubModel;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }


  addClub(club: ClubModel, adminUID: string): Promise<void> {
    // Persist a document id
    club.id = this.angularFirestore.createId();
    club.admin = adminUID;
    let clubObj = Object.assign({}, club)
    return this.clubsCollection.doc(club.id).set(clubObj)

  }

  // addSuscriber(club: ClubModel, suscriber: string) {
  //   let clubDocRef = this.angularFirestore.doc<ClubModel>(`clubs/${club.id}`);
  //   let clubDoc$ = clubDocRef.valueChanges().subscribe(
  //     club => {
  //       clubDoc$.unsubscribe()
  //       club.subscribers.push(suscriber)
  //       clubDocRef.update(club)
  //     }
  //   )
  // }

  addSuscriber(club: ClubModel, suscriber: string): Promise<void> {

    let returPromise = new Promise<void>((resolve, reject) => {

      let clubDocRef = this.angularFirestore.doc<ClubModel>(`clubs/${club.id}`);
      let clubDoc$ = clubDocRef.valueChanges().subscribe(
        club => {
          clubDoc$.unsubscribe()
          club.subscribers.push(suscriber)
          clubDocRef.update(club)
            .then(resolve())
            .catch(reject(null))

        }
      )
    })

    return returPromise;
  }


  removeSuscriber(club: ClubModel, suscriber: string) {
    let clubDocRef = this.angularFirestore.doc<ClubModel>(`clubs/${club.id}`);
    let clubDoc$ = clubDocRef.valueChanges().subscribe(
      club => {
        clubDoc$.unsubscribe()
        let i = club.subscribers.indexOf(suscriber);
        if (i >= 0) club.subscribers.splice(i, 1)
        clubDocRef.update(club)
      }
    )
  };



  update(club: ClubModel): Promise<void> {
    return this.clubDocRef.update(club);
  }

  get(id): Observable<ClubModel> {
    this.clubDocRef = this.angularFirestore.doc<ClubModel>(`clubs/${id}`);
    return this.clubDocRef.valueChanges();
  };




}
