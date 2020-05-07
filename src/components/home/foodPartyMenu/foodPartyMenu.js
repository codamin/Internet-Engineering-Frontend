import React from 'react';
import FoodPartyItem from 'components/home/foodPartyMenu/foodPartyItem/foodPartyItem';
import 'components/home/foodPartyMenu/foodPartyMenu.css';
import Timer from './timer/timer'
import API from 'apis/api'
import PropTypes from 'prop-types'
import authHeader from '../../../services/auth-header';

class FoodPartyMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: undefined,
        }
        this.getFoodPartyInfo = this.getFoodPartyInfo.bind(this)
    }

    componentDidMount() {
        this.getFoodPartyInfo();
    }

    getFoodPartyInfo() {
        API.get('party', { headers: authHeader() }).then(
            jsonData => {

                console.log('getFoodPartyInfo called')
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
                <Timer updateFunction={this.getFoodPartyInfo}/>
                {
                    this.state.foods == undefined ?
                    <div className="text-center ml-3">
                        <div className="spinner-border mt-5" role="status"></div>
                    </div> :
                    <div className="container-fluid horizontal-scrollable  mt-4">
                        <div className="row flex-nowrap">
                            {this.state.foods.map((position, key) => {
                                return <FoodPartyItem food={position} key={key} id={key} updateFunction={this.getFoodPartyInfo} updateCart={this.props.updateCart}/>
                            })}
                        </div>
                    </div>
                }
            </div>
        );
    }
}

FoodPartyMenu.propTypes = {
    updateCart: PropTypes.func.isRequired
}

export default FoodPartyMenu;