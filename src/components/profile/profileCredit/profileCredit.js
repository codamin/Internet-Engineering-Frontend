import React from 'react';
import API from 'apis/api';
import styles from './profileCredit.module.css'
import {eng2fa} from 'utils/utils'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {NotificationManager} from 'react-notifications';
import authHeader from '../../../services/auth-header';

class ProfileCredit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            credit: '',
            hasError: false,
            error: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            credit: event.target.value
        },()=>{
            // console.log('credit= ', this.state.credit)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        if(isNaN(this.state.credit)) {
            NotificationManager.error('credit must be a number')
        }
        else if(Number(this.state.credit) < 0) {
            NotificationManager.error('credit must be a positive number')
        }
        else {
            API.post('user/credit',
            {
                credit: this.state.credit,
            },
            {
                headers: authHeader()
            }).then((resp) => {
                this.props.updateUserFunction()
                if(resp.status == 200) {
                    NotificationManager.success('اعتبار شما با موقفیت افزایش یافت.')
                }
                else{
                    NotificationManager.error('خطا در انجام عملیات')
                }
            })
        }
    }

    render() {
        return(
            <div className={"container card align-items-center " + styles.maincard}>
                <div className={"row align-items-strech " + styles.cardOptions}>
                    <div className={"col-6 text-center " + styles.cardLeftOption}>
                        <Link to={'/profile/credit'} className={styles.whiteText}> افزایش اعتبار </Link>
                    </div>
                    <div className={"col-6 text-center " + styles.cardRightOption}>
                        <Link to={'/profile/orders'} className={styles.blackText}> سفارش ها</Link>
                    </div>
                </div>
            
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <button type="submit" className={"btn mb-2 " + styles.creditBtn}>افزایش</button>
                    <div className="form-group mx-3 mb-2">
                        <input type="text"  className={"form-control input_credit " + styles.creditForm} value={this.state.credit} onChange={this.handleChange} placeholder="میزان افزایش اعتبار"/>
                    </div>
                </form>
            </div>
        );
    }
}

ProfileCredit.propTypes = {
    updateFunction: PropTypes.func.isRequired
}

export default ProfileCredit