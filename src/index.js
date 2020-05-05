import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/home/home';
import Profile from './views/profile/profile'
import Restaurant from './views/restaurant/restaurant'
import Login from './views/login/login'
import SignUp from './views/signup/signup'
import 'react-notifications/lib/notifications.css';
import './Assets/Fonts/vazir-fonts/fonts.css';
import './Assets/Icons/font/flaticon.css';
import './index.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <Router>
  <Switch>
    <Route key={0} exact path="/" component={Home}/>
    <Route key={1} path="/profile" component={Profile}/>
    <Route key={2} exact path="/restaurant/:restaurantId" component={Restaurant}/>
    <Route key={3} exact path="/login" component={Login} />
    <Route key={4} exact path="/signup" component={SignUp} />
  </Switch>
  <NotificationContainer/>
</Router>,
  document.getElementById('root')
);
