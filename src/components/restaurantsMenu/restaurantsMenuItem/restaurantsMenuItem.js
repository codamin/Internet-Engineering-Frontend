import React from 'react'
import './restaurantsMenuItem.css'
import pizza from 'Assets/Icons/pizza.png'

function RestaurantsMenuItem() {
    return(
        <div className="container restaurant-item m-3 pb-0 px-3 pt-3 shadow rounded-lg">
            <div className="row justify-content-center">
                <img className="restaurant-logo" src={pizza}/>
            </div>
            <div className="row my-4    ">
                <div className="col text-center">
                    Khames Fried Chicken
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <button type="submit" className="btn menu-btn">نمایش منو</button>
                 </div>
            </div>
        </div>
    );
}

export default RestaurantsMenuItem;