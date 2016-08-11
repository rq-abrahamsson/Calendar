import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import LinkContainer from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Navigation = () => {

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          Calendar app
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1}>Link</NavItem>
        <NavItem eventKey={2}>Link2</NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
