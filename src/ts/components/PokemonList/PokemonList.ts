import Component from "../Component/Component.js";
import { Component as IComponent, Pokemons } from "../../types/interfaces.js";

const urlPrePokemonList =
  "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";

class PokemonList extends Component implements IComponent {
  constructor(parent: HTMLElement, private pokemonListUrls: Pokemons) {
    super(parent, "pokemon-list", "ul");

    (async () => {
      const response = await fetch(urlPrePokemonList);
      const pokemonList = await response.json();
      this.pokemonListUrls = await pokemonList.results;

      this.render();
    })();
  }

  render() {
    this.element.innerHTML = "";
    this.pokemonListUrls.forEach(() => {});
  }
}

export default PokemonList;
