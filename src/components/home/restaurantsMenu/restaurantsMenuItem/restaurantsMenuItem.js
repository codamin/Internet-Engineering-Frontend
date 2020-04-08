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
        <div className="container restaurant-item m-4 px-3 pt-3">
            <div className="row mt-2 justify-content-center">
                <img className="restaurant-logo" src={props.restaurantData.logo}/>
            </div>
            <div className="row my-4">
                <div className="col text-center text-truncate">
                    {props.restaurantData.name}
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto justify-content-center">
                    <button type="submit" className="btn menu-dislply-btn px-4 rounded-lg">
                        <Link to={`/restaurant/${props.restaurantData.id}`} className="menu-display-link">
                            نمایش منو
                        </Link>
                    </button>
                 </div>
            </div>
        </div>
    );
}

// کافه رستوران ایتالیایی ریچی (اسپرلوس سابق)
export default RestaurantsMenuItem;