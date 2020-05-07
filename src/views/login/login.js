import React from 'react'
import Navbar from 'components/commons/navbar/navbar'
import RestaurantHeader from 'components/restaurant/restaurantHeader/restaurantHeader'
import './login.css'
import API from 'apis/api';
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
        var tocken_id = googleUser.getAuthResponse().id_token;
        API.post('auth/tokenIDLogin', {
            tockenId: tocken_id
        }).then((resp) => {
            console.log('hi guyyyyyy' + resp)
        // var profile = googleUser.getBasicProfile();
        // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        // console.log('Name: ' + profile.getName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        });
    }

    handleSubmit(e) {
        if(!isNaN(this.state.email) || !isNaN(this.state.password)){
            NotificationManager.error('تمام فیلد ها باید پر باشند!!!')
        }
        API.post('auth/login', {
            email: this.state.email,
            password: this.state.password
        }).then((resp) => {
            if(resp.status == 200) {
                NotificationManager.success('ورود با موفقیت انجام شد.')
                localStorage.setItem("token", resp.data.jwt)
                return <Route path="/" Component={Home} />
            }
            else{
                NotificationManager.error('اطلاعات وروردی، نادرست است.')
            }
        })
        e.preventDefault();
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
                        clientId="805487349717-mup8qor9qlha42ooq5v45g0nols9g1s4.apps.googleusercontent.com"
                        onSuccess={this.onSignIn}
                        // onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </form>
            </div>
        );
    }
}

export default Login