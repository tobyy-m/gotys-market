import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from 'react-router-dom';

function BarraDeNavegacion() {
  return (
    <Navbar expand="lg" variant="dark" className="nav-bar">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}>
          <img src="/img/logo.webp" alt="Logo de Goty's Market" height="30" className="d-inline-block align-top me-2" />
          Goty's Market
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros">Acerca de</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/carrito">
              <i className="bi bi-minecart" />
              <Badge bg="none" className="badge">0</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraDeNavegacion
