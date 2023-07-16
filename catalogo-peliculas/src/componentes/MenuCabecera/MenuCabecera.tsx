import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Vista } from '../../comun/tipos';

type CabeceraProps = {
    cambiarVista: (vista: Vista) => void
}

function MenuCabecera(props: CabeceraProps) {
    const { cambiarVista } = props;
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>Catálogo de Películas</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => cambiarVista(Vista.Lista)}>Lista Completa</Nav.Link>
                    <Nav.Link onClick={() => cambiarVista(Vista.Favoritos)}>Mis Favoritas</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MenuCabecera;