const { assert } = require("chai");
const { expect } = require("chai");

describe.skip("example implicit", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });

  it("implicit assertion", () => {
    // Estilo Implicito usando verbos despues de seleccionar.
    cy.url().should("include", "example.cypress.io");
    cy.url().should("eq", "https://example.cypress.io/todo");
    cy.url().should("contain", "todo");

    // estilo implicito con cadenas en 1 solo selector (muy similar a jQuery)
    cy.url()
      .should("include", "example.cypress.io")
      .should("eq", "https://example.cypress.io/todo")
      .should("contain", "todo");

    // estilo implicito usando el and para acoplar la assertion es visto como un alias
    // (and is an alias of .should())
    cy.url()
      .should("include", "example.cypress.io")
      .and("eq", "https://example.cypress.io/todo")
      .and("contain", "todo");
  });

  /*
    Listado de verbos comunes:
    eq (igual - equals)
    contain (contiene)
    exist (existe)
    have.value (tiene un valor) ("have.value","2") (popular para inputs de texto)
  */
});

describe.skip("example explicito", () => {
  // cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
  // cy.get(".todo-list li").last().should("have.text", "Walk the dog");
  
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });

  // BDD (Beheviour Driven Design) usa el expect
  it("ver dos elementos de la lista estilo BDD", () => {
    let primerExpElemento = "Pay electric bill";
    let ultimoExpElemento = "Walk the dog";

    cy.get(".todo-list li").then((elemento) => {
      let primerElemento = elemento.first();
      let ultimoElemento = elemento.last();

      expect(primerElemento).to.equal(primerExpElemento);
      expect(ultimoElemento).to.equal(ultimoExpElemento);

      expect(primerElemento).to.not.equal(ultimoExpElemento);
      expect(ultimoElemento).to.not.equal(primerExpElemento);
    });
  });

  // TDD (Test Driven Development) usa el assert
  it("ver dos elementos de la lista estilo TDD", () => {
    let primerExpElemento = "Pay electric bill";
    let ultimoExpElemento = "Walk the dog";

    cy.get(".todo-list li").then((elemento) => {
      let primerElemento = elemento.first();
      let ultimoElemento = elemento.last();

      assert.equal(primerElemento, primerExpElemento);
      assert.equal(ultimoElemento, ultimoExpElemento);

      assert.notEqual(primerElemento, ultimoExpElemento);
      assert.notEqual(ultimoElemento, primerExpElemento);
    });
  });
});
