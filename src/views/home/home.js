import React, { Component } from 'react';
import Navbar from 'components/commons/navbar/navbar'
import Footer from 'components/commons/footer/footer'
import MainLogo from 'components/home/mainLogo/mainLogo'
import FoodPartyMenu from 'components/home/foodPartyMenu/foodPartyMenu'
import RestaurantsMenu from 'components/home/restaurantsMenu/restaurantsMenu';
import API from 'apis/api'
import {NotificationManager} from 'react-notifications';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: undefined,
      restaurants: undefined
    }
    this.updateCart = this.updateCart.bind(this);
    this.updateRestaurants = this.updateRestaurants.bind(this);
  }

  updateCart() {
      API.get(`cart`).then(
          jsonData => {
              this.setState({cart: jsonData.data});
      })
  }

  updateRestaurants(restaurantSearchName = '', foodSearchName = '') {
    console.log('updateRestaurants called with params', restaurantSearchName, foodSearchName)
      API.get('restaurant', {
        params: {
            restaurantSearch: restaurantSearchName,
            foodSearch: foodSearchName
        }
    }).then((resp) => {
        if(resp.status == 200) {
          this.setState({restaurants: resp.data})
        }
        else{
            NotificationManager.error('خطا در انجام عملیات')
        }
    })
  }

  componentDidMount() {
    this.updateCart()
    this.updateRestaurants()
  }

  render() {
    return (
      <div>
        <Navbar cart={this.state.cart} updateFunction={this.updateCart} isHome={true} isProfile={false}/>
        <MainLogo updateRestaurants={this.updateRestaurants}/>
        <FoodPartyMenu updateCart={this.updateCart}/>
        <RestaurantsMenu restaurants={this.state.restaurants}/>
        <Footer/>
      </div>
    );
  }
}

export default Home;