import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Pelicula } from '../../comun/tipos';

type PropsPeliculaUI = Pelicula;

function PeliculaUI(props: PropsPeliculaUI) {
    const { id, titulo, descripcion, trama, idioma, pais, generos, anio_estreno, clasificacion } = props;
    return (
        <Card id={id} style={{ width: '100%', marginTop: '10px' }}>
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Idioma: {idioma}</ListGroup.Item>
                <ListGroup.Item>País: {pais}</ListGroup.Item>
                <ListGroup.Item>Género: {generos.join(', ')}</ListGroup.Item>
                <ListGroup.Item>Año de Estreno: {anio_estreno}</ListGroup.Item>
                <ListGroup.Item>Clasificación: {clasificacion}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Title>Trama</Card.Title>
                <Card.Text>{trama}</Card.Text>
                <Button variant="primary">Agregar a Favoritos</Button>
            </Card.Body>
        </Card>
    )
}

export default PeliculaUI;