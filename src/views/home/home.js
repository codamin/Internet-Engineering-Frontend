import React, { Component } from 'react';
import Navbar from 'components/commons/navbar/navbar'
import Footer from 'components/commons/footer/footer'
import MainLogo from 'components/home/mainLogo/mainLogo'
import FoodPartyMenu from 'components/home/foodPartyMenu/foodPartyMenu'
import RestaurantsMenu from 'components/home/restaurantsMenu/restaurantsMenu';
import API from 'apis/api'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    }
    this.updateCart = this.updateCart.bind(this);
  }

  updateCart() {
      API.get(`cart`).then(
          jsonData => {
              this.setState({cart: jsonData.data});
              // console.log(this.state.cart)
      })
  }

  componentDidMount() {
    API.get(`cart`).then(
        jsonData => {
            this.setState({cart: jsonData.data});
        })
}

  render() {
    return (
      <div>
        <Navbar cart={this.state.cart} updateFunction={this.updateCart} isHome={true} isProfile={false}/>
        <MainLogo/>
        <FoodPartyMenu/>
        <RestaurantsMenu/>
        <Footer/>
      </div>
    );
  }
}

export default Home;