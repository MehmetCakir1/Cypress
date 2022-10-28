import Header from "../../src/components/Header";
import React from "react";

describe("Navbar Test", () => {
  beforeEach(() => {
    cy.mount(<Header />);
  });
  it("input's initial value eqauls to '' ", () => {
    cy.get("input").should("have.value", "");
  });
  it("testing if h1 contains input's value ", () => {
    cy.get("input").type("example").should("have.value", "example");
    cy.get(".search-term").should("contain", "example");
  });
  it("testing if input's value changes", () => {
    cy.get("input")
      .type("Joe")
      .should("have.value", "Joe")
      .clear()
      .type("Doe")
      .should("have.value", "Doe");
  });
});
