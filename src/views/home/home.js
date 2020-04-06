import React, { Component } from 'react';
import Navbar from 'components/home/navbar/navbar'
import Footer from 'components/commons/footer/footer'
import MainLogo from 'components/home/mainLogo/mainLogo'
import FoodPartyMenu from 'components/home/foodPartyMenu/foodPartyMenu'
import RestaurantsMenu from 'components/home/restaurantsMenu/restaurantsMenu';


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <MainLogo/>
        <FoodPartyMenu/>
        <RestaurantsMenu/>
        <Footer/>
      </div>
    );
  }
}

export default Home;