export interface Personaje {
    name: string,
    status: string,
    species: string,
    origin: Origin,
    image: string
}
export interface Origin {
    name: string,
    url: string
}

export interface PersonajeById {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    origen: Origin
}


export interface Locations {
    id: number,
    name: string,
    type: string,
    dimension: string,
    created: string
}


export interface Episodes {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: [],
    url: string
}
