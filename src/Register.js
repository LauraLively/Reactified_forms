import React from 'react';
import './index.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            phoneNumber: '',
            password: '',
            passwordConfirmation: '',
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
            <input type="text" name="firstName" value={this.state.firstName} 
            onChange={this.handleChange} placeholder="First Name"/>
          </label>
          <br/>
          <label>
            <input type="text" name="lastName" value={this.state.lastName} 
            onChange={this.handleChange} placeholder="Last Name" />
          </label>
          <br/>
          <label>
            <input type="email" name="email" value={this.state.email} 
            onChange={this.handleChange} placeholder="Email"/>
          </label>
          <br/>
          <label>
            <input type="tel" name="phoneNumber" value={this.state.phoneNumber} 
            onChange={this.handleChange} placeholder="Phone Number"/>
          </label>
          <br/>
          <label>
            <input type="password" name="password" value={this.state.password} 
            onChange={this.handleChange} placeholder="Password"/>
          </label>
          <br/>
          <label>
            <input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} 
            onChange={this.handleChange} placeholder="Confirm Password"/>
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  export default Register;