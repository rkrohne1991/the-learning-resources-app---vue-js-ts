// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/');
    cy.contains('.v-toolbar-title__placeholder', 'The Learning Resources App');
  });
});
