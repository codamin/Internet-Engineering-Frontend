import React from 'react'
import Navbar from 'components/commons/navbar/navbar'
import RestaurantHeader from 'components/restaurantHeader/restaurantHeader'
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
            <div class="row mt-3">
                <div class="container">
                    <div class="col-12 flex-container login-page-word">
                        صفحه ورود
                    </div>
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col-4"></div>
                <div class="col-4 container m-3 main-box">
                    <form>
                        <div class="row container no-gutters">
                            <div class="container">
                                <div class="row m-4">
                                    <div class="col-4 flex-container justify-content-end">
                                        <label for="exampleInputEmail1">ایمیل</label>
                                    </div>
                                    <div class="col-8 flex-container justify-content-start">
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div class="row m-4">
                                    <div class="col-4 flex-container justify-content-end">
                                        <label for="exampleInputPassword1">رمز عبور</label>
                                    </div>
                                    <div class="col-8 flex-container justify-content-start">
                                        <input type="password" class="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                                <div class="row m-5">
                                    <div class="col-4"></div>
                                    <div class="col-4 flex-container">
                                        <button type="submit" class="btn btn-primary submit-btn">ورود</button>
                                    </div>
                                    <div class="col-4"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            <div class="col-4"></div>
            </div>
            </div>

        </div>
        )
    }
}

export default Login;