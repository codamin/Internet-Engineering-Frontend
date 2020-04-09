import React from 'react'

import OrderItem from 'components/restaurant/restaurantContainer/cart/orderItem'

import API from 'apis/api'

import './cartModal.css'
import Spinner from 'components/commons/spinner'
import star from 'Assets/Icons/star.png'
import {eng2fa} from 'utils/utils'


class CartModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cart: []
        }
        this.update = this.update.bind(this)
    }
    
    componentDidMount() {
        API.get('cart').then(
            jsonData => {
                this.setState({cart: jsonData.data});
                console.log(this.state.cart)
            }
        )
    }

    update() {
        API.get('cart').then(
            jsonData => {
                this.setState({cart: jsonData.data});
                console.log(this.state.cart)
            }
        )
    }

    render() {
        return(
            <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div class="modal-dialog cart-modal">
                    <div className="container cart cart-box modal-content">
                        <div className="row p-2 justify-content-center">
                            <div className="col-auto p-2 flex-container menu-name">سبد خرید</div>
                        </div>
                        <div className="row p-3">
                            <div className="col-12 flex-container">
                                <div className="container cart-container">
                                    {this.state.cart.empty != 'true' && this.state.cart.orderItems ?
                                    this.state.cart.orderItems.map(item => <OrderItem item={item} updateFunction={this.update} />) :
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <div className="row pb-2 container total-price no-gutters">
                            <div className="col-3 flex-container justify-content-end">تومان</div>
                            <div className="col-3 flex-container justify-content-start">
                                {this.state.cart.finalPrice != undefined ?
                                eng2fa(this.state.cart.finalPrice) : 
                                <Spinner />}
                            </div>
                            <div className="col-6 flex-container justify-content-end persian total-sum">جمع کل:</div>
                        </div>
                        <div className="row m-2 no-gutters">
                            <div className="col-12 mb-3 text-center">
                                <button type="button" className="btn  ml-2 mr-2 stat-button btn-finalize text-center no-gutters">تایید نهایی</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}   

export default CartModal;