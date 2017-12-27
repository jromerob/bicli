import { Injectable } from '@angular/core';
import { AngularFireAuth, } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  //respuesta de firebase Ath con el usuario
  auth: any

  constructor(private afAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  // Registro de usuario
  registerProfile(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // El usuario se ha creado correctamente.
        this.auth = auth;
        return auth;
      })
      .catch(err => Promise.reject(err))
  }

  // Login de usuario
  loginProfile(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(auth => {
        this.auth = auth;
        Promise.resolve(auth)
        return auth;
      })
      .catch(err => Promise.reject(err))
  }

  // Login de usuario
  deleteProfile(uid: string) {
    alert("implementar borrado de auth");
  }

  // Logout de usuario
  logout() {
    this.afAuth.auth.signOut().then(
      () => {
        // hemos salido
      })
  }

  // Devuelve la session
  get Session() {
    return this.afAuth.authState;
  }


}
