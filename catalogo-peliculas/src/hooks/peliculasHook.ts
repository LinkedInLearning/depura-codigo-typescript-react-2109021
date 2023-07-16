import { useCallback, useEffect, useMemo, useState } from "react";
import { Pelicula, esPelicula } from "../comun/tipos";

const validarDatosJSON = (datos: unknown): Pelicula[] | undefined => {
    if (!Array.isArray(datos)) {
        return undefined;
    }
    const peliculas: Pelicula[] = [];
    for (const dato of datos) {
        dato.generos = dato.generos.split(',').map((genero: string) => genero.trim());
        dato.esFavorito = false;
        if (esPelicula(dato)) {
            peliculas.push(dato as Pelicula);
        }
    }

    return peliculas;
}

const usePeliculas = () => {

    const [peliculas, setPeliculas] = useState<Pelicula[] | undefined>(undefined);

    const cambiarFavorito = useCallback((peliculaFavorita: Pelicula, esFavorito: boolean) => {
        setPeliculas(currPeliculas => currPeliculas?.map((pelicula) => {
            if(pelicula.titulo === peliculaFavorita.titulo){
                pelicula.esFavorito = esFavorito;
            }
            return pelicula;
        }))
    }, []);

    const favoritos = useMemo(() => peliculas?.filter(pelicula => pelicula.esFavorito), [peliculas]);

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

    return { peliculas, favoritos, cambiarFavorito };
};

export default usePeliculas;