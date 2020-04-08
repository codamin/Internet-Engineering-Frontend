import React from 'react';
import API from 'apis/api';
import OrderItem from './orderItem/orderItem'

import styles from './profileOrders.module.css'

class ProfileOrders extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        API.get('user').then(
            jsonData => {
                console.log(jsonData.data)
                this.setState({orders: jsonData.data.orderRepository.orders});
        })
    }

    render() {
        return (
            <div className={"container card " + styles.maincard}>
                <div className={"row align-items-strech " + styles.cardOptions}>
                    <div className={"col-6 text-center " + styles.cardLeftOption}>
                        <a className={styles.blackText} href="./profile_credit.html"> افزایش اعتبار </a>
                    </div>
                    <div className={"col-6 text-center " + styles.cardRightOption}>
                        <a className={styles.whiteText} href="#"> سفارش ها</a>
                    </div>
                </div>
                {this.state.orders.map((orderData, key) => <OrderItem orderData={orderData} id={key} />)}
            </div>
        );
  }
}

export default ProfileOrders;