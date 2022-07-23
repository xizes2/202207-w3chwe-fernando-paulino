import { Component as IComponent, Pokemons } from "../types/interfaces.js";

class PokemonList implements IComponent {
  constructor(parent: HTMLElement, private pokemonList: Pokemons) {
    super(parent, "pokemon-list", "ul");
  }

  element: HTMLElement;
}

export default PokemonList;
