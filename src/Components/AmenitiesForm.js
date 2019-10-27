import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Logo from '../media/houser-logo.png';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <div className="App-header">
                <MuiThemeProvider>                  <React.Fragment>
                    <img src={Logo} alt="houser-logo" className="houser-logo" />
                    {/* <AppBar title="Enter User Details" /> */}
                    <div className="form-container">
                        <h1 className="text-center mt-4 text-dark"><strong>How many bedrooms?</strong></h1>
                        <h6 className="text-center mt-4 text-dark">Rooms</h6>
                        <form>
                            <div className="dropdown text-center mt-4">
                                <button className="btn btn-danger dropdown-toggle stretch-btn-br p-3" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                    Select rooms  </button>
                                <div className="dropdown-menu" >
                                    <a className="dropdown-item" href="/outskirts"></a>
                                    <a className="dropdown-item" href="/outskirts">Any</a>
                                    <a className="dropdown-item" href="/outskirts">1+</a>
                                    <a className="dropdown-item" href="/outskirts">2+</a>
                                    <a className="dropdown-item" href="/outskirts">3+</a>
                                    <a className="dropdown-item" href="/outskirts">4+</a>
                                </div>
                            </div>
                            <div className="text-center mt-5 align-bottom">
                                <a className="btn btn-info p-2 mt-5" href="/income">Back</a>
                            </div>
                        </form>
                    </div>
                </React.Fragment>
                </MuiThemeProvider >
            </div>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails
