import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {TourService} from "../../services/tour";
import {TourShortModel} from "../../model/tour-short-model";
import {TourDetailsPage} from "../tour-details/tour-details";


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
    this.upcomingTours = this.tourService.getUpcomingToursShort();
    this.historyTours = this.tourService.getHistoryToursShort();
    this.myTours = this.tourService.getMyToursShort();
  }

  onLoadTourDetails(id: string) {
    this.navCtrl.push(TourDetailsPage, {"tourId": id})
  }


}
