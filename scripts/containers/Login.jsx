import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import RegisterForm from '../components/RegisterForm.jsx';
import LoginForm from '../components/LoginForm.jsx';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      register: false
    };
    this.setRegister = this.setRegister.bind(this);
    this.getRegisterForm = this.getRegisterForm.bind(this);
    this.getLoginForm = this.getLoginForm.bind(this);
  }

  setRegister(reg) {
    this.setState({
      register: reg
    });
  }

  getRegisterForm() {
    return(
      <RegisterForm handleSubmit={this.handleRegister} />
    );
  }

  handleRegister(username, email, password, password2) {
    console.log(username + " " + email + " " + password + " " + password2);
  }

  handleLogin(username, password) {
    console.log(username + " " + password);
  }
  
  getLoginForm() {
    return(
      <div>
      <LoginForm handleSubmit={this.handleLogin} />
        <Button onClick={() => this.setRegister(true)}>
          Register account
        </Button>
      </div>
    );
  }

/*    return(
      <div>
        <Form>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Username</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="" />
          </FormGroup>
          {' '}
          <FormGroup controlId="formInlineEmail">
            <ControlLabel>Email</ControlLabel>
            {' '}
            <FormControl type="email" placeholder="" />
          </FormGroup>
          {' '}
          <Button type="submit">
            Login
          </Button>
        </Form>
        <Button onClick={() => this.setRegister(true)}>
          Register account
        </Button>
      </div>
    );*/
 

  render() {
    return(
      <div>
        {this.state.register ? this.getRegisterForm() : this.getLoginForm()}
      </div>
    );
  }
}


export default Login;
