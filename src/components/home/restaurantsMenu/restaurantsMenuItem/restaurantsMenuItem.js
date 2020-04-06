import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom'
import './restaurantsMenuItem.css'
import pizza from 'Assets/Icons/pizza.png'

function RestaurantsMenuItem(props) {
    return(
        <div className="container restaurant-item m-3 pb-0 px-3 pt-3 shadow rounded-lg">
            <div className="row justify-content-center">
                <img className="restaurant-logo" src={props.restaurantData.logo}/>
            </div>
            <div className="row my-4">
                <div className="col text-center">
                    {props.restaurantData.name}
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <button type="submit" className="btn menu-btn">
                        <Link to={`/restaurant/${props.restaurantData.id}`}>
                        نمایش منو
                        </Link>
                    </button>
                 </div>
            </div>
        </div>
    );
}

export default RestaurantsMenuItem;