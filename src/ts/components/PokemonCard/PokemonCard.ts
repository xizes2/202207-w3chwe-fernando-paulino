import Component from "../Component/Component.js";
import { Component as IComponent } from "../../types/interfaces.js";

class PokemonCard extends Component implements IComponent {
  constructor(private parent: HTMLElement, private url: string) {
    super(parent, "pokemon-monster", "li");

    this.render();
  }

  render() {
    (async () => {
      const response = await fetch(this.url);
      const pokemonUnitData = await response.json();
      const {
        forms,
        sprites: {
          other: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            dream_world: { front_default },
          },
        },
      } = pokemonUnitData;

      const pokemonAttributes = {
        name: forms[0].name,
        img: front_default,
      };

      const html = `
        <h3>${pokemonAttributes.name}</h3>
        <img src="${pokemonAttributes.img}" alt="Pokemon ${pokemonAttributes.name} image">`;

      this.element.innerHTML = html;
      this.parent.appendChild(this.element);
    })();
  }
}

export default PokemonCard;
