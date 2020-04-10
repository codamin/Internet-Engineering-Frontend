import React from 'react'
import PropTypes from 'prop-types'
import OrderItem from 'components/restaurant/restaurantContainer/cart/orderItem'
import API from 'apis/api'
import {eng2fa} from 'utils/utils'
import {NotificationManager} from 'react-notifications';
import './cart.css'


function Cart(props) {

    function finalize() {
        API.post('cart/finalize').then(function (response) {
            props.updateFunction();
        }).catch(error => {
            if (error.response) {
                NotificationManager.error(error.response.data);
              }})
    }

    if(!props){
        return (
            <div class="spinner-border" role="status"></div>
        )
    }
    return(
        <div className="container cart cart-box">
            <div className="row p-2 justify-content-center">
                <div className="col-auto p-2 flex-container menu-name">سبد خرید</div>
            </div>
            <div className="row p-3">
                <div className="col-12 flex-container">
                    <div className="container cart-container px-2">
                        {props.cart.empty != 'true' && props.cart.orderItems ?
                        props.cart.orderItems.map(item => <OrderItem item={item} updateFunction={props.updateFunction} />) :
                        <div class="text-center mt-4">
                            <div class="spinner-border" role="status"></div>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="row pb-2 container total-price no-gutters">
                <div className="col-3 flex-container justify-content-end">تومان</div>
                <div className="col-3 flex-container justify-content-start">
                    {props.cart.finalPrice != undefined ?
                    eng2fa(props.cart.finalPrice) : 
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>}
                </div>
                <div className="col-6 flex-container justify-content-end persian total-sum">جمع کل:</div>
            </div>
            <div className="row m-2 no-gutters">
                <div className="col-12 mb-3 text-center">
                    <button type="button" className="btn  ml-2 mr-2 stat-button btn-finalize text-center no-gutters" onClick={finalize}>تایید نهایی</button>
                </div>
            </div>
        </div>
    );
}


Cart.propTypes = {
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
                restaurantName: PropTypes.string.isRequired,
                restaurantId: PropTypes.string.isRequired,
                count: PropTypes.number,
                oldPrice: PropTypes.number,
            }),
            number: PropTypes.number.isRequired
        }))
    }).isRequired
}

export default Cart