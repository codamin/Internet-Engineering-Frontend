import React from 'react'
import './menuItem.css'

function MenuItem(props) {
    if(!props || props.food == undefined){
        return null; //You can change here to put a customized loading spinner n
    }
    return(
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
                    <button type="button" className="btn stat-button stat-active text-center" data-toggle="#modal" data-target="#exModal">افزودن به سبد خرید</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MenuItem