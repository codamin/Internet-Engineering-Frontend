import React from 'react'
import {Modal} from 'react-bootstrap'
import OrderItem from 'components/restaurant/restaurantContainer/cart/orderItem'
import Cart from 'components/restaurant/restaurantContainer/cart/cart'
import PropTypes from 'prop-types'


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

CartModal.propTypes = {
    cart: PropTypes.shape({
        empty: PropTypes.bool.isRequired,
        finalPrice: PropTypes.number.isRequired,
        orderItems: PropTypes.arrayOf(PropTypes.shape({
            food: PropTypes.shape({
                available: PropTypes.bool.isRequired,
                count: PropTypes.number,
                description: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                oldPrice: PropTypes.number,
                popularity: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                restaurantId: PropTypes.string,
                restaurantName: PropTypes.string
            }),
            number: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired
        })),
    restaurantId: PropTypes.string,
    restaurantName: PropTypes.string
    }),
    updateFunction: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default CartModal;