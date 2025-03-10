describe('template spec', () => {
    it('should pass', () => {
        cy.visit('http://localhost:3001');
        cy.get('btn').click();
        cy.get(':nth-child(1) > .btn').invoke('text').should('match', /\d+/);
        cy.get('[data-top="72"]').click();
            })
          })
