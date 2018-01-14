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

  isSuscribedTo(ClubId: string): boolean {
    let found = this.profile.clubs.indexOf(ClubId) >= 0
    return found;
  }

  suscribeToClub(ClubId: string): Promise<void> {
    this.profile.clubs.push(ClubId)
    return this.update(this.profile);
  }


  unsuscribeToClub(ClubId: string): Promise<void> {
    let i = this.profile.clubs.indexOf(ClubId);
    if (i >= 0) this.profile.clubs.splice(i, 1)
    return this.update(this.profile);
  }

  update(profile: ProfileModel): Promise<void> {
    return this.profileDocRef.update(profile);
  }

  unSet() {
    this.profile = null
    this.profile$ = null;
  }

  create(uid: string, profile: ProfileModel): Promise<void> {
    this.profileCollection = this.angularFirestore.collection('profiles');
    this.profile = profile;
    this.profile.id = uid;
    //fireStore no admite clases personalizadas, deben ser objetos
    //https://stackoverflow.com/questions/37300338/how-can-i-convert-a-typescript-object-to-a-plain-object
    let profileObj = Object.assign({}, this.profile)
    return this.profileCollection.doc(uid).set(profileObj)
  }

}
