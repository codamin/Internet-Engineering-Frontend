import React from 'react'
import css from './restaurantHeader.css'
import mcLogo from './McDonalds.png'

function RestaurantHeader() {
    return(
        <>
            <div className="jumbotron">
            </div>
            <div className="container flex-container">
                <img className="macLogo" src={mcLogo} alt="McDonald's" />
            </div>
        </>
    );
}

export default RestaurantHeader