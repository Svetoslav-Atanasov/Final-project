import React, { Component } from "react";
import OffersDisplay from "../OffersDisplay/OffersDisplay";
import { withRouter } from "react-router";

class Offers extends Component {
  state = {
    offers: [
      {
        id: 1,
        name: "Saglasie theatre play",
        description: "A tragedy of love",
        price: 10,
        category: "Culture",
        image:
          "https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/cp0/e15/q65/p960x960/51794288_10157216040984548_6390627658153066496_o.jpg?_nc_cat=101&efg=eyJpIjoidCJ9&_nc_ht=scontent.fsof3-1.fna&oh=a0d2751197940e5b20073a5ec3cbef1f&oe=5CDAE943"
      },
      {
        id: 2,
        name: "Leon Bridges concert",
        description: "Soul singer concert",
        price: 54,
        category: "Culture",
        image: "http://thekey.xpn.org/aatk/files/2015/10/LeonBridges-18.jpg"
      },
      {
        id: 3,
        name: "IO Last On Earth",
        description: "The mystery sci-fi thriller",
        price: 8,
        category: "Culture",
        image:
          "https://www.whats-on-netflix.com/wp-content/uploads/2019/01/io-netflix-ending-explained.jpg"
      },
      {
        id: 4,
        name: "Sushi",
        description: "A dozen of delicious sushi just for you",
        price: 32,
        category: "Eating Out",
        image:
          "https://ecs7.tokopedia.net/img/product-1/2018/12/5/45119439/45119439_7495e541-32aa-4f83-a8b0-755f731b6e60_1920_1080.jpg"
      },
      {
        id: 5,
        name: "Pasta",
        description: "Home-made pasta for the whole family",
        price: 12,
        category: "Eating Out",
        image:
          "https://static01.nyt.com/images/2016/08/15/dining/15COOKING-PASTA/15COOKING-PASTA-threeByTwoMediumAt2X-v2.jpg"
      },
      {
        id: 6,
        name: "Salad",
        description: "Healty salad for your healthy diet",
        price: 8,
        category: "Eating Out",
        image:
          "https://assets.bonappetit.com/photos/5ad51b07ff795274c43a0f58/16:9/w_1200,c_limit/20180403_Basically_122.jpg"
      },
      {
        id: 7,
        name: "Paris",
        description: "The city of love for a whole week",
        price: 333,
        category: "Vacations",
        image: "http://www.alriyadh.com/media/thumb/08/06/1000_86966d469e.jpg"
      },
      {
        id: 8,
        name: "New York",
        description: "Fulfill your American dream now",
        price: 654,
        category: "Vacations",
        image:
          "https://www.thebalancecareers.com/thmb/CiTDz6Wil7NCP66UF5d1_pZgoRI=/3865x2576/filters:no_upscale()/high-angle-view-of-lower-east-side-manhattan-downtown--new-york-city--usa-640006562-5ae52a273de423003776ae2e.jpg"
      },
      {
        id: 9,
        name: "Tokyo",
        description:
          "The home of technology giants, ancient cultures and manga for a special prize",
        price: 1256,
        category: "Vacations",
        image:
          "https://cdn.fodors.com/wp-content/uploads/2018/07/shutterstock_1012724596.jpg"
      }
    ]
  };

  render() {
    console.log(this.props);
    console.log(this.state.offers);
    return this.props.match.params && this.props.match.params.categoryType ? (
      <div>
        <OffersDisplay
          allOffers={this.state.offers.filter(offer => offer.category.toLowerCase() == this.props.match.params.categoryType.toLowerCase())}
        />
      </div>
    ) : (
      <div>
        <OffersDisplay allOffers={this.state.offers} />
      </div>
    );
  }
}

export default withRouter(Offers);
