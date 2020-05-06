import React from 'react';
import API from 'apis/api';
import styles from './login.module.css'
import {eng2fa} from 'utils/utils'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {NotificationManager} from 'react-notifications';

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleSubmit(event) {
        console.log(this.state)
        event.preventDefault();

        API.post('user', {
            email: `${this.state.email}`,
            password: `${this.state.password}`
        }).then((resp) => {
            if(resp.status == 200) {
            }
            else{
            }
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
                    <div class="g-signin2 mt-5" data-width="550" data-height="80" data-longtitle="true" data-onsuccess="onSignIn"></div>
                </form>
            </div>
        );
    }
}

export default Signup