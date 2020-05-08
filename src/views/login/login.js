import React from 'react'
import Navbar from 'components/commons/navbar/navbar'
import RestaurantHeader from 'components/restaurant/restaurantHeader/restaurantHeader'
import './login.css'
import API from 'apis/api';
import API_SEC from 'apis/api-sec'
import {NotificationManager} from 'react-notifications';
import Home from 'views/home/home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import styles from './login.module.css'
import {eng2fa} from 'utils/utils'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import GoogleLogin from 'react-google-login';
import validateToken from '../../services/validate-token';



class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onSignIn = this.onSignIn.bind(this)
        console.log(validateToken())
        if(validateToken()) {
          window.location.href = "http://localhost:3000/home"
        }
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    fail() {
        console.log('ridiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
    }

    onSignIn(googleUser) {
        var token_id = googleUser.getAuthResponse().id_token;
        API.post('auth/tokenIDLogin', {
            tokenId: token_id
        }).then((resp) => {
            if(resp.status == 200) {
                NotificationManager.success('ورود با موفقیت انجام شد.')
                localStorage.setItem("token", resp.data.jwt)
                window.location.href = "http://localhost:3000/home"
            }
        }).catch(error => {
            NotificationManager.error('ایمیل در سیستم یافت نشد.')
            window.location.href = "http://localhost:3000/signup"
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if(!this.state.email || !this.state.password){
            NotificationManager.error('تمام فیلد ها باید پر باشند!!!')
        }
        API.post('auth/login', {
            email: this.state.email,
            password: this.state.password
        }).then((resp) => {
            if(resp.status == 200) {
                NotificationManager.success('ورود با موفقیت انجام شد.')
                localStorage.setItem("token", resp.data.jwt)
                window.location.href = "http://localhost:3000/home"
            }
        }).catch(error => {
            NotificationManager.error('نام کاربری یا رمز عبور نادرست است.')
        })
    }

    render() {
        return(
            <div className={"container card align-items-center " + styles.maincard}>
                <div className={"row align-items-strech " + styles.cardOptions}>
                    <div className={"col-6 text-center " + styles.cardLeftOption}>
                        <Link to={'/login'} className={styles.whiteText}> ورود</Link>
                    </div>
                    <div className={"col-6 text-center " + styles.cardRightOption}>
                        <Link to={'/signup'} className={styles.blackText}> ثبت نام </Link>
                    </div>
                </div>

                <form className="text-center" onSubmit={this.handleSubmit}>

                    <div className={"md-form mt-3 " + styles.md_form}>
                        <label className={styles.label} for="materialRegisterFormEmail">ایمیل</label>
                        <input className={"form-control " + styles.input} onChange={this.handleEmailChange} type="email" id="materialRegisterFormEmail"/>
                    </div>

                    <div className={"md-form mt-3 " + styles.md_form}>
                        <label className={styles.label} for="materialRegisterFormPassword">رمز عبور</label>
                        <input className={"form-control " + styles.input} onChange={this.handlePasswordChange} type="password" id="materialRegisterFormPassword"/>
                    </div>

                    <button type="submit" className={"btn my-5 " + styles.creditBtn}>ورود</button>
                    <p> or sign in with:  </p>
                    <GoogleLogin
                        clientId="805487349717-belcub0d2g4mrq6mq9dn8sjddf0fhqh6.apps.googleusercontent.com"
                        onSuccess={this.onSignIn}
                        onFailure={err => console.log('fail', err)}
                        // onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </form>
            </div>
        );
    }
}

export default Login