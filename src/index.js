import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { browserHistory, BrowserRouter, Route, Router, Switch, NavLink } from 'react-router-dom';
import Home from "./containers/Home"
import Hospital from './containers/Hospital';
import Headers from './components/Menu'
import Map from './containers/Map';
import Call from './containers/Call';
import Info from './containers/Info';

import 'bootstrap/dist/css/bootstrap.css'




ReactDOM.render(
    <BrowserRouter>
        <Headers />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/map" component={Map} />
            <Route path="/hospital" component={Hospital} />
            <Route path="/call" component={Call} />
            <Route path="/info" component={Info} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
