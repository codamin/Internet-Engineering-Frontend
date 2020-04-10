import React from 'react'
import FoodPartyItemModal from './foodPartyItemModal/foodPartyItemModal'
import './foodPartyItem.css'
import star from 'Assets/Icons/star.png'
import {eng2fa} from 'utils/utils'
import PropTypes from 'prop-types'

function BuyButton(props) {
    if(props.count == 0) {
        return(
            <button type="button" className="btn buy-btn-disabled disable">خرید</button>
        );
    }
    else return(
        <button type="button" className="btn buy-btn" data-toggle="modal" data-target={"#foodModal_" + props.id}>خرید</button>
    );
}


function RemainingButton(props) {
    if(props.count == 0) return(
        <button type="button" className="btn rmn-number">ناموجود</button>
    );
    else return(
        <button type="button" className="btn rmn-number">{[eng2fa(props.count)," :موجودی"].join(' ')}</button>
    );
}

function FoodPartyItem(props) {
    return(
        <div className="col-auto container item m-3 px-3 pt-3 rounded-lg">
            <div className="row d-flex flex-nowrap">
                <div className="col-auto container rest-item-food-info">
                    <div className="row justify-content-end">
                        <div className="col-auto pr-0 text-right foodPartyfoodName">{props.foodData.name}</div>
                    </div>
                    <div className="row">
                        <div className="col pr-1 text-right">
                            <img className="star" src={star}></img>
                        </div>
                        <div className="col-auto px-0 text-right">
                            {eng2fa(props.foodData.popularity)}
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <img className="rounded-lg item-img" src={props.foodData.image}></img>
                </div>
            </div>
            <div className="row home-price-row mt-2">
                    <div className="col text-right">{eng2fa(props.foodData.price)}</div>
                <div className="col text-left old-price">{eng2fa(props.foodData.oldPrice)}</div>
            </div>
            <div className="row mt-4 no-gutters">
                <div className="col  rounded-lg text-center mx-0">
                    <BuyButton count={props.foodData.count} id={props.id}/>
                </div>
                <div className="col rounded-lg text-center mx-0">
                    <RemainingButton count={props.foodData.count}/>
                </div>
            </div>
            <div className="row justify-content-center mt-3 pt-2 rest-name">
                <div className="col text-center text-truncate">
                    {props.foodData.restaurantName}
                </div>
            </div>
            <FoodPartyItemModal foodData={props.foodData} id={props.id} updateFunction={props.updateFunction}/>
        </div>
    );
}

FoodPartyItem.propTypes = {
    count: PropTypes.number.isRequired,
    foodData: PropTypes.shape({
        available: PropTypes.bool,
        count: PropTypes.number,
        description: PropTypes.string,
        image: PropTypes.string,
        name: PropTypes.string,
        oldPrice: PropTypes.number,
        popularity: PropTypes.number,
        price: PropTypes.number,
        restaurantId: PropTypes.string,
        restaurantName: PropTypes.string
    })
}

export default FoodPartyItem;