import React, { Component } from 'react';
import Navbar from 'components/commons/navbar/navbar'
import Footer from 'components/commons/footer/footer'
import Jombotron from 'components/commons/jombotron/jombotron'
import ProfileOrders from 'components/profile/profileOrders/profileOrders'
import ProfileCredit from 'components/profile/profileCredit/profileCredit'
import authHeader from 'services/auth-header'
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
    API.get(`cart`, { headers: authHeader() }).then(
      jsonData => {
          this.setState({cart: jsonData.data});
      }).catch(error => {
        console.log(error.response.status)
        if(error.response.status == 401 || error.response.status == 403) {
          localStorage.removeItem("token")
          window.location.href = "http://185.166.105.6:31085/login"
        }
      })
  }
  updateCart() {
    console.log("call update cart in profile")
    API.get(`cart`, { headers: authHeader() }).then(
        jsonData => {
            this.setState({cart: jsonData.data});
    }).catch(error => {
      console.log(error.response.status)
      if(error.response.status == 401 || error.response.status == 403) {
        localStorage.removeItem("token")
        window.location.href = "http://185.166.105.6:31085/login"
      }
    })
    this.getUserInfo()
  }
  getUserInfo() {
    API.get('user', { headers: authHeader() }).then((response) => {
      this.setState({userInfo: response.data});
    }).catch(error => {
      console.log(error.response.status)
      if(error.response.status == 401 || error.response.status == 403) {
        localStorage.removeItem("token")
        window.location.href = "http://185.166.105.6:31085/login"
      }
    })
  }

  render() {
    return (
      <div>
        <Navbar cart={this.state.cart} updateFunction={this.updateCart} isProfile={true} isHome={false}/>
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