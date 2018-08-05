import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicTourPage } from './public-tour';

@NgModule({
  declarations: [
    PublicTourPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicTourPage),
  ],
})
export class PublicTourPageModule {}
