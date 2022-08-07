describe("Home view page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://the-office-api-11.herokuapp.com/", {
      fixture: "quotes",
    });
    cy.visit("http://localhost:3000/");
  });

  it("should display a title", () => {
    cy.dataCy("logo").contains("The Office-ionado");
  });

  it("should display a welcome message with a button titled START HERE to route to quotes page", () => {
    cy.dataCy("app-button")
      .contains("Start Here")
      .click()
      .url()
      .should("include", "/quotes");
  });
});
