import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {TourService} from "../../services/tour";
import {TourShortModel} from "../../model/tour-short-model";


@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage implements OnInit {

  tours: string = "upcoming";

  upcomingTours: TourShortModel[];
  historyTours: TourShortModel[];
  myTours: TourShortModel[];

  constructor(private navCtrl: NavController, private tourService: TourService) {
  }

  ngOnInit(): void {
    this.upcomingTours = this.tourService.getUpcomingTours();
    this.historyTours = this.tourService.getHistoryTours();
    this.myTours = this.tourService.getMyTours();
  }


}
