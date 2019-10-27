import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import GoogleMaps from './GoogleMaps';
import Logo from '../media/houser-logo.png';
import SideBar from './Sidebar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import H1P1 from '../media/House1/pic1.jpg';
import H1P2 from '../media/House1/pic2.jpg';
import H1P3 from '../media/House1/pic3.jpg';
import H2P1 from '../media/House2/pic1.jpg';
import H2P2 from '../media/House2/pic2.png';
import H2P3 from '../media/House2/pic3.jpg';
import H3P1 from '../media/House3/pic1.jpg';
import H3P2 from '../media/House3/pic2.jpg';
import H3P3 from '../media/House3/pic3.jpg';

var houses = [
    {
        address: "2601 Overlook Dr, Augusta, GA 30909",
        price: 85000,
        sqFeet: 1232,
        bedrooms: 3,
        bathrooms: 2,
        images: [{ H1P1 }, { H1P2 }, { H1P3 }]
    },
    {
        address: "1720 Niskey Cove Rd SW, Atlanta, GA 30331",
        price: 310000,
        sqFeet: 3097,
        bedrooms: 4,
        bathrooms: 3,
        images: [{ H2P1 }, { H2P2 }, { H2P3 }]
    },
    {
        address: "1600 Ezra Church Dr NW, Atlanta, GA 30314",
        price: 230000,
        sqFeet: 812,
        bedrooms: 4,
        bathrooms: 2,
        images: [{ H3P1 }, { H3P2 }, { H3P3 }]
    }
];

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
                    <a href="/map-view"><button id="button-addon2" type="submit" className="btn btn-link text-dark"><i className="fa fa-globe-americas fa-2x"></i></button></a>
                </Navbar>
                <div className="middle">
                    <Carousel>
                        <div className="image-slide">
                            <img src={H1P1} class="img-inside" />
                            <p className="legend" id="text-img">1720 Niskey Cove Rd SW, Atlanta, GA 30331</p>
                        </div>
                        <div className="image-slide">
                            <img src={H1P2} class="img-inside" />
                            <p className="legend">3 bd, 2 ba, 1,670 sqft</p>
                        </div>
                        <div className="image-slide">
                            <img src={H1P3} class="img-inside" />
                            <p className="legend">Est. payment: $1,086/mo</p>

                        </div>
                    </Carousel>
                </div>
                <div className="bottom">
                    <a href="/house-viewing2" className="half-left"><button id="check" type="submit" className="btn btn-link"><i className="fa fa-check fa-5x"></i></button></a>
                    <a href="/house-viewing2" className="half-right"><button id="x-mark" type="submit" className="btn btn-link"><i className="fa fa-times fa-5x"></i></button></a>
                </div>
            </div>
        )
    }
}

export default HouseView
