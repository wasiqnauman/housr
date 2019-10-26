import React from 'react';
import logo from './media/logo.png';
import wooden from './media/dawn-main.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <header class="v-header container">
          <div class="fullscreen-photo-wrap">
            <img src={wooden} alt="wooden-housing" class="main-img" />
          </div>
          <div class="header-overlay"></div>
          <div class="header-content">
            <img src={logo} alt="houser-logo" class="houser-logo" />
            <h1 class="display-1">Houser</h1>
            <p class="pt-2">The Tinder of housing</p>
            {/* <form action="/action_page.php">
              <div class="input-group mb-4 border rounded-pill p-1">
                <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon3" class="form-control bg-none border-0" />
                <div class="input-group-append border-0">
                  <button id="button-addon3" type="button" class="btn btn-link text-success"><i class="fa fa-search"></i></button>
                </div>
              </div>
            </form> */}
          </div>
        </header>
      </header>
    </div>
  );
}

export default App;
