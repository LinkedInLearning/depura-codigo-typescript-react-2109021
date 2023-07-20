import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Genero, Pelicula } from '../../comun/tipos';
import PeliculaUI from './PeliculaUI';

const peliculaMock: Pelicula = {
    id: '0',
    titulo: 'título prueba',
    descripcion: 'descripción prueba',
    idioma: 'idioma prueba',
    trama: 'trama prueba',
    pais: 'país prueba',
    generos: [Genero.Accion, Genero.Aventura],
    anio_estreno: 2000,
    poster: 'url',
    clasificacion: 'PG',
    esFavorito: false,
};

const cambiarFavoritoMock = jest.fn();

describe('PeliculaUI', ()=>{
    it('debe mostrar los datos de la película que se pasa como parámetro', () => {
        render(<PeliculaUI {...peliculaMock } cambiarFavorito={cambiarFavoritoMock} />);
        screen.getByText(peliculaMock.titulo);
        screen.getByText(peliculaMock.descripcion);
        screen.getByText(`Idioma: ${peliculaMock.idioma}`);
        screen.getByText(peliculaMock.trama);
        screen.getByText(`País: ${peliculaMock.pais}`);
        screen.getByText(`Año de Estreno: ${peliculaMock.anio_estreno}`);
        screen.getByText(`Clasificación: ${peliculaMock.clasificacion}`);
    });

    it('debe llamar método que se pasa como parámetro al hacer click en botón', () => {
        render(<PeliculaUI {...peliculaMock } cambiarFavorito={cambiarFavoritoMock} />);
        const boton = screen.getByRole('button');
        fireEvent.click(boton);
        expect(cambiarFavoritoMock).toHaveBeenCalledWith({...peliculaMock, cambiarFavorito: cambiarFavoritoMock}, true);
    });
});