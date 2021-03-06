import React from 'react'
import './orderItem.css'
import API from 'apis/api'
import {eng2fa} from 'utils/utils'
import {NotificationManager} from 'react-notifications'
import PropTypes from 'prop-types'
import authHeader from '../../../../services/auth-header'


function OrderItem(props) {

    function handleClickPlus(e) {
        API.post('cart', {
            restaurantId: `${props.item.food.restaurantId}`,
            foodName: `${props.item.food.name}`,
            num: 1         
        },
        {
            headers: authHeader()
        }).then(function (response) {
            props.updateFunction();
          }).catch(error => {
            if (error.response) {
                NotificationManager.error(error.response.data);
              }})

    }
    
    function handleClickMinus(e) {
        API.delete('cart',
        {headers: authHeader(),
        data: {
            restaurantId: `${props.item.food.restaurantId}`,
            foodName: `${props.item.food.name}`            
        }
        }).then(function (response) {
            props.updateFunction();
          }).catch(error => {
            if (error.response) {
                NotificationManager.error(error.response.data);
              }})
    }

    if(!props || props.item == undefined){
        return null; //You can change here to put a customized loading spinner 
    }
    return(
        <div className="col order-item-card">
            <div className="row mt-2 mx-1 no-gutters d-flex align-items-center flex-nowrap">
                <span className="col-auto mr-3 flaticon-minus minus-btn clickable no-gutters justify-content-start" onClick={handleClickMinus}></span>
                <div className="col-auto mr-2 flex-container no-gutters justify-content-center food-num-cart">
                    {eng2fa(props.item.number)}
                </div>
                <span className="col-auto mr-3 flaticon-plus plus-btn clickable justify-content-end" onClick={handleClickPlus}></span>
                <div className="col-auto flex-container text-right justify-content-end food-name-cart ml-auto">
                    {props.item.food.name}
                </div>
            </div>
            <div className="row mt-2 pt-0 pr-0 pb-2 pl-0 food-field-bottom container no-gutters">
                <div className="col-auto ml-1 pr-1 flex-container justify-content-end">??????????</div>
                <div className="col-auto flex-container justify-content-start">
                {eng2fa(props.item.price)}
                </div>
                <div className="col-6"></div>
            </div>
        </div>
    )
}

OrderItem.propTypes = {
    item: PropTypes.shape({
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
        }),
        number: PropTypes.number.isRequired
    }).isRequired,
    updateFunction: PropTypes.func.isRequired,
}

export default OrderItem