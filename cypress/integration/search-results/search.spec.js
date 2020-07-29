context("Search", () => {
  describe("Search Form ", () => {
    beforeEach(() => {
      cy.visit("/search");
    });

    it("shows a dropdown of categories", () => {
      // Should have categories of "all" and at least another category from API
      cy.get("form select[name='category']")
        .children()
        .should("have.length.gte", 2);
    });

    it("fetches a random fact", () => {
      cy.get("form button[type='submit']").click();
      cy.get("[data-cy='facts']")
        .children()
        .should("have.length", 1);
    });

    it("fetches a random fact in a category", () => {
      cy.get("form select[name='category']").select("dev");
      cy.get("form button[type='submit']").click();
      cy.get("[data-cy='facts']")
        .children()
        .should("have.length", 1);
      cy.get("[data-cy='category']").should("exist");
    });

    it("fetches a query across all categories", () => {
      cy.get("form input[name='query']").type("computer");
      cy.get("form select[name='category']").select("all");
      cy.get("form button[type='submit']").click();
      cy.get("[data-cy='facts']")
        .children()
        .should("have.length.gte", 1);
      cy.get("[data-cy='category']").should("not.exist");
    });
  });
});
