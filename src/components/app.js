import React from 'react';
import { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header><Navbar.Brand><a href="#">GAMELANG</a></Navbar.Brand></Navbar.Header>
          <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}
