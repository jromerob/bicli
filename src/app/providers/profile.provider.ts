import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ProfileModel } from '../models/index';
import { AuthProvider } from './auth.provider';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {
  profile: ProfileModel;
  profile$: Observable<ProfileModel>;
  private profileCollection: AngularFirestoreCollection<ProfileModel>;
  private profileDocRef: AngularFirestoreDocument<ProfileModel>;

  constructor(private angularFirestore: AngularFirestore, private authProvider: AuthProvider) {
  }

  set(uid: string) {
    this.profileDocRef = this.angularFirestore.doc<ProfileModel>(`profiles/${uid}`);
    this.profile$ = this.profileDocRef.valueChanges();

    this.profileDocRef.snapshotChanges().forEach(
      (doc: any) => {
        console.log("Obeniendo datos de usaurio !!!!!!!!!!!!!!!!!!!!!!!!!")
        this.profile = doc.payload.data()
      });
  }

  update(profile: ProfileModel) {
    this.profileDocRef.update(profile);
  }

  unSet() {
    this.profile = null
    this.profile$ = null;
  }

  create(uid: string, profile: ProfileModel) {
    this.profileCollection = this.angularFirestore.collection('profiles');
    this.profile = profile;
    this.profile.id = uid;
    //fireStore no admite clases personalizadas, deben ser objetos
    //https://stackoverflow.com/questions/37300338/how-can-i-convert-a-typescript-object-to-a-plain-object
    let profileObj = Object.assign({}, this.profile)
    this.profileCollection.doc(uid).set(profileObj)

  }

}
