context("Home", () => {
  describe("Feeling lucky", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("I'm feeling lucky retrieves random fact", () => {
      cy.get("[data-cy='search-actions'] a:nth-of-type(2)").click();
      cy.url().should("include", "/search");

      cy.get("[data-cy='facts-title']").should("contain.text", "facts");
      cy.get("[data-cy='facts']")
        .children()
        .should("have.length", 1);
    });
  });
});
