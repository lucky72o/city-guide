import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {TabsPage} from "../pages/tabs/tabs";
import {PublicTourPage} from "../pages/public-tour/public-tour";
import {PrivateTourPage} from "../pages/private-tour/private-tour";
import {MyAccountPage} from "../pages/my-account/my-account";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PublicTourPage,
    PrivateTourPage,
    MyAccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PublicTourPage,
    PrivateTourPage,
    MyAccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
