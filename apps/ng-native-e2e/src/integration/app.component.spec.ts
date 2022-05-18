describe('ng-native', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary&args=title;rating;flag;'));
  it('should render the component', () => {
    cy.get('storybook-props-mismatch-root').should('exist');
  });
});