import React from 'react'

import CartModal from 'components/home/navbar/cartModal'
import Spinner from 'components/commons/spinner/spinner'
import {eng2fa} from 'utils/utils'
import API from 'apis/api'
import {Link} from 'react-router-dom'
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
                console.log('cart')
                console.log(jsonData.data)
                this.setState({cart: jsonData.data});
            }
        )
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light no-gutters d-flex flex-nowrap">
                <div className="navbar-nav d-flex flex-nowrap flex-row align-items-center">
                    <span>
                        <a className="exitLink persian" href="#">خروج</a>
                    </span>
                    <span>
                        <Link to={'/profile'} className="ml-4 mr-0 profile-btn"> حساب کاربری</Link>
                    </span>
                        {
                        this.state.cart.empty == undefined ?

                         <div class="text-center ml-3">
                            <div class="spinner-border" role="status"></div>
                        </div>: 

                        this.state.cart.empty == 'true' ? 0 :

                        <span>
                            <button className="btn flaticon-smart-cart" data-toggle="modal" data-target="#cartModal"></button>
                            <span className="badge badge-pill badge-light text-center mx-0 d-flex justify-content-center">{eng2fa(this.state.cart.orderItems.length)}</span>
                        </span>
                        
                        }
                </div>
                <CartModal />
            </nav>
        );
    }
}

export default Navbar