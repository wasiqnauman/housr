import React, { Component } from 'react';
import BottomButton from './BottomButtons';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import GoogleMaps from './GoogleMaps';
import Logo from '../media/houser-logo.png';
import SideBar from './Sidebar';

export class HouseView extends Component {
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
                    <button id="button-addon2" type="submit" className="btn btn-link text-dark"><i className="fa fa-globe-americas fa-2x"></i></button>
                </Navbar>
                <div className="middle">

                </div>
                <div className="bottom">
                    <div className="half-left"><button id="check" type="submit" className="btn btn-link text-dark"><i className="fa fa-check fa-2x"></i></button></div>
                    <div className="half-right"><button id="x-mark" type="submit" className="btn btn-link text-dark"><i className="fa fa-globe-americas fa-2x"></i></button></div>
                </div>
                {/* <GoogleMaps /> */}
                <BottomButton />
            </div>
        )
    }
}

export default HouseView
