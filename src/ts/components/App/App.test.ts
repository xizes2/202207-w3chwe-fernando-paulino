import App from "./App";

describe("Given a App component", () => {
  describe("When instantiated with a 'div' tag", () => {
    test("Then it should show a level 1 heading with the text 'Pokemon'", () => {
      const container = document.createElement("div");
      const title = document.createElement("h1");
      title.textContent = "Pokemons";

      const app = new App(container);
      const heading = app.element.querySelector("h1").textContent;

      expect(heading).toBe(title.textContent);
    });
  });
});
