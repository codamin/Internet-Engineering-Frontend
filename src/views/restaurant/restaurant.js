import React, { Component } from 'react';
import Navbar from 'components/home/navbar/navbar'
import RestaurantHeader from 'components/restaurantHeader/restaurantHeader'
import RestaurantName from 'components/restaurant/restaurantName/restaurantName'
import RestaurantContainer from 'components/restaurant/restaurantContainer/restaurantContainer'
import Footer from 'components/commons/footer/footer'
import MainLogo from 'components/home/mainLogo/mainLogo'
import API from 'apis/api'
import { useParams } from 'react-router';

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            cart: [],
        }
        this.updateCart = this.updateCart.bind(this);
    }

    updateCart() {
        API.get(`cart`).then(
            jsonData => {
                this.setState({cart: jsonData.data});
                console.log(this.state.cart)
        })
    }

    componentDidMount() {
        const { restaurantId } = this.props.match.params
        API.get(`restaurant/${restaurantId}`).then(
            jsonData => {
                this.setState({data: jsonData.data});
            })
        API.get(`cart`).then(
            jsonData => {
                this.setState({cart: jsonData.data});
            })
    }

    render() {
        return (
            <div className="restaurant">
                <Navbar />
                <RestaurantHeader />
                <RestaurantName name={this.state.data.name} />
                <RestaurantContainer menu={this.state.data.menu} cart={this.state.cart} updateFunction={this.updateCart} />
                <Footer />
            </div>
        )
    }
}

export default Restaurant;