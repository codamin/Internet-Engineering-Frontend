import React from 'react'
import PropTypes from 'prop-types'
import './restaurantName.css'


function RestaurantName(props) {
    if(!props){
        return (
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        )
    }
    return(
        <div className="row m-4 flex-container">
            {props.name ?
            <h2 className="khames">{props.name}</h2> :
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>}
        </div>
    )
}

RestaurantName.propTypes = {
    name: PropTypes.string.isRequired,
}

export default RestaurantName;