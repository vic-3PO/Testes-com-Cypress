describe("Página de cadastro", () => {
  it("Preencher os campos do formulário corretamente para cadastrar um novo usuário", () => {
    cy.visit("http://localhost:4200/#/home");
    cy.contains("a", "Register now").click();
    cy.get('[data-test="email"]').type("victor@email.com.br");
    cy.get('[data-test="fullName"]').type("Victor Lopes");
    cy.get('[data-test="registerUserName"]').type("victorl");
    cy.get('[data-test="registerPassword"]').type("victor123");
    cy.contains("button", "Register").click();
  });
});
