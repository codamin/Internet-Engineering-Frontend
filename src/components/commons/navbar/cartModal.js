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
        this.state = {}
    }

    componentDidMount() {}

    render() {
        return(
            <Modal show={this.props.show} onHide={this.props.handleClose} dialogClassName="cart-modal">
                <Cart cart={this.props.cart} updateFunction={this.props.updateFunction} />
            </Modal>
        );
    }
}   

export default CartModal;