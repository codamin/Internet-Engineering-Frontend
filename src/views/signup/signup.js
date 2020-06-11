import React from 'react';
import API from 'apis/api';
import styles from './signup.module.css'
import {eng2fa} from 'utils/utils'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {NotificationManager} from 'react-notifications';
import validateToken from '../../services/validate-token';


class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            r_password: ''
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleRepeatChange = this.handleRepeatChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        if(validateToken()) {
            window.location.href = "http://ie.etuts.ir:31085/home"
        }
    }

    handleFirstNameChange(event) {
        this.setState({
            first_name: event.target.value
        });
    }
    handleLastNameChange(event) {
        this.setState({
            last_name: event.target.value
        });
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
    handleRepeatChange(event) {
        this.setState({
            r_password: event.target.value
        });
    }

    handleSubmit(event) {
        console.log(this.state)
        event.preventDefault();
        if(!this.state.email || !this.state.password
            || !this.state.r_password){
            NotificationManager.error('تمام فیلد ها باید پر باشند!!!')
        }
        if(!isNaN(this.state.first_name) || !isNaN(this.state.last_name)){
            NotificationManager.error('نام و نام خانوادگی نامعتبر')
            return
        }
        if(this.state.password != this.state.r_password) {
            NotificationManager.error('رمز عبور و تکرار آن باید یکسان باشند')
            return
        }

        API.post('user', {
            first_name: `${this.state.first_name}`,
            last_name: `${this.state.last_name}`,
            email: `${this.state.email}`,
            password: `${this.state.password}`
        }).then((resp) => {
            if(resp.status == 200) {
                NotificationManager.success('ثبت نام با موفقیت انجام شد.')
                window.location.href = "http://ie.etuts.ir:31085/login"
            }
            else{
                NotificationManager.error('خطا در ثبت نام')
            }
        }).catch(error => {
            NotificationManager.error('کاربری با این ایمیل قبلا ثبت‌نام کرده‌است.')
        })
    }

    render() {
        return(
            <div className={"container card align-items-center " + styles.maincard}>
                <div className={"row align-items-strech " + styles.cardOptions}>
                    <div className={"col-6 text-center " + styles.cardLeftOption}>
                        <Link to={'/login'} className={styles.blackText}> ورود</Link>
                    </div>
                    <div className={"col-6 text-center " + styles.cardRightOption}>
                        <Link to={'/signup'} className={styles.whiteText}> ثبت نام </Link>
                    </div>
                </div>

                <form className="text-center" onSubmit={this.handleSubmit}>

                    <div className="form-row">
                        <div className="col">
                            <label className={styles.label} for="materialRegisterFormFirstName">نام</label>
                            <input className={"form-control " + styles.input} onChange={this.handleFirstNameChange} type="text" id="materialRegisterFormFirstName"/>
                        </div>
                        <div className="col">
                            <label className={styles.label} for="materialRegisterFormLastName">نام خانوادگی</label>
                            <input className={"form-control " + styles.input} onChange={this.handleLastNameChange} type="text" id="materialRegisterFormLastName"/>
                        </div>
                    </div>

                    <div className="md-form mt-3">
                        <label className={styles.label} for="materialRegisterFormEmail">ایمیل</label>
                        <input className={"form-control " + styles.input} onChange={this.handleEmailChange} type="email" id="materialRegisterFormEmail"/>
                    </div>

                    <div className="md-form mt-3">
                        <label className={styles.label} for="materialRegisterFormPassword">رمز عبور</label>
                        <input className={"form-control " + styles.input} onChange={this.handlePasswordChange} type="password" id="materialRegisterFormPassword"/>
                    </div>

                    <div className="md-form mt-3">
                        <label className={styles.label} for="materialRegisterFormPassword">تکرار رمز عبور</label>
                        <input className={"form-control " + styles.input} onChange={this.handleRepeatChange} type="password" id="materialRegisterFormPassword"/>
                    </div>
                    <button type="submit" className={"btn my-5 " + styles.creditBtn}>ثبت نام</button>
                </form>
            </div>
        );
    }
}

export default Signup