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
            <div>
                <Navbar />
                <RestaurantHeader />
                <RestaurantName name={this.state.data.name} />
                <RestaurantContainer menu={this.state.data.menu} cart={this.state.cart} />
                <Footer />
            </div>
        )
    }
}

export default Restaurant;