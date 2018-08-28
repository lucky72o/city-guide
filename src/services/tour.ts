import {TourShortModel} from "../model/tour-short-model";
import {TourFullModel} from "../model/tour-full-model";

export class TourService {

  getUpcomingToursShort() {
    return [
      new TourShortModel("id111", "London Eye", "12.09.2018 16:00", "UPCOMING", "https://media-cdn.tripadvisor.com/media/photo-f/00/0f/77/7c/london-eye-as-seen-from.jpg"),
      new TourShortModel("id222", "Harry Potter Walking Tour for Muggles in London", "16.09.2018 12:00", "UPCOMING", "https://media-cdn.tripadvisor.com/media/photo-s/0e/b8/b2/b7/harry-potter-walking.jpg"),
      new TourShortModel("id333", "Tower of London, Changing of the Guard, Thames Cruise with Harrods Cream Tea", "21.09.2018 12:00", "UPCOMING", "https://media-cdn.tripadvisor.com/media/photo-s/12/90/1e/92/tower-of-london-changing.jpg")
    ]
  }

  getHistoryToursShort() {
    return [
      new TourShortModel("id444", "Buckingham Palace Tour Including Changing of the Guard Ceremony", "10.08.2018 16:00", "FINISHED", "https://media-cdn.tripadvisor.com/media/photo-s/13/a6/08/51/buckingham-palace-tour.jpg"),
      new TourShortModel("id555", "Stonehenge Inner Circle Access Day Trip from London Including Oxford and Windsor", "12.08.2018 10:00", "FINISHED", "https://media-cdn.tripadvisor.com/media/photo-s/11/73/2e/34/stonehenge-inner-circle.jpg")
    ]
  }

  getMyToursShort() {
    return [
      new TourShortModel("id666", "St. James's Park Walking Tour", "21.09.2018 10:00", "UPCOMING", "https://media-cdn.tripadvisor.com/media/photo-f/06/0a/44/c3/st-james-s-park.jpg")
    ]
  }

  getTour(id: string) {
    if (id == "id111") {
      return new TourFullModel("id111", "London Eye",
        "Enjoy the best views of London from the world famous London Eye. The 360 degree views of historic London are not to be missed.",
        "Vik", "12.09.2018 16:00", "UPCOMING", "https://media-cdn.tripadvisor.com/media/photo-f/00/0f/77/7c/london-eye-as-seen-from.jpg")
    }
    else if (id == "id222") {
      return new TourFullModel("id222", "Harry Potter Walking Tour for Muggles in London",
        "Meet your Harry Potter guide and group near London Bridge on Duke Hill Street. Walking is the main mode of transport on this tour, but you'll also take the tube to Westminster Station (own expense).\n" +
        "\n" +
        "As you make your way around London with your guide, he or she tells you valuable, lesser-known facts about the Harry Potter movies. Plus, you get the chance to see London’s filming locations close up. Other spots you can look at are real-life places that inspired some of the fantasy series' locations, such as Diagon Alley, the Leaky Cauldron, and the Ministry of Magic.",
        "Slav", "16.09.2018 12:00", "UPCOMING", "https://media-cdn.tripadvisor.com/media/photo-s/0e/b8/b2/b7/harry-potter-walking.jpg");
    }
    else if (id == "id333") {
      return new TourFullModel("id333", "Tower of London, Changing of the Guard, Thames Cruise with Harrods Cream Tea",
        "Begin your full-day tour of London’s top highlights at Victoria Coach Station. Meet your guide and board an air-conditioned coach destined for St. Paul's Cathedral and Westminster Abbey, a Gothic church with royal connections.\n" +
        "\n" +
        "Next you’ll visit Buckingham Palace, the Queen’s official London residence, and witness the Changing of the Guard (on days when it is held). Then, it’s on to the UNESCO-listed Tower of London where guaranteed entry means you’ll skip the ticket lines and see the glittering Crown Jewels.",
        "Nic","21.09.2018 12:00", "UPCOMING", "https://media-cdn.tripadvisor.com/media/photo-s/12/90/1e/92/tower-of-london-changing.jpg");
    }
    else if (id == "id444") {
      return new TourFullModel("id444", "Buckingham Palace Tour Including Changing of the Guard Ceremony",
        "Meet your guide at a central London location before strolling through St. James’s Park—one of the capital’s eight Royal Parks—to get to Buckingham Palace.\n" +
        "\n" +
        "You’ll experience the palace at its liveliest with the Changing of the Guard, a traditional ceremony that sees guards wearing red jackets and bearskin hats on the march, accompanied by a military band. Or, on days when the ceremony isn’t held, learn about Buckingham Palace’s history and intrigue on a walking tour.",
        "Lisa1990","10.08.2018 16:00", "FINISHED", "https://media-cdn.tripadvisor.com/media/photo-s/13/a6/08/51/buckingham-palace-tour.jpg");
    }
    else if (id == "id555") {
      return new TourFullModel("id555", "Stonehenge Inner Circle Access Day Trip from London Including Oxford and Windsor",
        "Make your way to the group’s meeting point in central London, and board an air-conditioned coach for the ride out of the city to Windsor.\n" +
        "\n" +
        "While in Windsor, you’ll enjoy a walking tour of the town that lies on the Thames River. If you’ve upgraded your experience, skip the walking tour and head to Windsor Castle for a visit. \n" +
        "\n" +
        "At Windsor Castle, you’ll arrive early enough to beat the often-large crowds, and embark immediately on a guided tour including St. George’s Chapel and the State Apartments. Ask any questions about the castle’s long history and the royal family before boarding the coach, now bound for Stonehenge.\n",
        "Iain","12.08.2018 10:00", "FINISHED", "https://media-cdn.tripadvisor.com/media/photo-s/11/73/2e/34/stonehenge-inner-circle.jpg");
    }
    else if (id == "id666") {
      return new TourFullModel("id666", "St. James's Park Walking Tour",
        "This 90-acre park, the oldest Royal Park in London, features a large lake that is a wildlife sanctuary for ducks, geese, swans and even pelicans.",
        "Michael","21.09.2018 10:00", "UPCOMING", "https://media-cdn.tripadvisor.com/media/photo-f/06/0a/44/c3/st-james-s-park.jpg");
    }
  }
}
