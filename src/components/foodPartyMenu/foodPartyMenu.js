import React from 'react'
import FoodPartyItem from 'components/foodPartyMenu/foodPartyItem/foodPartyItem'
import 'components/foodPartyMenu/foodPartyMenu.css'

function FoodPartyMenu() {
    return(
        <div>
            <div className="row justify-content-center mt-4 mb-2 no-gutters">
                <div className="col-1 food-party-title text-center">
                       !جشن غذا 
                </div>
            </div>
            <div className="row justify-content-center">
                <span class="label label-default">۲۱:۳۴ : زمان باقیمانده</span>
            </div>
            <div className="container-fluid horizontal-scrollable  shadow mt-4">

                <div className="row flex-nowrap">
                    <FoodPartyItem/>
                    <FoodPartyItem/>
                    <FoodPartyItem/>
                    <FoodPartyItem/>
                    <FoodPartyItem/>
                    <FoodPartyItem/>
                    <FoodPartyItem/>
                    <FoodPartyItem/>
                    <FoodPartyItem/>
                    <FoodPartyItem/>
                    <FoodPartyItem/>
                    <FoodPartyItem/>
                    <FoodPartyItem/>
                    <FoodPartyItem/>
                </div>
            </div>
        </div>
    );
}

export default FoodPartyMenu;