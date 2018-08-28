import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TourFullModel} from "../../model/tour-full-model";
import {TourService} from "../../services/tour";


@IonicPage()
@Component({
  selector: 'page-tour-details',
  templateUrl: 'tour-details.html',
})
export class TourDetailsPage implements OnInit {

  private tourDetails: TourFullModel;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private tourService: TourService) {
  }

  ngOnInit(): void {
    let tourId = this.navParams.get("tourId");
    this.tourDetails = this.tourService.getTour(tourId);
  }

}
