import React from 'react'
import styles from './searchBar.module.css'


class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            foodSearch: null,
            restaurantSearch: null
        }
        this.handleFoodChange = this.handleFoodChange.bind(this)
        this.handleRestaurantChange = this.handleRestaurantChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleFoodChange(event) {
        this.setState({
            foodSearch: event.target.value
        })
    }

    handleRestaurantChange(event) {
        this.setState({
            restaurantSearch: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.updateRestaurants(this.state.restaurantSearch, this.state.foodSearch)
    }

    render() {
        return(
            <form className={"form-inline mx-auto py-2 " + styles.searchBar} onSubmit={this.handleSubmit}>
                <div className="form-group mx-1 mb-1">
                    <button type="submit" className={"btn btn-primary " + styles.searchBtn}>جست و جو</button>
                </div>
                <div className="form-group mx-1 mb-1">
                    <input type="text" className={["form-control",styles.searchInput, styles.inputPlaceholder].join(' ')}
                    value={this.state.restaurantSearch} onChange={this.handleRestaurantChange} placeholder="نام رستوران"/>
                </div>
                <div className="form-group mx-1 mb-1">
                    <input type="text" className={["form-control",styles.searchInput, styles.inputPlaceholder].join(' ')}
                    value={this.state.foodSearch} onChange={this.handleFoodChange} placeholder="نام غذا"/>
                </div>
            </form>
        );
    }
}

export default SearchBar