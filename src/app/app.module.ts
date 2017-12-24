import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RoutesPage } from '../pages/routes/routes';
import { LoginPage } from '../pages/login/login';

import { AuthProvider } from './providers/auth.provider';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
  apiKey: "AIzaSyCvAQ_kZUsjZToIt2eoe_Mx_rIJtF4HReo",
  authDomain: "bicli-d6a9c.firebaseapp.com",
  databaseURL: "https://bicli-d6a9c.firebaseio.com",
  storageBucket: "bicli-d6a9c.appspot.com",
  messagingSenderId: '393681130609'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RoutesPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RoutesPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
