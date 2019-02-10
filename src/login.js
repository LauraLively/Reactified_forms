import React from 'react';
import './index.css';
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom'

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 1px solid teal;
font-size: 1em;
color: teal;
margin: 0 1em;
padding: 0.25em 1em;
`
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
      this.props.history.push("./welcome");
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <h2>Please Login!</h2>
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
          <Link to="/forgot"><Button>Forgot password?</Button></Link>

        </form>
      );
    }
  }
  
  export default withRouter(Login);