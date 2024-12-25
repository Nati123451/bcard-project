import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <BootstrapNavbar bg={darkMode ? "dark" : "primary"} variant={darkMode ? "dark" : "light"} expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" style={{ color: '#fff' }}>BCard</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about" style={{ color: '#fff' }}>ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/profile" style={{ color: '#fff' }}>PROFILE</Nav.Link>
 
            <Nav.Link as={Link} to="/my-cards" style={{ color: '#fff' }}>CARDS PAGE</Nav.Link>
            <Nav.Link as={Link} to="/register" style={{ color: '#fff' }}>REGISTER</Nav.Link>
            <Nav.Link as={Link} to="/sandbox" style={{ color: '#fff' }}>SANDBOX</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: '#fff' }}>CONTACT ME</Nav.Link>
          </Nav>
          <Form className="d-flex me-3">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Button onClick={toggleDarkMode} className="me-3" variant="light">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
          <Nav.Link as={Link} to="/login">
            <Button className="ms-3" variant="outline-light">Login</Button>
          </Nav.Link>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;



