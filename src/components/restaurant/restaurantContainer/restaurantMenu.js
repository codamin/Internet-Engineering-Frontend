import React from 'react'
import MenuItem from 'components/restaurant/restaurantContainer/menuItem/'
import './restaurantMenu.css'

function RestaurantMenu(props) {
    if(!props || props.menu == undefined){
        return null; //You can change here to put a customized loading spinner 
    }
    return props.menu.map((position, key) => {
        return(
            <div className="row container">
                {/* {props.menu.map(f => <MenuItem key={key} food={f} />)} */}
                <MenuItem key={key} id={key} food={position} />
            </div>
        )
    });
}

export default RestaurantMenu