import React from 'react';
import API from 'apis/api';
import styles from './profileCredit.module.css'

class ProfileCredit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {credit: 0}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({credit: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        // API.p
    }

    render() {
        return(
            <div className={"container card align-items-center " + styles.maincard}>
                <div className={"row align-items-strech " + styles.cardOptions}>
                    <div className={"col-6 text-center " + styles.cardLeftOption}>
                        <a className={styles.whiteText} href="#"> افزایش اعتبار </a>
                    </div>
                    <div className={"col-6 text-center " + styles.cardRightOption}>
                        <a className={styles.blackText} href="./profile-orders.html"> سفارش ها</a>
                    </div>
                </div>
            
                <form className="form-inline onSubmit={handleSubmit}">
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