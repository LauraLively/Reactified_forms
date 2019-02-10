import React from 'react';
import './index.css';
import { withRouter } from 'react-router-dom'

class forgot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        this.props.history.push("./")
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <h3>Enter your email and you will receive a link to reset your password</h3>
                    <input type="email" name="email" value={this.state.email}
                        onChange={this.handleChange} placeholder="Email" />
                </label>
                <br />
                <input type="submit" name="submit" value="Submit" />
                <br />
            </form>
        );
    }
}

export default withRouter(forgot);