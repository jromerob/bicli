import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AgmCoreModule } from '@agm/core';

import { ComponentsModule } from './components/components.module';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home.page';
import { RoutesPage } from '../pages/routes/routes.page';
import { RouteDetailPage } from '../pages/route-detail/route-detail.page';
import { LoginPage } from '../pages/login/login.page';
import { ProfilePage } from '../pages/profile/profile.page';
import { ClubsPage } from '../pages/clubs/clubs.page';
import { ClubDetailPage } from '../pages/club-detail/club-detail.page';
import { MeetingPointDetailPage } from '../pages/meetingPoint-detail/meeting-point-detail.page';

import { AuthProvider } from './providers/auth.provider';
import { ProfileProvider } from './providers/profile.provider';
import { ToastProvider } from './providers/toast.provider';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RoutesProvider } from './providers/routes.provider';
import { ClubsProvider } from './providers/clubs.provider';


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
    ClubsPage,
    ClubDetailPage,
    ProfilePage,
    HomePage,
    LoginPage,
    RoutesPage,
    RouteDetailPage,
    MeetingPointDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ClubsPage,
    ClubDetailPage,
    ProfilePage,
    HomePage,
    LoginPage,
    RoutesPage,
    RouteDetailPage,
    MeetingPointDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    ProfileProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RoutesProvider,
    ClubsProvider,
    ToastProvider
  ]
})
export class AppModule { }
