import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function MenuCabecera() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Catálogo de Películas</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#home">Lista Completa</Nav.Link>
            <Nav.Link href="#home">Mis Favoritas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default MenuCabecera;