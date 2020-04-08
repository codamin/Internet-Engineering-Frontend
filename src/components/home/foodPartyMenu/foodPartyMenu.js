import React from 'react';
import FoodPartyItem from 'components/home/foodPartyMenu/foodPartyItem/foodPartyItem';
import 'components/home/foodPartyMenu/foodPartyMenu.css';

import API from 'apis/api'

class FoodPartyMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: []
        }
        this.getFoodPartyInfo = this.getFoodPartyInfo.bind(this)
    }

    componentDidMount() {
        console.log('menu did mount')
        this.getFoodPartyInfo();
    }

    getFoodPartyInfo() {
        console.log('get info called')
        API.get('party').then(
            jsonData => {
                console.log(jsonData.data)
                this.setState({foods: jsonData.data});
        })
    }

    render() {
        return(
            <div>
                <div className="row justify-content-center mt-4 mb-2 no-gutters">
                    <div className="col-auto food-party-title text-center">
                            !جشن غذا
                    </div>
                </div>
                <div className="row">
                    
                </div>
                
                <div className="container-fluid horizontal-scrollable shadow mt-4">
                    <div className="row flex-nowrap">
                        {this.state.foods.map((position, key) => {
                            return <FoodPartyItem foodData={position} id={key} updateFunction={this.getFoodPartyInfo}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default FoodPartyMenu;