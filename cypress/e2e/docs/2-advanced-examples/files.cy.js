/// <reference types="cypress" />

/// JSON fixture file can be loaded directly using
// the built-in JavaScript bundler
const requiredExample = require("../../../fixtures/example.json");

context("Files", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/files");

    // carga el archivo de fijación example.json y lo almacena
    // en el objeto de contexto de prueba
    cy.fixture("example.json").as("example");
  });

  it("cy.fixture() - load a fixture", () => {
    // https://on.cypress.io/fixture

    // En lugar de escribir una respuesta en línea, puedes
    // usa el contenido de un archivo fijo.

    // cuando la aplicación realiza una solicitud Ajax que coincide con "GET **/comments/*"
    // Cypress lo interceptará y responderá con el objeto en el dispositivo `example.json`
    cy.intercept("GET", "**/comments/*", { fixture: "example.json" }).as(
      "getComment"
    );

    // tenemos un código que recibe un comentario cuando
    // se hace clic en el botón en scripts.js
    cy.get(".fixture-btn").click();

    cy.wait("@getComment")
      .its("response.body")
      .should("have.property", "name")
      .and("include", "Using fixtures to represent data");
  });

  it("cy.fixture() or require - load a fixture", function () {
    // estamos dentro de la "función() {...}"
    // callback y puedo usar el objeto de contexto de prueba "this"
    // "this.ejemplo" se ha cargado en el callback del hook "beforeEach"
    expect(this.example, "fixture in the test context").to.deep.equal(
      requiredExample
    );

    // or use "cy.wrap" and "should('deep.equal', ...)" assertion
    // https://docs.cypress.io/api/commands/wrap/
    cy.wrap(this.example).should("deep.equal", requiredExample);
  });

  it("cy.readFile() - read file contents", () => {
    // https://on.cypress.io/readfile

    // You can read a file and yield its contents
    // The filePath is relative to your project's root.
    cy.readFile(Cypress.config("configFile")).then((config) => {
      expect(config).to.be.an("string");
    });
  });

  it("cy.writeFile() - write to a file", () => {
    // https://on.cypress.io/writefile

    // You can write to a file

    // Use a response from a request to automatically
    // generate a fixture file for use later
    cy.request("https://jsonplaceholder.cypress.io/users").then((response) => {
      cy.writeFile("cypress/fixtures/users.json", response.body);
    });

    cy.fixture("users").should((users) => {
      expect(users[0].name).to.exist;
    });

    // JavaScript arrays and objects are stringified
    // and formatted into text.
    cy.writeFile("cypress/fixtures/profile.json", {
      id: 8739,
      name: "Jane",
      email: "jane@example.com",
    });

    cy.fixture("profile").should((profile) => {
      expect(profile.name).to.eq("Jane");
    });
  });
});
