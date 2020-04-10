import React from 'react'
import './restaurantHeader.css'
import mcLogo from './McDonalds.png'

function RestaurantHeader(props) {
    return(
        <div>
            <div className="jumbotron jumbotron-fluid">
            </div>
            <div className="container flex-container">
                <img className="macLogo" src={props.logo == undefined ? mcLogo : props.logo} alt="McDonald's" />
            </div>
        </div>
    );
}

export default RestaurantHeader