import React from 'react'
import API from 'apis/api'


class NumFood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        }
    }

    componentDidMount() {
        API.get(`cart/${this.props.food.restaurantId}/${this.props.food.name}`).then(
            jsonData => {
                this.setState({num: jsonData.data.number});
            }
        )
    }

    render() {
        return(
            <>
            {this.state.num}
            </>
        )
    }
}

export default NumFood