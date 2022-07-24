import Component from "../Component/Component.js";
import {
  Component as IComponent,
  PokemonsContent,
} from "../../types/interfaces.js";
import PokemonCard from "../PokemonCard/PokemonCard.js";

class PokemonList extends Component implements IComponent {
  constructor(private parent: HTMLElement, private url: string) {
    super(parent, "pokemon-list", "ul");

    this.render();
  }

  render = async () => {
    const response = await fetch(this.url);
    const data: PokemonsContent = await response.json();

    data.results.forEach((result) => {
      new PokemonCard(this.parent, result.url);
    });
  };
}

export default PokemonList;
