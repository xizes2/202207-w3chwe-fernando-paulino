export interface Component {
  element: HTMLElement;

  render?: () => void;
}

export interface PokemonsContent {
  count: number;
  next: string;
  previous: null | string;
  results: {
    url: string;
    name: string;
  }[];
}

export interface PokemonAttributes {
  name: string;
  img: string;
}

export type Pokemons = PokemonsContent[];

export type PurePokemons = PokemonAttributes[];
