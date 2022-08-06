describe("Question View page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://the-office-api-11.herokuapp.com/", {
      fixture: "quotes",
    });
    cy.visit("http://localhost:3000/quotes");
  });

  it("should display all quote cards", () => {
    cy.dataCy("quote-card").should("have.length", 4);
  });

  it("should display input box to search quotes", () => {
    cy.dataCy("search").should("be.visible");
  });

  it("Should filter cards rendered by search", () => {
    cy.dataCy("search")
      .type("Everybody")
      .dataCy("quote-card")
      .should("have.length", 1);
  });

  it("should route you home when you click on the title of the page", () => {
    cy.dataCy("logo").click().url().should("include", "/");
  });
});
