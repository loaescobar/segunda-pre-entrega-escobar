import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from './CardWidget';
import React from 'react';

const NavBar = () => {
  return (
    <div>
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#logo">DISCORDIA indumentaria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#info">Sobre Nosotras</Nav.Link>
            <Nav.Link href="#CardWidget"><CardWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar