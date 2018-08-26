import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AuthService} from "../../services/auth";


@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {

  constructor(private navCtrl: NavController) {
  }


}
