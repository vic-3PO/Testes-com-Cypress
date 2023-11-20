describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:4200/#/home");
    cy.contains("a", "Register now").click();
    cy.get('[formcontrolname="email"]').type("victor@email.com.br");
    cy.get('[formcontrolname="fullName"]').type("Victor Lopes");
    cy.get('[formcontrolname="userName"]').type("victorl");
    cy.get('[formcontrolname="password"]').type("victor123");
    cy.contains("button", "Register").click();
  });
});
