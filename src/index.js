import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/home/home';
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

    <Route exact path="/">
      <Home />
    </Route>

    {/* <Route path="/about">
      <About />
    </Route>

    <Route path="/dashboard">
      <Dashboard />
    </Route> */}

  </Switch>
</Router>,
  document.getElementById('root')
);
