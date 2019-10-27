import React from 'react';
import Logo from './media/houser-logo.png';
import MainPhoto from './media/dawn-main.jpg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

import H1P1 from './media/House1/pic1.png';
import H1P2 from './media/House1/pic2.png';
import H1P3 from './media/House1/pic3.png';
import H2P1 from './media/House2/pic1.png';
import H2P2 from './media/House2/pic2.png';
import H2P3 from './media/House2/pic3.png';
import H3P1 from './media/House3/pic1.png';
import H3P2 from './media/House3/pic2.png';
import H3P3 from './media/House3/pic3.png';
import H4P1 from './media/House4/pic1.png';
import H4P2 from './media/House4/pic2.png';
import H4P3 from './media/House4/pic3.png';
import H5P1 from './media/House5/pic1.png';
import H5P2 from './media/House5/pic2.png';
import H5P3 from './media/House5/pic3.png';
import H6P1 from './media/House6/pic1.png';
import H6P2 from './media/House6/pic2.png';
import H6P3 from './media/House6/pic3.png';

function App() {
  var tilelist = [
    {
      address: "2601 Overlook Dr, Augusta, GA 30909",
      price: 85000,
      sqFeet: 1232,
      bedrooms: 3,
      bathrooms: 2,
      images: [{H1P1},{H1P2},{H1P3}]
    },
    {
      address: "1720 Niskey Cove Rd SW, Atlanta, GA 30331",
      price: 310000,
      sqFeet: 3097,
      bedrooms: 4,
      bathrooms: 3,
      images: [{H2P1},{H2P2},{H2P3}]
    },
    {
      address: "1600 Ezra Church Dr NW, Atlanta, GA 30314",
      price: 230000,
      sqFeet: 812,
      bedrooms: 4,
      bathrooms: 2,
      images: [{H3P1},{H3P2},{H3P3}]
    },
    {
      address: "1824 N Ave Nw, Atlanta, GA 30318",
      price: 289500,
      sqFeet: 1470,
      bedrooms: 3,
      bathrooms: 3,
      images: [{H4P1},{H4P2},{H4P3}]
    },
    {
      address: "980 Mays Ln SW, Atlanta, GA 30336",
      price: 165000,
      sqFeet: 1638,
      bedrooms: 3,
      bathrooms: 3,
      images: [{H5P1},{H5P2},{H5P3}]
    },
    {
      address: "1445 N Highland Ave NE, Atlanta, GA 30306",
      price: 998000,
      sqFeet: 2846,
      bedrooms: 4,
      bathrooms: 3,
      images: [{H6P1},{H6P2},{H6P3}]
    },
  ];
  return (
    <div className="App">
      <header className="App-header">

        <header className="v-header container">
          <div className="fullscreen-photo-wrap">
            <img src={MainPhoto} alt="main-housing" className="main-img" />
          </div>
          <div className="header-overlay"></div>
          <div className="header-content">
            <img src={H6P1} alt="houser-logo" className="houser-logo" />
            <small><p className="pt-2 main-text"><em>“It is hard to argue that housing is not a fundamental human need. Decent, affordable housing should be a basic right for everybody in this country.”</em> - Matthew Desmond</p></small>
            {/* an associate professor at Harvard University for social sciences */}
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button id="button-addon2" type="submit" className="btn btn-link text-danger"><i className="fa fa-search"></i></button>
                </div>
                <input type="search" placeholder="Enter an address or city" className="form-control border-0" />
              </div>
            </div>
          </div>
        </header>
      </header>
    </div>
  );
}

export default App;
