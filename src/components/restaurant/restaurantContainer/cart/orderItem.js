import React from 'react'

import './orderItem'

function OrderItem(props) {
    if(!props || props.item == undefined){
        return null; //You can change here to put a customized loading spinner 
    }
    return(
        <div>
            <div className="row mt-2 no-gutters">
                <a href="#" className="col-1 flaticon-minus minus-btn no-gutters justify-content-start"></a>
                <div className="col-2 flex-container no-gutters justify-content-center food-num-cart">
                    
                </div>
                <a href="#" className="col-1 flaticon-plus plus-btn no-gutters justify-content-end"></a>
                <div className="col-8 flex-container justify-content-end food-name-cart">

                </div>
            </div>
            <div className="row pt-0 pr-0 pb-2 pl-0 food-field-bottom container no-gutters">
                <div className="col-3 pr-1 flex-container justify-content-end">تومان</div>
                <div className="col-3 flex-container justify-content-start">

                </div>
                <div className="col-6"></div>
            </div>
        </div>
    )
}

export default OrderItem