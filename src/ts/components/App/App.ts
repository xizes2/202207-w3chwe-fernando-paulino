import Component from "../Component/Component.js";
import { Component as IComponent, Pokemons } from "../../types/interfaces.js";

const url = `https://pokeapi.co/api/v2/ability/?limit=20&offset=20`;

class App extends Component implements IComponent {
  private pokemonList: Pokemons;
  constructor(parent: HTMLElement) {
    super(parent, "app");
    (async () => {
      const response = await fetch(url);
      this.pokemonList = await response.json();

      this.render();
    })();
  }

  render(): void {
    const html = `
    <h1 class="title">Pokemons</h1>
    <main class="main-content">
      <h2 class="section-title">Pokemon list</h2>
    </main>`;
    this.element.innerHTML = html;
  }
}

export default App;
