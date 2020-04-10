import React from 'react'
import PropTypes from 'prop-types'
import FoodMenu from 'components/restaurant/restaurantContainer/foodMenu'
import RestaurantMenu from 'components/restaurant/restaurantContainer/restaurantMenu'
import Cart from 'components/restaurant/restaurantContainer/cart/cart'
import './restaurantContainer.css'


function RestaurantContainer(props) {
    if(!props) {
        return (
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        )
    }
    return(
        <div className="container main-part">
            <div className="row pt-5 container">
                <FoodMenu />
            </div>
            <div className="row mt-5 no-gutters">
                <div className="col-8 right-border no-gutter">
                    <div className="row container restaurant-menu no-gutters">
                        {props.menu ?
                        <RestaurantMenu  menu={props.menu} updateFunction={props.updateFunction} /> : 
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>}
                    </div>
                </div>
                <div className="col-4 pl-4 no-gutters restaurant-cart">
                    {props.cart ?
                    <Cart cart={props.cart} updateFunction={props.updateFunction} /> :
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>}
                </div>
            </div>    
        </div>
    )
}

RestaurantContainer.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        restaurantName: PropTypes.string.isRequired,
        restaurantId: PropTypes.string.isRequired,
        count: PropTypes.number,
        oldPrice: PropTypes.number,
    })).isRequired,
    cart: PropTypes.shape({
        restaurantId: PropTypes.string,
        restaurantName: PropTypes.string,
        orderItems: PropTypes.arrayOf(PropTypes.shape({
            food: PropTypes.shape({
                name: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                popularity: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                image: PropTypes.string.isRequired,
                restaurantName: PropTypes.string.isRequired,
                restaurantId: PropTypes.string.isRequired,
                count: PropTypes.number,
                oldPrice: PropTypes.number,
            }),
            number: PropTypes.number.isRequired
        }))
    }).isRequired,
    updateFunction: PropTypes.func.isRequired
}

export default RestaurantContainer;
