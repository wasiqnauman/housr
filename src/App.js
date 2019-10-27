import React from 'react';
import Logo from './media/houser-logo.png';
import MainPhoto from './media/dawn-main.jpg';
import Tiles from './Tiles';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

function App() {
  var tilelist = [
    {
      name: "place 1",
      location: "location 1 ",
      description: "desc",
      price: 1
    },
    {
      name: "place 2",
      location: "location 2 ",
      description: "desc",
      price: 2
    },
    {
      name: "place 3",
      location: "location 3 ",
      description: "desc",
      price: 3
    }
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
            <img src={Logo} alt="houser-logo" className="houser-logo" />
            <small><p className="pt-2 main-text"><em>“It is hard to argue that housing is not a fundamental human need. Decent, affordable housing should be a basic right for everybody in this country.”</em> - Matthew Desmond</p></small>
            {/* an associate professor at Harvard University for social sciences */}
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button id="button-addon2" type="submit" className="btn btn-link text-danger"><i className="fa fa-search"></i></button>
                </div>
                <input type="search" placeholder="Enter an address or city" className="form-control border-0" />
              </div>
              <Tiles tilelist={tilelist} />
            </div>
          </div>
        </header>
      </header>
    </div>
  );
}

export default App;
