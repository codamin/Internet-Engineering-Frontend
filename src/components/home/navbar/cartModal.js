import React from 'react'
import {Modal} from 'react-bootstrap'
import OrderItem from 'components/restaurant/restaurantContainer/cart/orderItem'
import Cart from 'components/restaurant/restaurantContainer/cart/cart'

import API from 'apis/api'

import './cartModal.css'
import Spinner from 'components/commons/spinner/spinner'
import {eng2fa} from 'utils/utils'


class CartModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: []
        }
        // this.update = this.update.bind(this)
        this.finalize = this.finalize.bind(this)
    }
    
    finalize() {
        API.post('cart/finalize').then(
            this.props.updateFunction()
        )
    }

    componentDidMount() {
        API.get('cart').then(
            jsonData => {
                this.setState({cart: jsonData.data});
                console.log(this.state.cart)
            }
        )
    }

    // update() {
    //     API.get('cart').then(
    //         jsonData => {
    //             this.setState({cart: jsonData.data});
    //             console.log(this.state.cart)
    //         }
    //     )
    // }

    render() {
        if(this.props.cart == undefined || this.props.updateFunction == undefined) {
            return "fuck";
        }
        return(
            <Modal show={this.props.show} onHide={this.props.handleClose} dialogClassName="cart-modal">
                <Cart cart={this.props.cart} updateFunction={this.props.updateFunction} />
            </Modal>
        );
    }
}   

export default CartModal;