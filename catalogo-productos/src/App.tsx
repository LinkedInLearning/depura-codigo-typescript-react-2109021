import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Pelicula } from './comun/tipos';
import PeliculaUI from './componentes/PeliculaUI/PeliculaUI';
import usePeliculas from './api/peliculasHook';
import MenuCabecera from './componentes/MenuCabecera/MenuCabecera';

function App() {
  const peliculas = usePeliculas()
  return (
    <Container>
      <MenuCabecera />
      <Row xs={1}>
        {peliculas && peliculas.map((articulo: Pelicula) => <Col xs={12} key={articulo.id}><PeliculaUI {...articulo} /></Col>)}
      </Row>
    </Container>
  );
}

export default App;
