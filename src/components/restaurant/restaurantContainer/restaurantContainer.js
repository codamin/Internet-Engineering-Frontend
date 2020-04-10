import React from 'react'
import PropTypes from 'prop-types'
import FoodMenu from 'components/restaurant/restaurantContainer/foodMenu'
import RestaurantMenu from 'components/restaurant/restaurantContainer/restaurantMenu'
import Cart from 'components/restaurant/restaurantContainer/cart/cart'
import './restaurantContainer.css'


function RestaurantContainer(props) {
    if(!props)
        return <div className="spinner-border" role="status"/>
    return(
        <div className="container-fluid main-part ">
            <div className="row pt-5 justify-content-center mx-auto">
                <FoodMenu />
            </div>
            <div className="row mt-5 no-gutters rest-page-main-row d-flex flex-nowrap mx-auto">
                <div className="col pr-0 right-border no-gutter">
                    <div className="row rev-dir jusitfy-content-right container restaurant-menu no-gutters ml-auto px-0">
                        {props.menu ?
                        <RestaurantMenu  menu={props.menu} updateFunction={props.updateFunction} /> : 
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>}
                    </div>
                </div>
                <div className="col-auto pl-4 no-gutters restaurant-cart">
                    {props.cart ?
                    <Cart cart={props.cart} updateFunction={props.updateFunction} /> :
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>}
                </div>
            </div>    
        </div>
    )
}

RestaurantContainer.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        restaurantName: PropTypes.string.isRequired,
        restaurantId: PropTypes.string.isRequired,
        count: PropTypes.number,
        oldPrice: PropTypes.number,
    })).isRequired,
    cart: PropTypes.shape({
        restaurantId: PropTypes.string,
        restaurantName: PropTypes.string,
        orderItems: PropTypes.arrayOf(PropTypes.shape({
            food: PropTypes.shape({
                name: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                popularity: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                image: PropTypes.string.isRequired,
                restaurantName: PropTypes.string,
                restaurantId: PropTypes.string,
                count: PropTypes.number,
                oldPrice: PropTypes.number,
            }),
            number: PropTypes.number.isRequired
        }))
    }).isRequired,
    updateFunction: PropTypes.func.isRequired
}

export default RestaurantContainer;
