describe("navigation example", () => {
  const urlPageTest = "https://loop-pod.vercel.app/";
  it("Navigation test", () => {
    // Home
    cy.visit(urlPageTest);
    cy.url().should("contain", "vercel");
    cy.get('[href="/podcast/1"]').click();

    // Go back
    cy.go("back");
    cy.url().should("contain", "vercel");

    // Go forward
    cy.go("forward");
    cy.url().should("contain", "/podcast/1");

    // Go Back Home with index
    cy.go(-1);
    cy.url().should("contain", "vercel");

    // Go forward with index
    cy.go(1);
    cy.url().should("contain", "/podcast/1");

    // Reload page
    cy.reload();
    cy.url().should("contain", "/podcast/1");
  });
});
