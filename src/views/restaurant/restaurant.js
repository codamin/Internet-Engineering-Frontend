import React, { Component } from 'react';
import Navbar from 'components/commons/navbar/navbar'
import RestaurantHeader from 'components/restaurant/restaurantHeader/restaurantHeader'
import RestaurantName from 'components/restaurant/restaurantName/restaurantName'
import RestaurantContainer from 'components/restaurant/restaurantContainer/restaurantContainer'
import Footer from 'components/commons/footer/footer'
import API from 'apis/api'
import authHeader from '../../services/auth-header';

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            cart: {},
        }
        this.updateCart = this.updateCart.bind(this);
    }

    updateCart() {
        API.get(`cart`, { headers: authHeader() }).then(
            jsonData => {
                this.setState({cart: jsonData.data});
        }).catch(error => {
            console.log(error.response.status)
            if(error.response.status == 401 || error.response.status == 403) {
              localStorage.removeItem("token")
              window.location.href = "http://185.166.105.6:31085/login"
            }
          })
    }

    componentDidMount() {
        const { restaurantId } = this.props.match.params
        API.get(`restaurant/${restaurantId}`, { headers: authHeader() }).then(
            jsonData => {
                this.setState({data: jsonData.data});
            }).catch(error => {
                console.log(error.response.status)
                if(error.response.status == 401 || error.response.status == 403) {
                  localStorage.removeItem("token")
                  window.location.href = "http://185.166.105.6:31085/login"
                }
              })
        API.get(`cart`, { headers: authHeader() }).then(
            jsonData => {
                this.setState({cart: jsonData.data});
            }).catch(error => {
                console.log(error.response.status)
                if(error.response.status == 401 || error.response.status == 403) {
                  localStorage.removeItem("token")
                  window.location.href = "http://185.166.105.6:31085/login"
                }
              })
    }

    render() {
        return (
            <div className="restaurant">
                <Navbar cart={this.state.cart} updateFunction={this.updateCart} isHome={false} isProfile={false}/>
                <RestaurantHeader logo={this.state.data.logo} />
                <RestaurantName name={this.state.data.name} />
                <RestaurantContainer menu={this.state.data.menu} cart={this.state.cart} updateFunction={this.updateCart} />
                <Footer />
            </div>
        )
    }
}

export default Restaurant;