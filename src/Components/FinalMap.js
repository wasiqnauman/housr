import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import GoogleMaps from './GoogleMaps';
import Logo from '../media/houser-logo.png';
import SideBar from './Sidebar';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export class FinalMap extends Component {
    render() {
        return (
            <div>
                <SideBar />
                <Navbar>

                    <Navbar.Brand href="/" className="navbar-custom">
                        <img
                            src={Logo}
                            width="70"
                            height="70"
                            className="d-inline-block align-top"
                            alt="Houser Logo"
                        />
                    </Navbar.Brand>
                    <a href="/favorites"><button id="button-addon2" type="submit" className="btn btn-link text-dark"><i className="fa fa-eye fa-2x"></i></button></a>
                </Navbar>
                <div className="middle">
                    <GoogleMaps />
                </div>
            </div>
        )
    }
}

export default FinalMap
