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
    })),
    updateFunction: PropTypes.func.isRequired,
}

export default RestaurantMenu