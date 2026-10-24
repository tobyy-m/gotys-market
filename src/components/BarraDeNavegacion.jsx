import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import ModalCarrito from './ModalCarrito';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { CarritoContext, totalItems } from "../context/CarritoContext";

function BarraDeNavegacion() {
  const { carrito } = useContext(CarritoContext);
  const [mostrarModal, setMostrarModal] = useState(false);
  const total = totalItems(carrito);

  return (
    <>
      <Navbar expand="lg" variant="dark" className="nav-bar">
        <Container>
          <Navbar.Brand as={NavLink} to={"/"}>
            <img src="/img/logo.webp" alt="Logo de Goty's Market" height="30" className="d-inline-block align-top me-2" />
            Goty's Market
          </Navbar.Brand>

          <Nav className="ms-auto order-lg-last flex-row">
              <Nav.Link as="button" type="button" onClick={() => setMostrarModal(true)}>
                {total > 0 ? <i className="bi bi-minecart-loaded" /> : <i className="bi bi-minecart" />}
                <Badge bg="none" className="badge">{total}</Badge>
              </Nav.Link>
          </Nav>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className= "ms-2" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
              <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
              <Nav.Link as={NavLink} to="/nosotros">Sobre nosotros</Nav.Link>
            </Nav>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalCarrito mostrar={mostrarModal} cerrarModal={() => setMostrarModal(false)} />
    </>
  );
}

export default BarraDeNavegacion
