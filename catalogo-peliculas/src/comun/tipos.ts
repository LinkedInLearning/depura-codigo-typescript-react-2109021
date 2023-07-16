export enum Genero {
    Drama = 'Drama',
    Terror = 'Terror',
    Fantasia = 'Fantasía',
    Crimen = 'Crimen',
    Suspenso = 'Suspenso',
    Romance = 'Romance',
    CienciaFiccion = 'Ciencia Ficción',
    Comedia = 'Comedia',
    Aventura = 'Aventura',
    Belico = 'Bélico',
    Biografia = 'Biografía',
    Accion = 'Acción',
};

export const esGenero = (valor: string): valor is Genero => {
    return Object.values(Genero).includes(valor as Genero);
}

export const esString = (valor: unknown): valor is string => {
    return typeof valor === 'string';
}

export const esNumber = (valor: unknown): valor is number => {
    return typeof valor === 'number';
}

export type Pelicula = {
    id: string;
    titulo: string;
    descripcion: string;
    idioma: string;
    trama: string;
    pais: string;
    generos: Genero[];
    anio_estreno: number;
    poster: string;
    clasificacion: string;
    esFavorito: boolean;
};

export const esPelicula = (valor: unknown): valor is Pelicula => {
    if (valor === null || valor === undefined) {
        return false;
    }

    if (typeof valor === 'object') {
        const tieneTitulo = 'titulo' in valor && esString(valor['titulo']);
        const tieneDescripcion = 'descripcion' in valor && esString(valor['descripcion']);
        const tieneIdioma = 'idioma' in valor && esString(valor['idioma']);
        const tieneTrama = 'trama' in valor && esString(valor['trama']);
        const tienePais = 'pais' in valor && esString(valor['pais']);
        const tieneAnioEstreno = 'anio_estreno' in valor && esNumber(valor['anio_estreno']);
        const tieneClasificacion = 'clasificacion' in valor && esString(valor['clasificacion']);
        const generosValidos = 'generos' in valor && Array.isArray(valor.generos) && valor.generos.map(genero => esGenero(genero));
        const tieneGeneros = Array.isArray(generosValidos) && generosValidos.reduce((prev, curr) => prev && curr, true);

        return tieneTitulo && tieneDescripcion && tieneIdioma && tieneTrama && tienePais && tieneAnioEstreno && tieneClasificacion && tieneGeneros;
    }

    return false;
};

export enum Vista {
    Lista,
    Favoritos
}
