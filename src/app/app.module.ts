import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';



import { MyApp } from './app.component';

import { HomePageModule } from '../pages/home/home.module';
import { RoutesPageModule } from '../pages/routes/routes.module';
import { LoginPageModule } from '../pages/login/login.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { ClubsPageModule } from '../pages/clubs/clubs.module';

import { AuthProvider } from './providers/auth.provider';
import { ProfileProvider } from './providers/profile.provider';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RoutesProvider } from './providers/routes.provider';


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
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ClubsPageModule,
    ProfilePageModule,
    HomePageModule,
    LoginPageModule,
    RoutesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    ProfileProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RoutesProvider,


  ]
})
export class AppModule { }
