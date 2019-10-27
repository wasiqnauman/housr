import React, { Component } from 'react'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        income: '',
        city: '',
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
    // handleChange = input =>

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default UserForm
