import { useEffect, useState } from "react";
import { Pelicula, esPelicula } from "../comun/tipos";

const validarDatosJSON = (datos: unknown): Pelicula[] | undefined => {
    if(!Array.isArray(datos)){
        return undefined;
    }
    const peliculas: Pelicula[] = [];
    for (const dato of datos){
        dato.generos = dato.generos.split(',').map((genero: string) => genero.trim());
        if(esPelicula(dato)){
            peliculas.push(dato as Pelicula);
        }
    }

    return peliculas;
}

const usePeliculas = () => {

    const [peliculas, setPeliculas] = useState<Pelicula[] | undefined>(undefined);

    const obtenerDatos = () => {
        fetch('./peliculas.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        ).then((respuesta) => {
            return respuesta.json();
        }).then((datosPeliculas) => {
            setPeliculas(validarDatosJSON(datosPeliculas.peliculas));
        });
    }

    useEffect(() => {
        obtenerDatos()
    }, []);

    return peliculas;
};

export default usePeliculas;