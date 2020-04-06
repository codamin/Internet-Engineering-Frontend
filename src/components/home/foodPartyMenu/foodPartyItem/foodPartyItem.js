import React from 'react'
import FoodPartyItemModal from './foodPartyItemModal/foodPartyItemModal'
import './foodPartyItem.css'
import star from 'Assets/Icons/star.png'

const digitMap = {0:'۰', 1:'۱', 2:'۲', 3:'۳', 4:'۴', 5:'۵', 6:'۶', 7:'۷', 8:'۸', 9:'۹'}
const eng2fa = (engNum) => {return((''+engNum).split('').map(digit=>digitMap[digit]).join(''))} 

function FoodPartyItem(props) {
    return(
        <div className="col-auto container item m-3 px-3 pt-3 shadow rounded-lg">
            <div className="row">
                <div className="col container">
                    <div className="row justify-content-end">
                        <div className="col-auto foodPartyfoodName pr-0 text-right">{props.foodData.name}</div>
                    </div>
                    <div className="row">
                        <div className="col pr-1 text-right">
                            <img className="star" src={star}></img>
                        </div>
                        <div className="col-auto px-0 text-right">
                            {props.foodData.popularity}
                        </div>
                    </div>
                </div>
                <div className="col ml-1">
                    <img className="rounded-lg item-img" src={props.foodData.image}></img>
                </div>
            </div>
            <div className="row mt-2">
                    <div className="col text-right">{eng2fa(props.foodData.price)}</div>
                <div className="col text-left old-price">{eng2fa(props.foodData.oldPrice)}</div>
            </div>
            <div className="row mt-2 no-gutters">
                <div className="col  rounded-lg text-center mx-0">
                    <button type="button" className="btn buy-btn" data-toggle="modal" data-target="#foodPartyModal">خرید</button>
                </div>
                <div className="col rounded-lg text-center mx-0">
                    <button type="button" className="btn rmn-number">موجودی</button>
                </div>
            </div>
            <div className="row justify-content-center mt-3 pt-2 rest-name">
                <div className="col text-center">
                    {props.foodData.restaurantName}
                </div>
            </div>
            <FoodPartyItemModal foodData={props.foodData}/>
        </div>
    );
}

export default FoodPartyItem;