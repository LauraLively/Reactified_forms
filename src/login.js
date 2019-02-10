import React from 'react';
import './index.css';
import { Redirect } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(evt) {
      this.setState({[evt.target.name]: evt.target.value});
    }
  
    handleSubmit(event) {
      console.log(this.state);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="email" name="email" value={this.state.email} 
            onChange={this.handleChange} placeholder="Email"/>
          </label>
          <br/>
          <label>
            <input type="password" name="password" value={this.state.password} 
            onChange={this.handleChange} placeholder="Password"/>
          </label>
          <br/>
          <input type="submit" value="Submit" />
          <br/>
          <span className="forgot">Forgot password?</span>

        </form>
      );
    }
  }
  
  export default Login;