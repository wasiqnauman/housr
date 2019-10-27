import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import UserForm from './Components/UserForm';
import HomePage from './Components/HomePage';
import InOrOutForm from './Components/InOrOutForm';
import Ammenities from './Components/AmenitiesForm';
import Ownership from './Components/RentOrOwnForm';

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
                <Route exact path="/amenities">
                    <Ammenities />
                </Route>
                <Route exact path="/outskirts">
                    <InOrOutForm />
                </Route>
                <Route exact path="/ownership">
                    <Ownership />
                </Route>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
