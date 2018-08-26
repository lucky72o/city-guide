import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {PublicTourPage} from "../public-tour/public-tour";
import {PrivateTourPage} from "../private-tour/private-tour";
import {MyAccountPage} from "../my-account/my-account";
import {SigninPage} from "../signin/signin";
import {AuthService} from "../../services/auth";


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  publicTour = PublicTourPage;
  privateTour = PrivateTourPage;
  myAccount: any = SigninPage;

  constructor(public navCtrl: NavController,
              private authService: AuthService) {
  }

  ionViewWillEnter() {
    if (this.authService.isAuthenticated()) {
      this.myAccount = MyAccountPage;
    } else {
      this.myAccount = SigninPage;
    }
  }

}
