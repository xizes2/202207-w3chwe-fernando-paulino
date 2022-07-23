export interface Component {
  element: HTMLElement;

  render?: () => void;
}

export interface Pokemon {
  url: string;
  name: string;
}

export type Pokemons = Pokemon[];
