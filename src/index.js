import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/home/home';
import Profile from './views/profile/profile'
import Restaurant from './views/restaurant/restaurant'
import './Assets/Fonts/vazir-fonts/fonts.css';
import './Assets/Icons/font/flaticon.css';
import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <Router>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/profile" component={Profile}/>
    <Route exact path="/restaurant/:restaurantId" component={Restaurant}/>
  </Switch>
</Router>,
  document.getElementById('root')
);
