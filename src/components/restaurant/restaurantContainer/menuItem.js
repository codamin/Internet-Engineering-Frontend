import React from 'react'
import './menuItem.css'

function MenuItem(props) {
    console.log(props)
    return(
    <div className="col-4 mb-3 flex-container no-gutters">
        <div classNam="container mt-0 mr-3 mb-3 ml-3 restaurant no-gutters">
            <div classNam="row mt-3 flex-container no-gutters">
                <img classNam="col-auto rest-pic no-gutters" src={props.itemData.image} alt="foodPic" />
            </div>
            <div classNam="row m-1 food-name container no-gutters">
                <div classNam="col-2 pt-2 pr-1 flex-container justify-content-end star">
                    <img classNam="star justify-content-start" src="../Assets/Icons/star.png" alt="star" />
                </div>
                <div classNam="col-2 pt-2 flex-container justify-content-start score">
                    {props.itemData.popularity}
                </div>
                <div classNam="col-8 flex-container justify-content-start">
                    {props.itemData.name}
                </div>
            </div>
            <div classNam="row mt-1 mb-2 container-fluid container no-gutters">
                <div classNam="col flex-container justify-content-end">تومان</div>
                <div classNam="col pl-1 flex-container justify-content-start">
                    {props.itemData.price}
                </div>
            </div>
            <div classNam="row mb-3 mt-1 food-cart no-gutters container">
                <div classNam="col text-center flex-container justify-content-center">
                    <button type="button" classNam="btn stat-button stat-active text-center" data-toggle="#modal" data-target="#exModal">افزودن به سبد خرید</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MenuItem