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
      restaurants: undefined,
      restaurantSearch: undefined,
      foodSearch: undefined,
      page: 1,
      items: 10,
      isInSearch: false
    }
    this.updateCart = this.updateCart.bind(this);
    this.updateRestaurants = this.updateRestaurants.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState(state =>({page: state.page + 1}))
    this.updateRestaurants(this.state.isInSearch, this.state.restaurantSearch, this.state.foodSearch)
  }
  
  updateCart() {
      API.get(`cart`).then(
          jsonData => {
              this.setState({cart: jsonData.data});
      })
  }

  updateRestaurants(isSearch = false, restaurantSearchName, foodSearchName) {
    console.log('updateRestaurants called with params', restaurantSearchName, foodSearchName, this.state.page, this.state.items)
      API.get('restaurant', {
        params: {
            restaurantSearch: restaurantSearchName == '' ? null : restaurantSearchName,
            foodSearch: foodSearchName == '' ? null : foodSearchName,
            page: this.state.page,
            items: this.state.items
        }
    }).then(resp => {
      console.log('resp.data = ' , resp.data)
        if(resp.status == 200) {
          if(isSearch) {
            this.setState({isInSearch: true})
            this.setState({foodSearch:foodSearchName, restaurantSearch:restaurantSearchName})
            this.setState(state => ({restaurants: state.restaurants && state.isInSearch == true? state.restaurants.concat(resp.data) : resp.data}))
          }
          else {
            this.setState({isInSearch: false})
            this.setState(state => ({restaurants: state.restaurants && state.isInSearch == false? state.restaurants.concat(resp.data) : resp.data}))
          }
        }
        else{
            NotificationManager.error('خطا در انجام عملیات')
        }
    }).catch(e=> console.log('in catch' , e))
  }

  componentDidMount() {
    this.updateCart()
    this.updateRestaurants(false)
  }

  render() {
    return (
      <div>
        <Navbar cart={this.state.cart} updateFunction={this.updateCart} isHome={true} isProfile={false}/>
        <MainLogo updateRestaurants={this.updateRestaurants}/>
        <FoodPartyMenu updateCart={this.updateCart}/>
        <RestaurantsMenu restaurants={this.state.restaurants} loadMore={this.loadMore}/>
        <Footer/>
      </div>
    );
  }
}

export default Home;