import React from 'react'
import PropTypes from 'prop-types'

import MenuItem from 'components/restaurant/restaurantContainer/menuItem/'
import './restaurantMenu.css'

function RestaurantMenu(props) {
    if(!props || props.menu == undefined){
        return (
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        )
    }
    return props.menu.map((position, key) => {
        return(
            <MenuItem key={key} id={key} food={position} updateFunction={props.updateFunction} />
        )
    }); 
}

RestaurantMenu.propTypes = {
    menu: PropTypes.array.isRequired,
}

export default RestaurantMenu