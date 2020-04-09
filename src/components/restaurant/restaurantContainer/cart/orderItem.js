import React from 'react'
<<<<<<< HEAD
import './orderItem.css'
import API from 'apis/api'
import {eng2fa} from 'utils/utils'
=======

import API from 'apis/api'
import './orderItem.css'


const digitMap = {0:'۰', 1:'۱', 2:'۲', 3:'۳', 4:'۴', 5:'۵', 6:'۶', 7:'۷', 8:'۸', 9:'۹'}
const eng2fa = (engNum) => {return((''+engNum).split('').map(digit=>digitMap[digit]).join(''))} 
>>>>>>> 70fb86f3aa933456fd913af84ad5421b19e2de60

function OrderItem(props) {

    function handleClickPlus(e) {
        API.post('cart', {
            restaurantId: `${props.item.food.restaurantId}`,
            foodName: `${props.item.food.name}`            
        }).then(function (response) {
            props.updateFunction();
          })

    }

    function handleClickMinus(e) {
        API.delete('cart', {data: {
            restaurantId: `${props.item.food.restaurantId}`,
            foodName: `${props.item.food.name}`            
        }}).then(function (response) {
            props.updateFunction();
          })
    }

    if(!props || props.item == undefined){
        return null; //You can change here to put a customized loading spinner 
    }
    return(
        <div className="order-item-card">
            <div className="row mt-2 no-gutters">
                <span className="col-auto mr-3 flaticon-minus minus-btn clickable no-gutters justify-content-start" onClick={handleClickMinus}></span>
                <div className="col-auto flex-container no-gutters justify-content-center food-num-cart">
                    {eng2fa(props.item.number)}
                </div>
                <span className="col-auto ml-2 mr-3 flaticon-plus plus-btn clickable no-gutters justify-content-end" onClick={handleClickPlus}></span>
                <div className="col-8 flex-container justify-content-end food-name-cart text-right">
                    {props.item.food.name}
                </div>
            </div>
            <div className="row pt-0 pr-0 pb-2 pl-0 food-field-bottom container no-gutters">
                <div className="col-auto ml-1 mr-1 pr-1 flex-container justify-content-end">تومان</div>
                <div className="col-auto flex-container justify-content-start">
                {eng2fa(props.item.price)}
                </div>
                {/* <div className="col-6"></div> */}
            </div>
        </div>
    )
}

export default OrderItem