import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Logo from '../media/houser-logo.png';
import MainPhoto from '../media/bedroom.jpg';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import SideBar from './Sidebar';
import Navbar from 'react-bootstrap/Navbar';
import H1P1 from '../media/House1/pic1.jpg';
import H1P2 from '../media/House1/pic2.jpg';
import H1P3 from '../media/House1/pic3.jpg';
import H2P1 from '../media/House2/pic1.jpg';
import H2P2 from '../media/House2/pic2.png';
import H2P3 from '../media/House2/pic3.jpg';
import H3P1 from '../media/House3/pic1.jpg';
import H3P2 from '../media/House3/pic2.jpg';
import H3P3 from '../media/House3/pic3.jpg';

function Favorites() {
    return (
        <div>
            <div className="App">
                <header className="App-header">

                    <header className="v-header container">
                        <div className="fullscreen-photo-wrap">
                            <img src={MainPhoto} alt="main-housing" className="main-img" />
                        </div>
                        <div className="header-overlay"></div>
                        <div className="header-content2">

                            <CardDeck>
                                <Card>
                                    <Card.Img variant="top" src={H1P1} />
                                    <Card.Body>
                                        <Card.Title className="text-dark">1720 Niskey Cove Rd SW, Atlanta, GA 30331</Card.Title>
                                        <Card.Text className="text-dark">
                                            <br />
                                            3 bd, 2 ba, 1,670 sqft
                                            <br />
                                            Est. payment: $1,086/mo

                                            </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-dark">
                                        <a href="/final-map"><button id="button-addon2" type="submit" className="btn btn-link text-dark"><i className="fa fa-globe-americas fa-2x"></i></button></a>
                                        <a href="https://www.kw.com/kw/" target="_blank"><button id="button-addon2" type="submit" className="btn btn-link text-dark"><i className="fa fa-phone fa-2x"></i></button></a>
                                    </Card.Footer>
                                </Card>

                                <Card>
                                    <Card.Img variant="top" src={H3P1} />
                                    <Card.Body>
                                        <Card.Title className="text-dark">2363 Cross St NW, Atlanta, GA 30318</Card.Title>
                                        <Card.Text className="text-dark">
                                            <br />
                                            3 bd, 3 ba, 1,280 sqft
                                            <br />
                                            Est. payment: $1,986/mo
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-dark">
                                        <a href="/final-map"><button id="button-addon2" type="submit" className="btn btn-link text-dark"><i className="fa fa-globe-americas fa-2x"></i></button></a>
                                        <a href="https://www.justinlandisgroup.com/" target="_blank"><button id="button-addon2" type="submit" className="btn btn-link text-dark"><i className="fa fa-phone fa-2x"></i></button></a>
                                    </Card.Footer>
                                </Card>
                            </CardDeck>
                            <div className="text-center align-bottom">
                                <a className="btn btn-danger p-2 mt-4" href="/house-viewing3">Back</a>
                            </div>
                        </div>

                    </header>
                </header>
            </div>
        </div>
    )
}

export default Favorites
