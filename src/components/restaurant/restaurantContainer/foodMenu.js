import React from 'react'

import './foodMenu.css'

function FoodMenu() {
    return(
        <div className="row pt-5 container">
            <div className="col-8 flex-container">
                <div className="row container no-gutters">
                    <div className="col"></div>
                    <div className="col flex-container food-menu">
                        منوی غذا
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
}

export default FoodMenu
