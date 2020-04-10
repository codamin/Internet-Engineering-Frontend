import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes, { shape } from 'prop-types'
import './restaurantsMenuItem.css'

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

RestaurantsMenuItem.propTypes = {
    restaurantData: PropTypes.shape({
        description: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        location: PropTypes.objectOf(PropTypes.number). isRequired,
        logo: PropTypes.string.isRequired,
        menu: PropTypes.arrayOf(shape({
            available: PropTypes.bool.isRequired,
            count: PropTypes.number,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            oldPrice: PropTypes.number,
            popularity: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            restaurantId: PropTypes.string.isRequired,
            restaurantName: PropTypes.string.isRequired
        })),
        name: PropTypes.string,
    })
}

export default RestaurantsMenuItem;