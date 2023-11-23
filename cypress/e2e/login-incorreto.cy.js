describe("Página de login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
    cy.intercept("POST", "http://localhost:3000/user/login", {
      statusCode: 400,
    }).as("stubPost");
  });

  it("Verificar mensagem de campos obrigatórios", () => {
    cy.contains("User name is required!").should("be.visible");
    cy.contains("Password is required!").should("be.visible");
  });
  it("Deve falhar mesmo que os campos sejam preenchidos corretamente", () => {
    cy.login("victorl", "victor123");
    cy.wait("@stubPost");
  });
});
