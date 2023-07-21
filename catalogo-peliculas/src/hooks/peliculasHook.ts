import { useCallback, useEffect, useMemo, useState } from "react";
import { Pelicula } from "../comun/tipos";

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

    const favoritos = useMemo(() => peliculas?.filter(pelicula => pelicula.esFavorito), []);

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
            setPeliculas(datosPeliculas.peliculas);
        });
    }

    useEffect(() => {
        obtenerDatos()
    }, []);

    return { peliculas, favoritos, cambiarFavorito };
};

export default usePeliculas;