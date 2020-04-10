import React, { Component } from 'react';
import PropTypes from 'prop-types'
import OrderItemModal from './orderItemModal/orderItemModal'
import './orderItem.css'
import {eng2fa} from 'utils/utils'


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
                <div className="col-2 profile-order-col text-center profile-order-right-col">{eng2fa(props.id + 1)}</div>
            </div>
            <OrderItemModal orderData={props.orderData} id={props.id}/>
        </div>
    );
}

OrderItem.propTypes = {
    id: PropTypes.number.isRequired,
    orderData: PropTypes.shape({
        finalPrice: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        orderItems: PropTypes.arrayOf(PropTypes.shape({
            number: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            food: PropTypes.shape({
                name: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                popularity: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                image: PropTypes.string.isRequired,
                restaurantName: PropTypes.string.isRequired,
                restaurantId: PropTypes.string.isRequired,
                count: PropTypes.number,
                oldPrice: PropTypes.number,
            })
        })),
        restaurant: PropTypes.shape({
            description: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            location: PropTypes.objectOf(PropTypes.number).isRequired,
            logo: PropTypes.string.isRequired,
            menu: PropTypes.arrayOf(PropTypes.shape({
                available: PropTypes.bool.isRequired,
                count: PropTypes.number,
                description: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                oldPrice: PropTypes.number,
                popularity: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                restaurantId: PropTypes.string.isRequired,
                restaurantName: PropTypes.string.isRequired
            }))
        }),
        restaurantName: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired
    })
}

export default OrderItem;