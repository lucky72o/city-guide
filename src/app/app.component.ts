import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TabsPage} from "../pages/tabs/tabs";
import {SignupPage} from "../pages/signup/signup";
import {SigninPage} from "../pages/signin/signin";

import firebase from 'firebase'
import {AuthService} from "../services/auth";
import {PublicTourPage} from "../pages/public-tour/public-tour";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  tabsPage = TabsPage;
  signinPage = SigninPage;
  signupPage = SignupPage;

  @ViewChild('nav') nav: NavController;

  isAuthenticated = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private menuCtrl: MenuController, private authService: AuthService) {
    firebase.initializeApp({
      apiKey: "AIzaSyC7mJfwX_h2dvnqTHnYm10vYCGNTvRKr6o",
      authDomain: "city-guide-3f61f.firebaseapp.com"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authService.setAuthenticated(true);
        this.rootPage = TabsPage;
      } else {
        this.isAuthenticated = false;
        this.authService.setAuthenticated(false);
        this.rootPage = SigninPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {
    this.authService.sighOut();
    this.nav.setRoot(PublicTourPage);

    this.menuCtrl.close();
  }
}

