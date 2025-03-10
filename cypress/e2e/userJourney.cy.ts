describe('User Journey', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('fetchQuestions');
  });

  it('should navigate through the quiz and complete it', (done) => {
    // Visit the home page
    cy.visit('/');

    // Verify the home page content
    cy.contains('Welcome to the Tech Quiz!').should('be.visible');
    cy.contains('Start Quiz').should('be.visible');

    // Handle window events
    cy.on('window:before:unload', (e) => {
      expect(e.returnValue).to.be.undefined;
    });

    cy.on('window:unload', (e) => {
      done();
    });

    // Start the quiz
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@fetchQuestions');

    // Verify the first question is displayed
    cy.contains('What is the output of print(2 ** 3)?').should('be.visible');

    // Answer the first question (Assumes a button element for answer selection)
    cy.get('button').contains('8').click();

    // Verify the quiz completion screen is displayed
    cy.contains('Quiz Completed', { timeout: 10000 }).should('be.visible');

  });
});