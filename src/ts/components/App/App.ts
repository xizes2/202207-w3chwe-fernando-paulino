import Component from "../Component/Component";
import { Component as IComponent, Pokemons } from "../../types/interfaces.js";

class App extends Component implements IComponent {
  private pokemonList: Pokemons;
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
  }
}

export default App;
