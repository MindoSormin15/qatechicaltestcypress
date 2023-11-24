describe('Test Cases Scenario', () => {

  it('TC-01 Verify user able to submit product review will all valid input data', () => {
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
    cy.wait(10000);
    cy.get('[data-automation-id="textInput"]').eq(0).type('Mindo');
    cy.get('[data-automation-id="textInput"]').eq(1).type('08123456789');
    cy.get('input[name="r8bc17b753f0048ecb03794ef45037bb7"][value="Affordable"]').check();
    cy.get('span[aria-label="5 Star"][role="radio"]').click();
    cy.get('body').should('exist').then(() => {
      cy.log('Trying to find the icon');
      cy.get('i[data-icon-name="Calendar"].msDatePickerDisabled.icon-301', { timeout: 10000 })
        .should('be.visible')
        .click();
    });
    cy.get('i[data-icon-name="CalculatorMultiply"]').click();
    const desiredDate = '11/30/2023';
    cy.get('[aria-label="Date picker"]')
      .should('exist')
      .clear() 
      .type(desiredDate) 
      .should('have.value', desiredDate); 
    cy.get('[data-automation-id="submitButton"]').click();
 
    cy.wait(5000)

    // optional assertion
    // cy.get('div[data-automation-id="thankYouMessage"]')
    // .should('be.visible')
    // .contains('Your response was submitted.')
  })

  it('TC-02 Verify user unable to submit product review with all empty field', () => {
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
    cy.wait(10000);
    cy.get('[data-automation-id="submitButton"]').click();
 
    cy.wait(5000)

    cy.get('div[data-automation-id="validationError"]')
    .should('be.visible')
    .contains('This question is required.')
  })

  it('TC-03 Verify error message is displayed below the form when user not complete all the field yet', () => {
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
    cy.wait(10000);
    cy.get('[data-automation-id="textInput"]').eq(0).type('Mindo');
    cy.get('[data-automation-id="textInput"]').eq(1).type('08123456789');
    cy.get('input[name="r8bc17b753f0048ecb03794ef45037bb7"][value="Affordable"]').check();
    cy.get('span[aria-label="5 Star"][role="radio"]').click();
 
    cy.wait(5000)

    cy.get('div[data-automation-id="submitError"]')
      .should('be.visible')
      .contains('1 question(s) need to be completed before submitting: Question 5.') 
  })
  
})