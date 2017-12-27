import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RoutesPage } from '../pages/routes/routes';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';

import { AuthProvider } from './providers/auth.provider';
import { ProfileProvider } from './providers/profile.provider';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


export const firebaseConfig = {
  apiKey: "AIzaSyCvAQ_kZUsjZToIt2eoe_Mx_rIJtF4HReo",
  authDomain: "bicli-d6a9c.firebaseapp.com",
  databaseURL: "https://bicli-d6a9c.firebaseio.com",
  storageBucket: "bicli-d6a9c.appspot.com",
  messagingSenderId: '393681130609',
  projectId: "bicli-d6a9c",
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RoutesPage,
    LoginPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RoutesPage,
    LoginPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    ProfileProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },


  ]
})
export class AppModule { }
