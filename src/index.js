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
import HouseView from './Components/HouseView';
import HouseView2 from './Components/HouseView2';
import HouseView3 from './Components/HouseView3';
import MapView from './Components/GoogleMapView';
import Favorites from './Components/Favorites';
import FinalMap from './Components/FinalMap';


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
                <Route exact path="/house-viewing">
                    <HouseView />
                </Route>
                <Route exact path="/house-viewing2">
                    <HouseView2 />
                </Route>
                <Route exact path="/house-viewing3">
                    <HouseView3 />
                </Route>
                <Route exact path="/map-view">
                    <MapView />
                </Route>
                <Route exact path="/favorites">
                    <Favorites />
                </Route>
                <Route exact path="/final-map">
                    <FinalMap />
                </Route>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
