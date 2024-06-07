/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("test count vite app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("click count button state", () => {
    // take inital snapshot
    cy.screenshot("before");

    cy.get('[data-cy="counter-button"]')
      .should("have.text", "count is 0")
      .click();
    cy.get('[data-cy="counter-button"]').should("have.text", "count is 1");
    // take final snapshot
    cy.wait(1000);
    cy.screenshot("after");
  });
});
