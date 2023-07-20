import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Vista, Pelicula } from './comun/tipos';
import PeliculaUI from './componentes/PeliculaUI/PeliculaUI';
import usePeliculas from './hooks/peliculasHook';
import MenuCabecera from './componentes/MenuCabecera/MenuCabecera';

function App() {
  const { peliculas, cambiarFavorito } = usePeliculas();
  const [vistaActual, setVista] = useState<Vista>(Vista.Lista);

  return (
    <Container>
      <MenuCabecera cambiarVista={setVista} />
      {vistaActual === Vista.Favoritos ? <h4>Mis Películas Favoritas</h4> : null}
      <Row xs={1}>
        {vistaActual === Vista.Lista && peliculas && peliculas.map((pelicula: Pelicula) => <Col xs={12} key={pelicula.id}><PeliculaUI {...pelicula} cambiarFavorito={cambiarFavorito} /></Col>)}
        {vistaActual === Vista.Favoritos && peliculas && peliculas.map((pelicula: Pelicula) => <Col xs={12} key={pelicula.id}><PeliculaUI {...pelicula} cambiarFavorito={cambiarFavorito} /></Col>)}
      </Row>
    </Container>
  );
}

export default App;
