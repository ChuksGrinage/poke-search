
export interface PokemonCard {
    name: string,
    url: string
}

export interface Pokemon {
    id: number;
    name: string;
    type: string;
    moves: []
}