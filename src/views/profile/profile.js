import React, { Component } from 'react';
import Navbar from 'components/home/navbar/navbar'
import Footer from 'components/commons/footer/footer'
import Jombotron from 'components/commons/jombotron/jombotron'
import ProfileOrders from 'components/profile/profileOrders/profileOrders'
import ProfileCredit from 'components/profile/profileCredit/profileCredit'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function Profile({ match }) {
    return (
      <div>
        <Navbar/>
        <Jombotron/>
        <Router>
            <Switch>
              {console.log(match.url)}
              <Route exact path={match.path} component={ProfileOrders}/>
              <Route path={match.path + "/orders"} component={ProfileOrders}/>
              <Route path={match.path + "/credit"} component={ProfileCredit}/>
            </Switch>
        </Router>
        <Footer/>
      </div>
    );
}

export default Profile;