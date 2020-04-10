import React from 'react'
import API from 'apis/api'
import NumFood from 'components/restaurant/restaurantContainer/modal/numFood'
import {NotificationManager} from 'react-notifications';

import './foodModal.css'

function FoodModal(props) {
    function handleClickPlus(e) {
        API.post('cart', {
            restaurantId: `${props.food.restaurantId}`,
            foodName: `${props.food.name}`            
        }).then(function (response) {
            console.log(response);
          }).catch(error => {
        if (error.response) {
            NotificationManager.error(error.response.data);
            }})
    }

    function handleClickMinus(e) {
        API.delete('cart', {data: {
            restaurantId: `${props.food.restaurantId}`,
            foodName: `${props.food.name}`            
        }}).then(function (response) {
            console.log(response);
          }).catch(error => {
        if (error.response) {
            NotificationManager.error(error.response.data);
            }})
    }

    function handleNumOfFood() {
        API.get(`cart/${props.food.restaurantId}/${props.food.name}`).then(
            jsonData => {
                return jsonData.data.num;
            }).catch(error => {
            if (error.response) {
                NotificationManager.error(error.response.data);
                }})
    }
    let num = handleNumOfFood();
    if(!props || props.food == undefined || props.id == undefined){
        return null; //You can change here to put a customized loading spinner n
    }
    return (
        <div className="modal fade" id={"foodModal_" + props.id} tabIndex="-1" role="dialog" aria-labelledby="mymodalLabel" aria-hidden="true">
            <div className="modal-dialog modal-l" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row justify-content-center modal-title-row">
                                <div className="col-auto justify-content-center modal-title-col">{props.food.restaurantName}</div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="row no-gutters">
                                        <div className="col-1">{props.food.popularity}</div>
                                        <img className="col-2" src="./star.png" />
                                        <div className="col-9">{props.food.name}</div>
                                    </div>
                                    <div className="row no-gutters">
                                        <div className="col-auto">{props.food.description}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-5">
                                            <button type="button" className="btn stat-button stat-active text-center" onClick={handleClickPlus}>افزودن به سبد خرید</button>    
                                        </div>
                                        <button type="button" className="btn col-1 flation-minus minus-btn no-gutters" onClick={handleClickMinus}></button>    
                                        <div className="col-2 flex-container no-gutters justify-content-center food-num-cart">
                                        <NumFood food={props.food} />
                                        </div>
                                        <button type="button" className="btn col-1 flation-plus plus-btn no-gutters" onClick={handleClickPlus}></button>    
                                    </div>
                                </div>
                                <img className="col-4" src={props.food.image} alt="foodPic" />
                            </div>
                        </div>
                        <div className="col-auto total-cost-row">
                            جمع کل: ۱۸۰۰۰ تومان
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodModal