import React, { Component } from 'react';
import './Validator.css';

class Validator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            valid: true
        };
    }
    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.password === this.state.passwordConfirm) {
            alert('Password is a match');
        } else {
            alert('Password in not a match');
        }
    };

    render() {
        return (
            <div className="form">
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Username"
                        id="username"
                    />
                    <label htmlFor="username">Username</label>

                    <input
                        onChange={this.handleChange}
                        type="password"
                        placeholder="Password"
                        id="password"
                    />
                    <label htmlFor="password">Password</label>

                    <input
                        onChange={this.handleChange}
                        type="password"
                        placeholder="Confirm password"
                        id="passwordConfirm"
                    />
                    <label htmlFor="passwordConfirm">Confirm password</label>

                    <button type="submit">Sign Up</button>
                    <p>Passwords must match.</p>
                </form>
            </div>
        );
    }
}

export default Validator;
