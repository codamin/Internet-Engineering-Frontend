import React from 'react'
import Navbar from 'components/commons/navbar/navbar'
import RestaurantHeader from 'components/restaurant/restaurantHeader/restaurantHeader'
import './login.css'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
        <div className="row login-container">
            <div className="col-12 container">
            <Navbar cart={undefined} updateFunction={undefined} />
            <RestaurantHeader logo={undefined} />
            <div className="row mt-3">
                <div className="container">
                    <div className="col-12 flex-container login-page-word">
                        صفحه ورود
                    </div>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-4"></div>
                <div className="col-4 container m-3 main-box">
                    <form>
                        <div className="row container no-gutters">
                            <div className="container">
                                <div className="row m-4">
                                    <div className="col-4 flex-container justify-content-end">
                                        <label for="exampleInputEmail1">ایمیل</label>
                                    </div>
                                    <div className="col-8 flex-container justify-content-start">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="row m-4">
                                    <div className="col-4 flex-container justify-content-end">
                                        <label for="exampleInputPassword1">رمز عبور</label>
                                    </div>
                                    <div className="col-8 flex-container justify-content-start">
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                                <div className="row m-5">
                                    <div className="col-4"></div>
                                    <div className="col-4 flex-container">
                                        <button type="submit" className="btn btn-primary submit-btn">ورود</button>
                                    </div>
                                    <div className="col-4"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            <div className="col-4"></div>
            </div>
            </div>
        </div>
        )
    }
}

export default Login;