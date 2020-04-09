import React from 'react';
import API from 'apis/api';
import OrderItem from './orderItem/orderItem'
import styles from './profileOrders.module.css'
import {Link} from 'react-router-dom'

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
                        <Link to={'/profile/credit'} className={styles.blackText}> افزایش اعتبار </Link>
                    </div>
                    <div className={"col-6 text-center " + styles.cardRightOption}>
                        <Link to={'/profile/orders'} className={styles.whiteText}> سفارش ها</Link>
                    </div>
                </div>
                {this.state.orders.map((orderData, key) => <OrderItem orderData={orderData} id={key} />)}
            </div>
        );
  }
}

export default ProfileOrders;