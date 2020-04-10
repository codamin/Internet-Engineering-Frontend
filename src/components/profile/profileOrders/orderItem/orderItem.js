import React, { Component } from 'react';
import PropTypes from 'prop-types'
import OrderItemModal from './orderItemModal/orderItemModal'
import './orderItem.css'

function RenderDone(props) {
    return(
    <button className="btn profile-stat-button profile-stat-active text-center enabled" data-toggle="modal" data-target={"#order_modal_" + props.id}>
        مشاهده فاکتور
    </button>);
}

function RenderInWay() {
    return(
        <button className="btn profile-stat-button profile-stat-in-way text-center disabled">
            پیک در مسیر
        </button>);
}

function RenderFinding() {
    return(
        <button className="btn profile-stat-button profile-stat-finding text-center disabled">
            در جستجوی پیک
        </button>);
}

function renderButton(state, id) {
    if(state == 'done') return <RenderDone id={id}/>
    else if(state == 'delivering') return <RenderInWay/>
    else if(state == 'finding delivery') return <RenderFinding/>
}

function OrderItem(props) {
    return (
        <div>
            <div className="row profile-order-row">
                <div className="col-5 profile-order-col profile-order-left-col text-center">
                    {renderButton(props.orderData.state, props.id)}
                </div>
                <div className="col-5 profile-order-col profile-order-rest-name-col text-center">{props.orderData.restaurantName}</div>
                <div className="col-2 profile-order-col text-center profile-order-right-col">{props.id + 1}</div>
            </div>
            <OrderItemModal orderData={props.orderData} id={props.id}/>
        </div>
    );
}

OrderItem.propTypes = {
    orderData: PropTypes.shape({
        id: PropTypes.number,
        orderItems: PropTypes.object,
        remMin: PropTypes.number,
        remSec: PropTypes.number,
        restaurant: PropTypes.object,
        restaurantName: PropTypes.string,
        state: PropTypes.string
    })
}

export default OrderItem;