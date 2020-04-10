import React from 'react'
import star_logo from 'components/restaurant/restaurantContainer/star.png'
import FoodPartyItemModal from 'components/home/foodPartyMenu/foodPartyItem/foodPartyItemModal/foodPartyItemModal'
import {eng2fa} from 'utils/utils'
import './menuItem.css'
import PropTypes from 'prop-types'


function MenuItem(props) {
    if(!props || props.food == undefined || props.id == undefined){
        return null; //You can change here to put a customized loading spinner n
    }
    const style1 = "container mt-0 mr-3 mb-3 ml-3 food no-gutters"
    const style2 = "container m-3 food no-gutters"
    return (
        <>
            <div className="col-4 mb-3 flex-container no-gutters menu-item-card">
                <div className={props.id < 3 ? style1 : style2}>
                    <div className="row mt-2 flex-container no-gutters">
                        <img className="col-auto food-pic no-gutters" src={props.food.image} alt="foodPic" />
                    </div>

                    <div className="row mt-3 container d-flex flex-nowrap no-gutters px-0 align-items-center">
                        <div className="col-2 mr-1 flex-container justify-content-end star">
                            <img className="star justify-content-start" src={star_logo} alt="star" />
                        </div>
                        <div className="col-auto flex-container justify-content-start score popularity">
                            {eng2fa(props.food.popularity)}
                        </div>
                        <div className="col-auto flex-container ml-auto justify-content-start restaurant-page-item-food-name">
                            {props.food.name}
                        </div>
                    </div>

                    <div className="row mt-1 mb-2 container-fluid container no-gutters">
                        <div className="col flex-container justify-content-end">تومان</div>
                        <div className="col pl-1 flex-container justify-content-start">
                            {eng2fa(props.food.price)}
                        </div>
                    </div>
                    <div className="row mb-3 mt-1 food-cart container no-gutters">
                        <div className="col text-center flex-container justify-content-center no-gutters">
                            <button type="button" className="btn stat-button stat-active justify-content-center text-center" data-toggle="modal" data-target={"#foodModal_" + props.id}>افزودن به سبد خرید</button>
                        </div>
                    </div>
                </div>
                <FoodPartyItemModal food={props.food} key={props.id} id={props.id} updateFunction={props.updateFunction} />
            </div>
        </>
    )
}

MenuItem.propTypes = {
    id: PropTypes.number.isRequired,
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
    updateFunction: PropTypes.func.isRequired,
}

export default MenuItem