import React from 'react';
import FoodPartyItem from 'components/foodPartyMenu/foodPartyItem/foodPartyItem';
import 'components/foodPartyMenu/foodPartyMenu.css';

import API from 'apis/api'

class FoodPartyMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: []
        }
    }

    componentDidMount() {
        API.get('party').then(
            jsonData => {
                this.setState({foods: jsonData.data});
                console.log(jsonData.data)
            })
    }

    render() {
        return(
            <div>
                <div className="row justify-content-center mt-4 mb-2 no-gutters">
                    <div className="col-1 food-party-title text-center">
                            !جشن غذا 
                    </div>
                </div>
                <div className="container-fluid horizontal-scrollable shadow mt-4">
                    <div className="row flex-nowrap">
                        {this.state.foods.map(foodData => <FoodPartyItem foodData={foodData} />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default FoodPartyMenu;