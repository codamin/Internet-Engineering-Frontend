import React from 'react'
import RestaurantsMenuItem from 'components/home/restaurantsMenu/restaurantsMenuItem/restaurantsMenuItem'
import './restaurantsMenu.css'


function RestaurantsMenu(props) {
    return(
        <div className="container-fluid mt-5 resMenuItem justify-content-center">
            <div className="row justify-content-center mb-2">
                <div className="col-auto title text-center">
                    رستوران ها
                </div>
            </div>
            {
                props.restaurants == undefined ?
                <div className="text-center mt-5">
                    <div className="spinner-border" role="status"></div>
                </div> :
                <div>
                    <div className="row justify-content-center">
                        {props.restaurants.map((restaurantData, key) => <RestaurantsMenuItem key={key} restaurantData={restaurantData}/>)}
                    </div>
                    <div className="row justify-content-center mb-2 mt-4">
                        <button className={"btn btn-primary mx-1"} onClick={props.loadMore}>نمایش بیشتر</button>
                    </div>
                </div>
            }
            
        </div>
    );
}

export default RestaurantsMenu;