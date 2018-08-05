import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateTourPage } from './private-tour';

@NgModule({
  declarations: [
    PrivateTourPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateTourPage),
  ],
})
export class PrivateTourPageModule {}
