import React, { Component } from 'react';
import Navbar from 'components/commons/navbar/navbar'
import Footer from 'components/commons/footer/footer'
import MainLogo from 'components/home/mainLogo/mainLogo'
import FoodPartyMenu from 'components/home/foodPartyMenu/foodPartyMenu'
import RestaurantsMenu from 'components/home/restaurantsMenu/restaurantsMenu';
import API from 'apis/api'
import {NotificationManager} from 'react-notifications';
import authHeader from '../../services/auth-header';
import { Redirect } from 'react-router';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: undefined,
      restaurants: undefined,
      restaurantSearch: undefined,
      foodSearch: undefined,
      page: 1,
      items: 8,
      isInSearch: false
    }
    this.updateCart = this.updateCart.bind(this);
    this.updateRestaurants = this.updateRestaurants.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState(state =>({page: state.page + 1}))
    this.updateRestaurants(true, this.state.isInSearch, this.state.restaurantSearch, this.state.foodSearch)
  }
  
  updateCart() {
      API.get(`cart`, { headers: authHeader() }).then(
          jsonData => {
              this.setState({cart: jsonData.data});
      }).catch(error => {
        if(error.response.status == 401 || error.response.status == 403) {
          localStorage.removeItem("token");
          window.location.href = "http://185.166.105.6:31085/login"
        }
      })
  }

  updateRestaurants(loadMore = false, isSearch = false, restaurantSearchName, foodSearchName) {
      API.get('restaurant', 
      {
        params: {
            restaurantSearch: restaurantSearchName == '' ? null : restaurantSearchName,
            foodSearch: foodSearchName == '' ? null : foodSearchName,
            page: this.state.page,
            items: this.state.items
        }
        , headers: authHeader()
    }
    ).then(resp => {
      console.log('resp.data = ' , resp.data)
        if(resp.status == 200) {
          if(isSearch) {
            console.log(this.isInSearch)
            if(this.state.isInSearch == false) {
              this.setState({page: 1})
            }
            this.setState({isInSearch: true})
            this.setState({foodSearch:foodSearchName, restaurantSearch:restaurantSearchName})
            this.setState(state => ({restaurants: state.restaurants && state.isInSearch && loadMore == true? state.restaurants.concat(resp.data) : resp.data}))
          }
          else {
            if(this.state.isInSearch == true) {
              this.setState({page: 1})
            }
            this.setState({isInSearch: false})
            this.setState(state => ({restaurants: state.restaurants && state.isInSearch == false && loadMore? state.restaurants.concat(resp.data) : resp.data}))
          }
        }
        else{
            NotificationManager.error('خطا در انجام عملیات')
        }
    }).catch(error => {
      if(error.response.status == 401 || error.response.status == 403) {
        localStorage.removeItem("token");
        window.location.href = "http://185.166.105.6:31085/login"
      }
    })
  }

  componentDidMount() {
    this.updateCart()
    this.updateRestaurants(false, false)
  }

  render() {
    return (
      <div>
        <Navbar cart={this.state.cart} updateFunction={this.updateCart} isHome={true} isProfile={false} />
        <MainLogo updateRestaurants={this.updateRestaurants} />
        <FoodPartyMenu updateCart={this.updateCart}/>
        <RestaurantsMenu restaurants={this.state.restaurants} loadMore={this.loadMore}/>
        <Footer/>
      </div>
    );
  }
}

export default Home;