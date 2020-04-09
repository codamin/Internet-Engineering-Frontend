import React from 'react'

import CartModal from 'components/home/navbar/cartModal'
import Spinner from 'components/commons/spinner'
import {eng2fa} from 'utils/utils'
import API from 'apis/api'
import './navbar.css'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
        }
        // this.updateCart = this.updateCart.bind(this);
    }

    componentDidMount() {
        API.get(`cart`).then(
            jsonData => {
                this.setState({cart: jsonData.data});
            })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light no-gutters">
                <div className="navbar-nav">
                    <span><a className="exitLink persian" href="#">خروج</a></span>
                    <span>
                        <button type="button" className="flaticon-smart-cart" data-toggle="modal" data-target="#cartModal"></button>
                        <span className="badge badge-pill badge-light">{this.state.cart.empty == undefined ? <Spinner /> : this.state.cart.empty == 'true' ? 0 : eng2fa(this.state.cart.orderItems.length)}</span>
                    </span>
                </div>
                <CartModal />
            </nav>
        );
    }
}

export default Navbar