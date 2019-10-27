import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import UserForm from './Components/UserForm';
import HomePage from './Components/HomePage';
import App from './App';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/income">
                    <UserForm />
                </Route>
                <Route exact path="/ammenities">
                    <HomePage />
                </Route>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
