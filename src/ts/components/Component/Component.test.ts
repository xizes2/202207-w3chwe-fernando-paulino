import Component from "./Component.js";

describe("Given a Component component", () => {
  describe("When instantiated with main as parent", () => {
    test("Then it should show a div inside the main", () => {
      const container = document.createElement("main");
      const tag = "div";

      new Component(container, tag);

      expect(container.querySelector(tag)).not.toBeNull();
    });
  });
});
