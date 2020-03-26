import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top no-gutters">
            <div className="navbar-nav">
                <span><a className="exitLink persian" href="#">خروج</a></span>
                <span>
                <a href="#">
                <i className="flaticon-smart-cart"></i>
                <span className="badge badge-pill badge-light">۳</span>
                </a>
                </span>
            </div>
            <a className="navbar-brand ml-auto" href=" # ">
                <img className="logo" src="./logo.png" alt="Loghme"/>
            </a>
        </nav>
    );
}

export default Navbar