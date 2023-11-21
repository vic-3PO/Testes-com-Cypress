describe("Página de login", () => {
  it("Preencher os campos do formulário corretamente e realizar login", () => {
    cy.visit("http://localhost:4200/#/home");
    cy.get('[data-test="loginUserName"]').type("victorl");
    cy.get('[data-test="loginPassword"]').type("victor123");
    cy.contains("button", "login").click();
  });
});
