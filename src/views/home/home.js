import React, { Component } from 'react';
import Navbar from 'components/navbar/navbar'
import Footer from 'components/footer/footer'
import MainLogo from 'components/mainLogo/mainLogo'
import FoodPartyMenu from 'components/foodPartyMenu/foodPartyMenu'
import RestaurantsMenu from 'components/restaurantsMenu/restaurantsMenu';

//////
  import API from 'apis/api'
  API.get('restaurant').then(res => console.log(res.data));
//////

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