import React, { Component } from 'react'
import FormPersonalDetails from './FormPersonalDetails';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export class UserForm extends Component {
    state = {
        step: 1,
        outOrIn: '',
        income: '',
        city: '',
        proximity: '',
    }

    //Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Go to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    render() {
        const { step } = this.state;
        const { outOrIn, income, city, proximity } = this.state;
        const values = { outOrIn, income, city, proximity }

        switch (step) {
            case 1:
                return (
                    < FormPersonalDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return <h1>Confirm</h1>
            case 3:
                return <h1>Success</h1>
            default:
                return <h1>Error</h1>;
        }

        return (
            <div>

            </div >
        )
    }
}

export default UserForm
