import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController} from 'ionic-angular';
import {AuthService} from "../../services/auth";
import {NgForm} from "@angular/forms";
import {MyAccountPage} from "../my-account/my-account";


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController,
              private authService: AuthService,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) {
  }

  onSignin(form: NgForm) {

    const loading = this.loadingCtrl.create({
      content: "Signing you in.."
    });

    loading.present();

    this.authService.sigin(form.value.email, form.value.password)
      .then(data => {
        this.authService.setAuthenticated(true);
        loading.dismiss();
        this.navCtrl.push(MyAccountPage)
      })
      .catch(error => {
        loading.dismiss();

        const alert = this.alertCtrl.create({
          title: "Can't sign you in",
          message: error.message,
          buttons: ['Ok']
        });

        alert.present();
      })
  }

}
