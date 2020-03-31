import React from 'react'
import FoodMenu from 'components/restaurant/restaurantContainer/foodMenu'
import RestaurantMenu from 'components/restaurant/restaurantContainer/restaurantMenu'

import './restaurantContainer.css'

function RestaurantContainer(props) {

    return(
        <div className="container main-part">
            <FoodMenu />
            <RestaurantMenu  fuck={props.menu} />
            {/* <RestaurantMenu fuck={fuck1} /> */}
            
        </div>
    )
}

export default RestaurantContainer;
