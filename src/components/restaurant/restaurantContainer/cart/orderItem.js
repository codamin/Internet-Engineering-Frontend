import React from 'react'
import './orderItem.css'
import API from 'apis/api'
import {eng2fa} from 'utils/utils'

function OrderItem(props) {

    function handleClickPlus(e) {
        API.post('cart', {
            restaurantId: `${props.item.restaurantId}`,
            foodName: `${props.item.name}`            
        }).then(function (response) {
            console.log(response);
            props.updateFunction();
          })

    }

    function handleClickMinus(e) {
        API.delete('cart', {data: {
            restaurantId: `${props.food.restaurantId}`,
            foodName: `${props.food.name}`            
        }}).then(function (response) {
            console.log(response);
            props.updateFunction();
          })
    }

    if(!props || props.item == undefined){
        return null; //You can change here to put a customized loading spinner 
    }
    return(
        <div className="order-item-card">
            <div className="row mt-2 no-gutters">
                <span className="col-1 flaticon-minus minus-btn clickable no-gutters justify-content-start" onClick={handleClickMinus}></span>
                <div className="col-2 flex-container no-gutters justify-content-center food-num-cart">
                    {eng2fa(props.item.number)}
                </div>
                <span className="col-1 flaticon-plus plus-btn clickable no-gutters justify-content-end" onClick={handleClickPlus}></span>
                <div className="col-8 flex-container justify-content-end food-name-cart persian text-right">
                    {props.item.food.name}
                </div>
            </div>
            <div className="row pt-0 pr-0 pb-2 pl-0 food-field-bottom container no-gutters">
                <div className="col-3 pr-1 flex-container justify-content-end">تومان</div>
                <div className="col-3 flex-container justify-content-start">
                {eng2fa(props.item.price)}
                </div>
                <div className="col-6"></div>
            </div>
        </div>
    )
}

export default OrderItem