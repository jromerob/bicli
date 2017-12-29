import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthProvider } from './providers/auth.provider';
import { ProfileProvider } from './providers/profile.provider';

import { HomePage } from '../pages/home/home.page';
import { RoutesPage } from '../pages/routes/routes.page';
import { LoginPage } from '../pages/login/login.page';
import { ProfilePage } from '../pages/profile/profile.page';
import { ClubsPage } from '../pages/clubs/clubs.page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any, path: string }>;

  constructor(private profileProvider: ProfileProvider, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private authProvider: AuthProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage, path: 'home' },
      { title: 'Rutas', component: RoutesPage, path: 'routes' },
      { title: 'Clubs/Grupos', component: ClubsPage, path: 'clubs' },
      { title: 'Mi perfil', component: ProfilePage, path: 'profile' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.authProvider.Session.subscribe(
        (session) => {
          console.log("Cambio en la sesion")
          if (session) {
            console.log("Usuario logado nos dirigimos a inicio")
            this.profileProvider.set(session.uid);
            this.rootPage = HomePage;
          }
          else {
            console.log("Usuario no logado")
            this.profileProvider.unSet();
            this.rootPage = LoginPage;
          }
        }
      );
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    //this.nav.push(page.path);
  }

  logout() {
    this.authProvider.logout();
  }
}
