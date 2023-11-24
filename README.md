# Guia Rápido para Testes com Cypress

Este guia fornece instruções simplificadas para configurar e executar testes com Cypress no projeto AluraPic.

## **Configuração do Ambiente**

### 1. Instalação do Node

Instale o Node.js usando o NVM for Windows:

```bash
nvm install 16.13.1
nvm use 16.13.1
```

### 2. Instalação do Cypress

Instale o Cypress via npm:

```bash
npm install cypress --save-dev
```

Abra o Cypress:

```bash
npx cypress open
```

### 3. Instalação do AluraPic

1. Baixe o AluraPic e extraia.
2. No Prompt de Comando, navegue até o diretório `alurapic` e execute:

   ```bash
   cd .\alurapic\
   npm install
   npm start
   ```

Acesse http://localhost:4200/ para verificar o funcionamento do AluraPic.

### 4. Instalação do Visual Studio Code

Instale o Visual Studio Code a partir do [site oficial](https://code.visualstudio.com/download).

### 5. Configuração do Projeto no VS Code

Abra o Visual Studio Code, crie uma nova pasta para o projeto de testes e siga os passos indicados.

## **Cenário de Teste - AluraPic**

O cenário de teste abrange as principais funcionalidades do AluraPic:

- Cadastro de usuário.
- Login na plataforma.
- Hospedagem de imagens.
- Verificação de elementos na página.

## **Execução do Teste no VS Code**

1. Abra o Terminal no VS Code (`Ctrl + `).
2. Inicie o Cypress:

   ```bash
   npx cypress open
   ```

3. Escolha o navegador desejado.
4. Crie e execute o primeiro teste.

A estrutura do projeto e o teste criado estarão disponíveis na pasta "cypress > e2e".

Aproveite a jornada de testes com Cypress!
