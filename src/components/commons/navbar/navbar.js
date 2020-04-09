import React from 'react'

import CartModal from 'components/home/navbar/cartModal'
import Spinner from 'components/commons/spinner/spinner'
import {eng2fa} from 'utils/utils'
import API from 'apis/api'
import './navbar.css'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
        }
    }

    componentDidMount() {
        console.log()
        API.get(`cart`).then(
            jsonData => {
                this.setState({cart: jsonData.data});
            })
    }

    render() {
        if(this.props.cart == undefined || this.props.updateFunction == undefined) {
            return "fuck"
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-light no-gutters">
                <div className="navbar-nav">
                    <span><a className="exitLink persian" href="#"></a></span>
                    <span>
                        <button type="button" className="flaticon-smart-cart" data-toggle="modal" data-target="#cartModal"></button>
                        <span className="badge badge-pill badge-light d-flex justify-content-center">{this.props.cart.empty == undefined ? 
                        <div class="spinner-border navbar-spinner" role="status">
                             <span class="sr-only">Loading...</span>
                        </div> : this.props.cart.empty == 'true' ? 0 : eng2fa(this.props.cart.orderItems.length)}</span>
                    </span>
                </div>
                {console.log(this.props.cart)}
                <CartModal cart={this.props.cart} updateFunction={this.props.updateFunction} />
            </nav>
        );
    }
}

export default Navbar