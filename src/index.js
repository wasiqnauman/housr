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
import GoogleMaps from './Components/GoogleMaps';
<<<<<<< Updated upstream
import HouseView from './Components/HouseView';
=======
import App from './App';
>>>>>>> Stashed changes

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/">
                    <App />
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
                <Route path="/map">
                    <GoogleMaps />
                </Route>
                <Route exact path="/house-viewing">
                    <HouseView />
                </Route>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
