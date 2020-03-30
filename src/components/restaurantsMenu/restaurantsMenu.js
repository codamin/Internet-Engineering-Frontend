import React from 'react'
import RestaurantsMenuItem from 'components/restaurantsMenu/restaurantsMenuItem/restaurantsMenuItem'

import API from 'apis/api'

class RestaurantsMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        }
    }

    componentDidMount() {
        API.get('restaurant').then(
            jsonData => {
                this.setState({restaurants: jsonData.data});
                console.log(jsonData.data)
            })
    }

    render() {
        return(
            <div className="container mt-5">
                <div className="row justify-content-center mb-2">
                    <div className="col-auto title text-center">
                        رستوران ها
                    </div>
                </div>
                <div className="row">
                    {this.state.restaurants.map(restaurantData => <RestaurantsMenuItem restaurantData={restaurantData}/>)}
                </div>
            </div>
        );
    }
}

export default RestaurantsMenu;