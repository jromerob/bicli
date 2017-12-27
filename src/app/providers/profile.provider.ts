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
  private itemDocRef: AngularFirestoreDocument<ProfileModel>;

  constructor(private angularFirestore: AngularFirestore, private authProvider: AuthProvider) {
    //let profileCollection = angularFirestore.collection<ProfileModel>('profiles');

    // this.profileCollection = angularFirestore.collection('profiles', ref => ref.where('uid', '==', this.authProvider.auth.uid))
    // console.log('Hello ProfileProvider Provider');
    // @todo suscribir a los cambios dfe sesion
    //    this.authProvider.Session.subscribe(
  }

  set(uid: string) {
    this.itemDocRef = this.angularFirestore.doc<ProfileModel>(`profiles/${uid}`);
    this.profile$ = this.itemDocRef.valueChanges();

    this.itemDocRef.snapshotChanges().forEach(
      (doc: any) => {
        console.log("Obeniendo datos de usaurio !!!!!!!!!!!!!!!!!!!!!!!!!")
        this.profile = doc.payload.data()
      });
  }

  save() {

  }

  unSet() {
    this.profile = null
    this.profile$ = null;
  }

  create(uid: string, profile: ProfileModel) {
    this.profileCollection = this.angularFirestore.collection('profiles');
    this.profile = profile;
    this.profile.authUID = uid;
    //fireStore no admite clases personalizadas, deben ser objetos
    //https://stackoverflow.com/questions/37300338/how-can-i-convert-a-typescript-object-to-a-plain-object
    let profileObj = Object.assign({}, this.profile)
    // this.profileCollection.add(profileObj)
    //   .then(_ => console.log("usurio creado"))
    //   .catch(_ => {
    //     this.authProvider.deleteProfile(uid)
    //     this.profile = null;
    //     console.log("Error al crear el usurio")
    //   })
    this.profileCollection.doc(uid).set(profileObj)

  }

}
