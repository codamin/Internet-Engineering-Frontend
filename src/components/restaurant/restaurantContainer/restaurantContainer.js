import React from 'react'
import FoodMenu from 'components/restaurant/restaurantContainer/foodMenu'
import RestaurantMenu from 'components/restaurant/restaurantContainer/restaurantMenu'
import Cart from 'components/restaurant/restaurantContainer/cart/cart'

import './restaurantContainer.css'

function RestaurantContainer(props) {

    return(
        <div className="container main-part">
            <div className="row pt-5 container">
                <FoodMenu />
            </div>
            <div className="row mt-5 no-gutters">
                <div className="col-8 restaurants no-gutter">
                    <div className="row container">
                        <RestaurantMenu  menu={props.menu} />
                    </div>
                </div>
                <div className="col-4 no-gutters">
                    <Cart cart={props.cart} />
                </div>
            </div>    
        </div>
    )
}

export default RestaurantContainer;
