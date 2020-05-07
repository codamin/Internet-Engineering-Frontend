import React, { Component } from 'react';
import Navbar from 'components/commons/navbar/navbar'
import Footer from 'components/commons/footer/footer'
import Jombotron from 'components/commons/jombotron/jombotron'
import ProfileOrders from 'components/profile/profileOrders/profileOrders'
import ProfileCredit from 'components/profile/profileCredit/profileCredit'
import authHeader from 'services/auth-header'
import axios from 'axios'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import API from 'apis/api'

class Profile extends Component{
  constructor(props) {
    super(props)
    this.state = {
      userInfo: undefined,
      cart: undefined
    }
    this.getUserInfo = this.getUserInfo.bind(this)
    this.updateCart = this.updateCart.bind(this)
  }

  componentDidMount() {
    this.getUserInfo();
    const token = localStorage.getItem("token");
    API.get(`cart`, { headers: {Authorization: token} }).then(
      jsonData => {
          this.setState({cart: jsonData.data});
      })
  }
  updateCart() {
    const token = localStorage.getItem("token");
    API.get(`cart`, { headers: {Authorization: token} }).then(
        jsonData => {
            this.setState({cart: jsonData.data});
    })
  }
  getUserInfo() {
    const token = localStorage.getItem("token");
    API.get('user', { headers: {Authorization: token} }).then((response) => {
      this.setState({userInfo: response.data});
    }).catch(function (error) {
    });
  }

  render() {
    return (
      <div>
        <Navbar cart={this.state.cart} updateUserFunction={this.updateCart} isProfile={true} isHome={false}/>
        <Jombotron userInfo={this.state.userInfo}/>
        <Router>
            <Switch>
              <Route exact path={this.props.match.path} render={(props) => <ProfileOrders {...props} updateUserFunction={this.getUserInfo} />} />
              <Route path={this.props.match.path + "/orders"} render={(props) => <ProfileOrders {...props} updateUserFunction={this.getUserInfo} />} />
              <Route path={this.props.match.path + "/credit"} render={(props) => <ProfileCredit {...props} updateUserFunction={this.getUserInfo} />} />
            </Switch>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default Profile;