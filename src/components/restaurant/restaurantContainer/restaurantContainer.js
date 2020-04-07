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
<<<<<<< HEAD
                <div className="col-8 right-border no-gutter">
                    <div className="row container restaurant-menu no-gutters">
                        {props.menu ?
                        <RestaurantMenu  menu={props.menu} onChang={props.onChang} /> : 
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>}
                    </div>
                </div>
                <div className="col-4 no-gutters restaurant-cart">
                    {props.cart ?
                    <Cart cart={props.cart} onChang={props.onChang} /> :
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>}
=======
                <div className="col-8 restaurants no-gutter">
                    <div className="row container">
                        <RestaurantMenu  menu={props.menu} />
                    </div>
                </div>
                <div className="col-4 no-gutters">
                    <Cart cart={props.cart} />
>>>>>>> 6e6b0542b8a311c24fa26df5aaf442111813d9be
                </div>
            </div>    
        </div>
    )
}

RestaurantContainer.propTypes = {
    menu: PropTypes.array.isRequired,
    cart: PropTypes.object.isRequired,
}

export default RestaurantContainer;
