describe("Home view page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display a title", () => {
    cy.get('[data-cy="logo"]').contains("The Office-ionado");
  });

  it("should display a welcome message with a button titled START HERE to route to quotes page", () => {
    cy.get('[data-cy="app-button"]')
      .contains("Start Here")
      .click()
      .url()
      .should("include", "/quotes");
  });
});
