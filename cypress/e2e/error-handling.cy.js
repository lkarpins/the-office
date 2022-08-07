describe("Error View Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://the-office-api-11.herokuapp.com/", {
      fixture: "quotes",
    });
    cy.visit("http://localhost:3000/");
  });

  it("Should display error message when there is a server error", () => {
    cy.intercept("GET", "https://the-office-api-11.herokuapp.com/", {
      forceNetworkError: true,
    })
      .as("getNetworkFailure")
      .visit("http://localhost:3000")
      .wait("@getNetworkFailure")
      .dataCy("error")
      .contains("Uh oh! Something went wrong, please try again!");
  });

  it("Should display error message when there is a broken URL", () => {
    cy.get('[data-cy="app-button"]')
      .contains("Start Here")
      .click()
      .visit("http://localhost:3000/quotess")
      .dataCy("error")
      .contains("Uh oh! Something went wrong, please try again!");
  });
});
