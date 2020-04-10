import React from 'react'
import RestaurantsMenuItem from 'components/home/restaurantsMenu/restaurantsMenuItem/restaurantsMenuItem'
import './restaurantsMenu.css'
import API from 'apis/api'

class RestaurantsMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: undefined
        }
    }

    componentDidMount() {
        API.get('restaurant').then(
            jsonData => {
                this.setState({restaurants: jsonData.data});
            })
    }

    render() {
        return(
            <div className="container-fluid mt-5 resMenuItem justify-content-center">
                <div className="row justify-content-center mb-2">
                    <div className="col-auto title text-center">
                        رستوران ها
                    </div>
                </div>
                {
                    this.state.restaurants == undefined ?
                    <div className="text-center mt-5">
                        <div className="spinner-border" role="status"></div>
                    </div> :
                    <div className="row justify-content-center">
                        {this.state.restaurants.map(restaurantData => <RestaurantsMenuItem restaurantData={restaurantData}/>)}
                    </div>
                }
            </div>
        );
    }
}

export default RestaurantsMenu;