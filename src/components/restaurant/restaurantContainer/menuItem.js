import React from 'react'
<<<<<<< HEAD
import star_logo from 'components/restaurant/restaurantContainer/star.png'
// import FoodModal from 'components/restaurant/restaurantContainer/modal/foodModal'
import FoodPartyItemModal from 'components/home/foodPartyMenu/foodPartyItem/foodPartyItemModal/foodPartyItemModal'

=======
import FoodModal from 'components/restaurant/restaurantContainer/modal/foodModal'
>>>>>>> 6e6b0542b8a311c24fa26df5aaf442111813d9be

import './menuItem.css'

function MenuItem(props) {
    if(!props || props.food == undefined || props.id == undefined){
        return null; //You can change here to put a customized loading spinner n
    }
<<<<<<< HEAD
    const style1 = "container mt-0 mr-3 mb-3 ml-3 food no-gutters"
    const style2 = "container m-3 food no-gutters"
    return (
        <>
            <div className="col-4 mb-3 flex-container no-gutters">
                <div className={props.id < 3 ? style1 : style2}>
                    <div className="row mt-3 flex-container no-gutters">
                        <img className="col-auto food-pic no-gutters" src={props.food.image} alt="foodPic" />
                    </div>

                    <div className="row m-2 food-name container no-gutters">
                        <div className="col-2 pt-2 pr-1 flex-container justify-content-end star">
                            <img className="star justify-content-start" src={star_logo} alt="star" />
                        </div>
                        <div className="col-2 pt-2 flex-container justify-content-start score">
                            {props.food.popularity}
                        </div>
                        <div className="col-8 flex-container justify-content-start food-name">
                            {props.food.name}
                        </div>
                    </div>

                    <div className="row mt-1 mb-2 container-fluid container no-gutters">
                        <div className="col flex-container justify-content-end">تومان</div>
                        <div className="col pl-1 flex-container justify-content-start">
                            {props.food.price}
                        </div>
                    </div>
                    <div className="row mb-3 mt-1 food-cart no-gutters container">
                        <div className="col text-center flex-container justify-content-center">
                            <button type="button" className="btn stat-button stat-active text-center" data-toggle="modal" data-target={"#foodModal_" + props.id}>افزودن به سبد خرید</button>
                        </div>
                    </div>
                </div>
                {/* <FoodModal food={props.food} key={props.id} id={props.id} onChang={props.onChang}/> */}
                <FoodPartyItemModal foodData={props.food} key={props.id} id={props.id} />
            </div>
        </>
=======
    return(
    <>
        <div className="col-4 mb-3 flex-container no-gutters">
            <div className="container mt-0 mr-3 mb-3 ml-3 restaurant no-gutters">
                <div className="row mt-3 flex-container no-gutters">
                    <img className="col-auto rest-pic no-gutters" src={props.food.image} alt="foodPic" />
                </div>
                <div className="row m-1 food-name container no-gutters">
                    <div className="col-2 pt-2 pr-1 flex-container justify-content-end star">
                        <img className="star justify-content-start" src="./star.png" alt="star" />
                    </div>
                    <div className="col-2 pt-2 flex-container justify-content-start score">
                        {props.food.popularity}
                    </div>
                    <div className="col-8 flex-container justify-content-start">
                        {props.food.name}
                    </div>
                </div>
                <div className="row mt-1 mb-2 container-fluid container no-gutters">
                    <div className="col flex-container justify-content-end">تومان</div>
                    <div className="col pl-1 flex-container justify-content-start">
                        {props.food.price}
                    </div>
                </div>
                <div className="row mb-3 mt-1 food-cart no-gutters container">
                    <div className="col text-center flex-container justify-content-center">
                        <button type="button" className="btn stat-button stat-active text-center" data-toggle="modal" data-target={"#foodModal_" + props.id}>افزودن به سبد خرید</button>
                    </div>
                </div>
            </div>
        </div>
        <FoodModal food={props.food} key={props.id} id={props.id} />
    </>
>>>>>>> 6e6b0542b8a311c24fa26df5aaf442111813d9be
    )
}

export default MenuItem