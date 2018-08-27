import {TourShortModel} from "../model/tour-short-model";

export class TourService {

  getUpcomingTours() {
    return [
      new TourShortModel("London Eye", "12.09.2018 16:00", "UPCOMING", "https://media-cdn.tripadvisor.com/media/photo-f/00/0f/77/7c/london-eye-as-seen-from.jpg"),
      new TourShortModel("Harry Potter Walking Tour for Muggles in London", "16.09.2018 12:00", "UPCOMING", "https://media-cdn.tripadvisor.com/media/photo-s/0e/b8/b2/b7/harry-potter-walking.jpg"),
      new TourShortModel("Tower of London, Changing of the Guard, Thames Cruise with Harrods Cream Tea", "21.09.2018 12:00", "UPCOMING", "https://media-cdn.tripadvisor.com/media/photo-s/12/90/1e/92/tower-of-london-changing.jpg")
    ]
  }

  getHistoryTours() {
    return [
      new TourShortModel("Buckingham Palace Tour Including Changing of the Guard Ceremony", "10.08.2018 16:00", "FINISHED", "https://media-cdn.tripadvisor.com/media/photo-s/13/a6/08/51/buckingham-palace-tour.jpg"),
      new TourShortModel("Stonehenge Inner Circle Access Day Trip from London Including Oxford and Windsor", "12.08.2018 10:00", "FINISHED", "https://media-cdn.tripadvisor.com/media/photo-s/11/73/2e/34/stonehenge-inner-circle.jpg")
    ]
  }

  getMyTours() {
    return [
      new TourShortModel("St. James's Park Walking Tour", "21.09.2018 10:00", "UPCOMING", "https://media-cdn.tripadvisor.com/media/photo-f/06/0a/44/c3/st-james-s-park.jpg")
    ]
  }
}
