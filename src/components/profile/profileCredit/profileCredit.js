import React from 'react';
import API from 'apis/api';
import styles from './profileCredit.module.css'
import {eng2fa} from 'utils/utils'
import {Link} from 'react-router-dom'

class ProfileCredit extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props)
        this.state = {credit: 0}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({credit: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        API.post('user', {
            credit: this.state.credit,
        }).then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
        });
        console.log('call back called in credit.js')
        this.props.updateUserFunction()
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
                        <input className={"form-control input_credit " + styles.creditForm} onChange={this.handleChange} placeholder="میزان افزایش اعتبار"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default ProfileCredit