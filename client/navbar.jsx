import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

const navbar = () => {
  return (
    <Navbar inverse collapseOnSelect>
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
