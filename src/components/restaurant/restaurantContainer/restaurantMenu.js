import React from 'react'
import MenuItem from 'components/restaurant/restaurantContainer/menuItem/'
import './restaurantMenu.css'

function RestaurantMenu(props) {
    if(!props || props.menu == undefined){
        return null; //You can change here to put a customized loading spinner 
    }
    return(
        <div className="row container">
            {props.menu.map(f => <MenuItem key={f.name} food={f} />)}
        </div>
    );
}

export default RestaurantMenu