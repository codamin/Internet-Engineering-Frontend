import React from 'react'
import RestaurantsMenuItem from 'components/restaurantsMenu/restaurantsMenuItem/restaurantsMenuItem'

function RestaurantsMenu() {
    return(
        <div className="container mt-5">
            <div className="row justify-content-center mb-2">
                <div className="col-auto title text-center">
                    رستوران ها
                </div>
            </div>
            <div className="row">
                <RestaurantsMenuItem/>
                <RestaurantsMenuItem/>
                <RestaurantsMenuItem/>
                <RestaurantsMenuItem/>
                <RestaurantsMenuItem/>
                <RestaurantsMenuItem/>
                <RestaurantsMenuItem/>
                <RestaurantsMenuItem/>
                <RestaurantsMenuItem/>
            </div>
        </div>
    );
}

export default RestaurantsMenu;