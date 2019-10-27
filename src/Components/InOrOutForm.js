import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
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
                        <h1 className="text-center mt-4 text-dark"><strong>Would you like to live in the city?</strong></h1>
                        <h6 className="text-center mt-4 text-dark">Location</h6>
                        <form>
                            <div className="dropdown text-center mt-4">
                                <button className="btn btn-danger dropdown-toggle stretch-btn p-3" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                    Select location </button>
                                <div className="dropdown-menu" >
                                    <a className="dropdown-item" href="/ownership">Doesn't matter</a>
                                    <a className="dropdown-item" href="/ownership">Absolutely! I love the city!</a>
                                    <a className="dropdown-item" href="/ownership">I'd rather the outskirts. Less noise!</a>
                                </div>
                            </div>
                            <div className="text-center mt-5 align-bottom">
                                <a className="btn btn-info p-2 mt-5" href="/amenities">Back</a>
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
