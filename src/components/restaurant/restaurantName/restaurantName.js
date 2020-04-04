import React from 'react'
import './restaurantName.css'

function RestaurantName(props) {
    return(
        <div className="row m-4 flex-container">
            <h2 className="khames">{props.name}</h2>
        </div>
    )
}

export default RestaurantName;