import React from 'react'
import './mainLogo.css'
import logo from './logo.png'


function MainLogo() {
    return(
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="main-logo">
                    <div className="row">
                        <div className="col">
                            <img className="logo" src={logo} alt="Loghme"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            اولین و بزرگترین وب سایت سفارش آنلاین غذا در دانشگاه تهران
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <form class="form-inline searchBar mx-auto py-2">
            <div class="form-group mx-1 mb-1">
                <button type="submit" class="search-btn
                 btn btn-primary">جست و جو</button>
            </div>
            <div class="form-group mx-1 mb-1">
                <input type="text" class="search-input form-control" placeholder="نام رستوران"/>
            </div>
            <div class="form-group mx-1 mb-1">
                <input type="text" class="search-input form-control" placeholder="نام غذا"/>
            </div>
            </form>
        </div>
        </div>
    );
}

export default MainLogo