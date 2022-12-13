describe('Calculator app', () => {
    it('performs a calculation correctly', () => {
      cy.visit('http://localhost:3000');
  
      // Enter the operands and select an operation
      cy.get('input[placeholder="..."]')
        .first()
        .type(10);
      cy.get('input[placeholder="..."]')
        .last()
        .type(5);
      cy.get('.operations .selected.box').click();
  
      // Submit the form and verify that the correct result is displayed
      cy.get('button[type="submit"]').click();
      cy.get('.answer p').should('contain', '10 + 5 = 15');
    });
});