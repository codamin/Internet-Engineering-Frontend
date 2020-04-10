import React from 'react'
import CartModal from 'components/commons/navbar/cartModal'
import {eng2fa} from 'utils/utils'
import API from 'apis/api'
import {Link} from 'react-router-dom'
import './navbar.css'
import mainLogo from 'Assets/LOGO.png'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            show:false,
        }
    }

    componentDidMount() {
        API.get(`cart`).then(
            jsonData => {
                this.setState({cart: jsonData.data});
            }
        )
    }

    
    render() {
        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});
        if(this.props.updateFunction == undefined) {
            return(
                <div className="container-fulid sticky-top main-navbar">
                <div className="row px-5 no-gutters d-flex align-items-center">
                </div>
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
                        this.props.cart.empty == undefined ?
                        <div class="text-center ml-3">
                            <div class="spinner-border" role="status"></div>
                        </div>: 
                        this.props.cart.empty == 'true' ? 0 :
                        <div className="col-auto">
                            <button className="btn flaticon-smart-cart" data-toggle="modal" data-target="#cartModal" onClick={handleShow}></button>
                            <span className="badge badge-pill badge-light text-center mx-0 d-flex justify-content-center">
                                {this.props.cart.empty == 'true' ? 0 : eng2fa(this.props.cart.orderItems.length)}
                            </span>
                        </div>
                     }
                    
                    {
                        this.props.isHome == false &&
                        <Link to={'/'} className="col-auto ml-auto">
                            <img className="nav-mainLogo ml-auto" src={mainLogo}/>
                        </Link>
                    }
                    <CartModal cart={this.props.cart} updateFunction={this.props.updateFunction} show={this.state.show} handleClose={handleClose}/>
                </div>
            </div>
        );
    }
}

export default Navbar