import Component from "../Component/Component.js";
import { Component as IComponent } from "../../types/interfaces.js";
import PokemonList from "../PokemonList/PokemonList.js";

const url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`;

class App extends Component implements IComponent {
  constructor(parent: HTMLElement) {
    super(parent, "app");

    this.render();
  }

  render(): void {
    const html = `
    <h1 class="title">Pokemons</h1>
    <main class="main-content">
      <h2 class="section-title">Pokemon list</h2>
    </main>`;
    this.element.innerHTML = html;
    new PokemonList(this.element, url);
  }
}

export default App;
