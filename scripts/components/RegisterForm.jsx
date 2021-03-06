import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';



class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    if (e.target.id==='formName') {
      this.setState({
        username: e.target.value
      });
    }
    else if (e.target.id==='formEmail') {
      this.setState({
        email: e.target.value
      });
    }
    else if(e.target.id==='formPassword') {
      this.setState({
        password: e.target.value
      });
    }
    else if(e.target.id==='formPassword2') {
      this.setState({
        password2: e.target.value
      });
    }
  }

  render() {
    return (
       <div>
        <Form>
          <FormGroup controlId="formName">
            <ControlLabel>Username</ControlLabel>
            {' '}
           <FormControl type="text" placeholder="Username" onChange={this.handleChange} />
          </FormGroup>
             {' '}
          <FormGroup controlId="formEmail">
            <ControlLabel>Email</ControlLabel>
            {' '}
            <FormControl type="email" placeholder="Email address" onChange={this.handleChange}/>
          </FormGroup>
          {' '}
          <FormGroup controlId="formPassword">
            <ControlLabel>Password</ControlLabel>
            {' '}
            <FormControl type="password" placeholder="Password" onChange={this.handleChange} />
          </FormGroup>
          {' '}
          <FormGroup controlId="formPassword2">
            <ControlLabel>Password2</ControlLabel>
            {' '}
            <FormControl type="password" placeholder="Password" onChange={this.handleChange} />
          </FormGroup>
          {' '}
          <Button onClick={this.props.handleSubmit.bind(this, this.state.username, this.state.email, this.state.password, this.state.password2)}>
            Register account
          </Button>
        </Form>
      </div>
    );
  }
}


export default RegisterForm;
