import Cadastro from "../support/pages/cadastro/pagina-cadastro";

describe("Página de cadastro", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/");
  });

  it("Preencher os campos do formulário corretamente para cadastrar um novo usuário, com base em organização de testes", () => {
    Cadastro.acessarPaginaDeCadastro();
    Cadastro.preencherFormulario();
    Cadastro.submeterCadastro();
  });
});
