context("i18n", () => {
  describe("Multilingual support", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("has support for english, french and arabic languages", () => {
      cy.get("select[name='lang']")
        .as("langSelect")
        .children()
        .should("have.length", 3);
      cy.get("@langSelect").should(() => {
        expect(localStorage.getItem("i18nextLng")).not.to.be.null;
      });

      cy.get("@langSelect")
        .select("fr")
        .should(() => {
          expect(localStorage.getItem("i18nextLng")).to.equal("fr");
        });

      cy.get("@langSelect")
        .select("ar")
        .should(() => {
          expect(localStorage.getItem("i18nextLng")).to.equal("ar");
        });
    });
  });
});
