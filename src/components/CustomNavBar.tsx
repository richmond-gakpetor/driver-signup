import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import "./CustomNavBar.css";

const CustomNavBar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Navbar bg="light" expand="lg" className="nav-wrapper">
      <Container>
        <Navbar.Brand href="/">
          <img src="./bolt.png" alt="bolt" width={50} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleNavbar} />
        <Navbar.Collapse id="navbar-nav" className={isCollapsed ? 'collapse' : ''}>
          <Nav className="me-auto">
            <Nav.Link className="cst-links space" href="/ride">Ride</Nav.Link>
            <Nav.Link className="cst-links space" href="/driver">Become a driver</Nav.Link>
            <Nav.Link className="cst-links space" href="/fleet">Fleet</Nav.Link>
            <Nav.Link className="cst-links space" href="/business">Business</Nav.Link>
            <Nav.Link className="cst-links space" href="/scooter">Scooters</Nav.Link>
            <Nav.Link className="cst-links space" href="/drive">Drive</Nav.Link>
            <Nav.Link className="cst-links space" href="/food">Food</Nav.Link>
            <Nav.Link className="cst-links space" href="/cities">Cities</Nav.Link>
          </Nav>
          <Button variant="" className="cst-btn">Log in</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
