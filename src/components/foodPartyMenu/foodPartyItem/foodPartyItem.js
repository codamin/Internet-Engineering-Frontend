import React from 'react'

import './foodPartyItem.css'

import pizza from 'Assets/Icons/pizza.png'
import star from 'Assets/Icons/star.png'

function FoodPartyItem() {
    return(
        <div className="col">
            <div className="container item m-3 pb-0 px-3 pt-3 shadow rounded-lg">
                <div className="row">
                    <div className="col container">
                        <div class="row justify-content-end">پیتزا اعلا</div>
                        <div class="row">
                            <div className="col pr-1 text-right">
                                <img className="star" src={star}></img>
                            </div>
                            <div className="col-auto px-0 text-right">
                                ۵
                            </div>
                        </div>
                    </div>
                    <div className="col ml-1">
                        <img className="rounded-lg" src={pizza}></img>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col text-right">۳۹۰۰۰</div>
                    <div className="col text-left old-price">۴۴۰۰۰</div>
                </div>
                <div className="row mt-2 no-gutters">
                    <div className="col  rounded-lg text-center mx-0">
                        <button type="button" class="btn buy-btn">خرید</button>
                    </div>
                    <div className="col rounded-lg text-center mx-0">
                        <button type="button" class="btn rmn-number">موجودی</button>
                    </div>
                </div>
                <div className="row justify-content-center align-middle mt-3 pt-2 rest-name">
                    <div className="col text-center">
                        رستوران خامس
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodPartyItem;