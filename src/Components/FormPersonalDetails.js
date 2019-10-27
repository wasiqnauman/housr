import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        const { values, handleChange } = this.props;

        return (

            <MuiThemeProvider>                  <React.Fragment>
                {/* <AppBar title="Enter User Details" /> */}
                <h1 className="text-center mt-5">Hi</h1>
                <div className="form-container">
                    <TextField
                        hintText="Enter your first name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}

                    />
                </div>
            </React.Fragment>
                <RaisedButton
                    label="Home"
                    primary={true}
                    style={styles.button}
                />
                <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                />
            </MuiThemeProvider >
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails
