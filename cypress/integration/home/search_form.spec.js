context("Home", () => {
  describe("Search Form (Home)", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("disables button for empty input", () => {
      cy.get("form button[type='submit']").should("be.disabled");
    });

    it("enables button for valid input", () => {
      // Button should be disabled initially
      cy.get("form button[type='submit']").should("be.disabled");
      // Type into input
      cy.get("form input[name='query']").type("computer");
      // Button should be enabled with valid input
      cy.get("form button[type='submit']").should("be.enabled");
    });

    it("returns search results from query", () => {
      // Button should be disabled initially
      cy.get("form button[type='submit']").as("submitButton");
      cy.get("@submitButton").should("be.disabled");
      // Type into input
      cy.get("form input[name='query']").type("computer");
      // Button should be enabled with valid input and add spinner when loading
      cy.get("@submitButton")
        .should("be.enabled")
        .click();

      cy.url().should("include", "/search");

      cy.get("[data-cy='facts']")
        .children()
        .should("have.length.gte", 1);
    });
  });
});
