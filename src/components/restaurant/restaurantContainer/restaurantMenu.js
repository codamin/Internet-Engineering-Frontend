import React from 'react'
import MenuItem from 'components/restaurant/restaurantContainer/menuItem/'
import './restaurantMenu.css'

// class RestaurantMenu extends React.Component {
//     render() {
//         return(
//         <div className="col-8 restaurants">
//             <div className="container">
//                 {this.props.menu.map(menuData => <MenuItem itemData={menuData}/>)}
//                 {/* {props.menu} */}
//             </div>
//         </div>
//         )
//     }
// }

function RestaurantMenu(props) {
    return(
        <div className="col-8 restaurants">
            <div className="container">
                {props.menu.map(f => <h1>{f.name}</h1>)}
            </div>
        </div>  
    );
}

export default RestaurantMenu