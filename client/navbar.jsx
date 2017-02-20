import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

//Create very basic navbar using bootstrap for aesthectics
const navbar = () => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">ScoreKeeper</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </Navbar>
  )
}

export default navbar;
