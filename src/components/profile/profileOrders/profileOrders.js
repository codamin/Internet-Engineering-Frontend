import React from 'react';
import API from 'apis/api';
import OrderItem from './orderItem/orderItem'
import styles from './profileOrders.module.css'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios'


class ProfileOrders extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: undefined
        }
        this.getOrdersInfo = this.getOrdersInfo.bind(this)
    }

    componentDidMount() {
        this.getOrdersInfo();
        this.timerID = setInterval(
            () => this.getOrdersInfo(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    getOrdersInfo() {
        // API.get('user').then(
        //     jsonData => {
        //         console.log("jsonData.data.orderRepository.orders", jsonData.data.orderRepository.orders)
        //         this.setState({orders: jsonData.data.orderRepository.orders});
        // })
        const token = localStorage.getItem("token");
        console.log("token "+token);    
        API.get('user', { headers: {Authorization: token} }).then((response) => {
          this.setState({orders: response.data.orderRepository.orders});
        }).catch(function (error) {
        });
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
                {
                    this.state.orders == undefined ?
                    <div className="text-center">
                        <div className="spinner-grow" role="status"></div>
                    </div>:
                    this.state.orders.map((orderData, key) => <OrderItem orderData={orderData} key={key} id={key} />)
                }
            </div>
        );
  }
}

export default ProfileOrders;