import React from 'react'
import PropTypes from 'prop-types'

import OrderItem from 'components/restaurant/restaurantContainer/cart/orderItem'

import './cart.css'

function Cart(props) {
    if(!props){
        return (
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        )
    }
    return(
        <div className="container ml-4 cart cart-box">
            <div className="row p-2">
                <div className="col-3 flex-container"></div>
                <div className="col-6 flex-container menu-name">سبد خرید</div>
                <div className="col-3 flex-container"></div>
            </div>
            <div className="row p-3">
                <div className="col-12 flex-container">
                    <div className="container cart-container">
                        {props.cart.empty != 'true' && props.cart.orderItems ?
                        props.cart.orderItems.map(item => <OrderItem item={item} />) :
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="row pb-2 container total-price no-gutters">
                <div className="col-3 flex-container justify-content-end">تومان</div>
                <div className="col-3 flex-container justify-content-start">
                    {props.cart.finalPrice != undefined ?
                    props.cart.finalPrice : 
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>}
                </div>
                <div className="col-6 flex-container justify-content-end persian">جمع کل:</div>
            </div>
            <div className="row m-2 no-gutters">
                <div className="col-12 mb-3 text-center">
                    <button type="button" className="btn  ml-2 mr-2 stat-button btn-finalize text-center">تایید نهایی</button>
                </div>
            </div>
        </div>
    );
}


Cart.propTyeps = {
    cart: PropTypes.object.isRequired,
}

export default Cart