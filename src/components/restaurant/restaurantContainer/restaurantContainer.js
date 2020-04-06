import React from 'react'
import FoodMenu from 'components/restaurant/restaurantContainer/foodMenu'
import RestaurantMenu from 'components/restaurant/restaurantContainer/restaurantMenu'
import Cart from 'components/restaurant/restaurantContainer/cart/cart'

import './restaurantContainer.css'

function RestaurantContainer(props) {

    return(
        <div className="container restaurant-container">
            <div className="row pt-5 container">
                <FoodMenu />
            </div>
            <div className="row mt-5 no-gutters">
                <div className="col-8 right-border no-gutter">
                    <div className="row container restaurant-menu no-gutters">
                        <RestaurantMenu  menu={props.menu} onChang={props.onChang} />
                    </div>
                </div>
                <div className="col-4 no-gutters restaurant-cart">
                    <Cart cart={props.cart} onChang={props.onChang} />
                </div>
            </div>    
        </div>
    )
}

export default RestaurantContainer;
