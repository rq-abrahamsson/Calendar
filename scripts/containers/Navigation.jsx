import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

const Navigation = () => {

  return (
  <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            CALENDAR APP
          </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to={{ pathname:'/test'}}>
          <NavItem eventKey={1}>Test</NavItem>
        </LinkContainer>
        <LinkContainer to={{ pathname:'/calendar' }}>
          <NavItem> Calendar</NavItem>
        </LinkContainer>
        <LinkContainer to={{ pathname:'/login'}}>
          <NavItem> Login </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
