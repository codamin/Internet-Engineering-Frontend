import React, { Component } from 'react';
import './orderItem.css'

function RenderDone(props) {
    return(
    <button className="btn stat-button stat-active text-center enabled" data-toggle="modal" data-target={"#order_modal_" + props.id}>
        مشاهده فاکتور
    </button>);
}

function RenderInWay() {
    return(
        <button className="btn stat-button stat-in-way text-center disabled">
            پیک در مسیر
        </button>);
}

function RenderFinding() {
    return(
        <button className="btn stat-button stat-finding text-center disabled">
            در جستجوی پیک
        </button>);
}

function renderButton(state, id) {
    if(state == 'done') return <RenderDone id={id}/>
    else if(state == 'delivering') return <RenderInWay/>
    else if(state == 'finding delivery') return <RenderFinding/>
}

function TableRow(props) {
    return(<tr>
            <td>{props.data.food.price}</td>
            <td>{props.data.number}</td>
            <td>{props.data.food.name}</td>
            <td>{props.row + 1}</td>
        </tr>);
}


function OrderItem(props) {
    return (
        <div>
            <div className="row order-row">
                <div className="col-5 order-col order-left-col text-center">
                    {renderButton(props.orderData.state, props.id)}
                </div>
                <div className="col-5 order-col text-center">رستوران خامس</div>
                <div className="col-2 order-col text-center order-right-col">{props.id + 1}</div>
            </div>
            
            <div className="modal fade" id={"order_modal_" + props.id} tabindex="-1" role="dialog" aria-labelledby="mymodalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row justify-content-center modal-title-row">
                                    <div className="col-md-6 justify-content-center modal-title-col">رستوران خامس</div>
                                </div>
                                <table className="table table-bordered text-center">
                                    <thead>
                                        <tr className="modal-table-header">
                                            <th scope="col">قیمت</th>
                                            <th scope="col">تعداد</th>
                                            <th scope="col">نام غذا</th>
                                            <th scope="col">ردیف</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.orderData.orderItems.map((orderItemData, key) =>
                                            <TableRow data={orderItemData} row={key}/>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-auto total-cost-row">
                                جمع کل: ۱۸۰۰۰ تومان
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OrderItem;