import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {eng2fa} from 'utils/utils.js'
import './orderItemModal.css'

function TableRow(props) {
    return(
        <tr>
            <td>{eng2fa(props.data.food.price)}</td>
            <td>{eng2fa(props.data.number)}</td>
            <td>{props.data.food.name}</td>
            <td>{eng2fa(props.row + 1)}</td>
        </tr>
    );
}

export default function OrderItemModal(props) {
    return(
        <div className="modal fade" id={"order_modal_" + props.id} tabIndex="-1" role="dialog" aria-labelledby="mymodalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content factor-modal px-4">
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row justify-content-center modal-title-row">
                                <div className="col-auto justify-content-center profile-modal-title-col mb-5 pb-3">{props.orderData.restaurantName}</div>
                            </div>
                            <table className="table table-bordered text-center">
                                <thead>
                                    <tr className="profile-modal-table-header">
                                        <th scope="col">قیمت</th>
                                        <th scope="col">تعداد</th>
                                        <th scope="col">نام غذا</th>
                                        <th scope="col">ردیف</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.orderData.orderItems.map((orderItemData, key) =>
                                        <TableRow data={orderItemData} key={key} row={key}/>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="col-auto profile-total-cost-row">
                           {["جمع کل: ", eng2fa(props.orderData.finalPrice), " تومان"]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

OrderItemModal.propTypes  = {
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
            location: PropTypes.objectOf(PropTypes.number). isRequired,
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