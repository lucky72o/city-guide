import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PublicTourPage} from "../public-tour/public-tour";
import {PrivateTourPage} from "../private-tour/private-tour";
import {MyAccountPage} from "../my-account/my-account";


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  publicTour = PublicTourPage;
  privateTour = PrivateTourPage;
  myAccount = MyAccountPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
