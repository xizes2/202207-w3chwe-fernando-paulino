export interface Component {
  element: HTMLElement;
}

export interface Pokemon {
  url: string;
  id: number;
  name: string;
}

export type PokemonList = Pokemon[];
