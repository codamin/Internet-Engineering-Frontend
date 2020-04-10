import React from 'react'
import CartModal from 'components/commons/navbar/cartModal'
import {eng2fa} from 'utils/utils'
import API from 'apis/api'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './navbar.css'
import mainLogo from 'Assets/LOGO.png'
import { Nav } from 'react-bootstrap'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: undefined,
            show:false,
        }
    }

    componentDidMount() {
        API.get(`cart`).then(
            jsonData => {
                console.log('cart', jsonData.data)
                this.setState({cart: jsonData.data});
            }
        )
    }

    render() {
        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});
        if(this.state.cart == undefined) {
            return(
                <div className="container-fulid sticky-top main-navbar">
                    <div className="row px-5 no-gutters d-flex align-items-center"/>
                </div>
            )
        }

        return (
            <div className="container-fulid sticky-top main-navbar">
                <div className="row px-5 no-gutters d-flex align-items-center">
                    <div className="col-auto">
                        <a className="exitLink persian" href="#">خروج</a>
                    </div>

                    {
                        this.props.isProfile == false &&
                        <div className="col-auto">
                            <Link to={'/profile'} className="ml-4 mr-0 profile-btn"> حساب کاربری</Link>
                        </div>
                    }

                    {
                        this.state.cart == undefined?
                        <div className="text-center ml-3 mb-0">
                            <div className="spinner-border" role="status"></div>
                        </div>: 
                        this.state.cart.empty == 'true' ? 0 :
                        <div className="col-auto">
                            <button className="btn flaticon-smart-cart" data-toggle="modal" data-target="#cartModal" onClick={handleShow}></button>
                            <span className="badge badge-pill badge-light text-center mx-0 d-flex justify-content-center">
                                {this.state.cart.empty == 'true' ? 0 : eng2fa(this.state.cart.orderItems.length)}
                            </span>
                        </div>
                     }
                    
                    {
                        this.props.isHome == false &&
                        <Link to={'/'} className="col-auto ml-auto">
                            <img className="nav-mainLogo ml-auto" src={mainLogo}/>
                        </Link>
                    }
                    <CartModal cart={this.state.cart} updateFunction={this.props.updateFunction} show={this.state.show} handleClose={handleClose}/>
                </div>
            </div>
        );
    }
}

Navbar.propTypes = {
    isHome: PropTypes.bool.isRequired,
    isProfile: PropTypes.bool.isRequired,
    restaurantId: PropTypes.string.isRequired,
    restaurantName: PropTypes.string.isRequired
    })
}

export default Navbar