const requiredExample = require("../../fixtures/example.json");

describe("fixture data driven", () => {
  // Acceso directo con .fixture
  it.only("Fixture usando .fixture metodo", () => {
    cy.visit("https://example.cypress.io/todo");

    cy.fixture("example").then((data) => {
      cy.get("[data-test=new-todo]").type(`${data.email}{enter}`);
      cy.get(".todo-list li")
        .should("have.length", 3)
        .last()
        .should("have.text", data.email);
    });
  });

  // usando el import required example
  it.only("Fixture usando Imports", () => {
    cy.visit("https://example.cypress.io/todo");

    cy.get("[data-test=new-todo]").type(`${requiredExample.email}{enter}`);
    cy.get(".todo-list li")
      .should("have.length", 3)
      .last()
      .should("have.text", requiredExample.email);
  });
});
