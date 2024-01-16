describe('Visit main page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200, 
      fixture: 'example',
    }).as('Homepage')
    cy.visit('http://localhost:3000/')
    cy.wait('@Homepage')
  })

  it('should display homepage title and two cards on page load', () => {
    cy.get('h1').contains('URL Shortener')

    cy.get("[data-test='cards']").children().should('have.length', 2)
    cy.get("[data-test='cards']").first().contains('h3','Awesome photo')
    cy.get("[data-test='cards']").first().contains('a','http://localhost:3001/useshorturl/1')
    cy.get("[data-test='cards']").first().contains('p','https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')

    cy.get("[data-test='cards']").last().contains('h3','Idea box notes')
    cy.get("[data-test='cards']").last().contains('a','http://localhost:3001/useshorturl/2')
    cy.get("[data-test='cards']").last().contains('p','https://www.notion.so/Ideabox-tes-60d43b97ebc3427cbe52e2cc2cfd8084')
  })

  it('should be able to view and fill out form and add another card with title, long url, and short url displayed', () => {
    cy.get("[data-test='url-input']").should('be.visible').should('have.attr','placeholder','URL to Shorten...')
    cy.get("[data-test='title-input']").should('be.visible').should('have.attr','placeholder','Title...')

    cy.get("[data-test='cards']").children().should('have.length', 2)
    cy.get("[data-test='url-input']").type('https://docs.google.com/forms/d/1IMNawyyHg5LqctR_sUuDhvAfrfDNeNSG5nBLoWkuFCM/viewform?edit_requested=true').should('have.value','https://docs.google.com/forms/d/1IMNawyyHg5LqctR_sUuDhvAfrfDNeNSG5nBLoWkuFCM/viewform?edit_requested=true')
    cy.get("[data-test='title-input']").type('Final assessment').should('have.value','Final assessment')
    cy.get("[data-test='add-button']").click();  

    cy.get("[data-test='cards']").children().should('have.length', 3)
    cy.get("[data-test='cards']").last().contains('h3','Final assessment')
    // cy.get("[data-test='cards']").last().contains('a','http://localhost:3001/useshorturl/43')
    cy.get("[data-test='cards']").last().contains('p','https://docs.google.com/forms/d/1IMNawyyHg5LqctR_sUuDhvAfrfDNeNSG5nBLoWkuFCM/viewform?edit_requested=true')
  })

  it('should display error message when not all input fields are complete', () => {
    cy.get("[data-test='cards']").children().should('have.length', 2)
    cy.get("[data-test='url-input']").should('have.value','')
    cy.get("[data-test='title-input']").type('Final assessment').should('have.value','Final assessment')
    cy.get("[data-test='add-button']").click();  
    cy.get("[data-test='errorMessage']").contains('h2','All inputs must be filled out.')
    cy.get("[data-test='cards']").children().should('have.length', 2)
  })

  it ('should be able to detele a reservation', () => {
    cy.get("[data-test='cards']").children().last().find("[data-test='delete-button']").click()
    cy.get("[data-test='cards']").children().should('have.length', 1)
    cy.get("[data-test='cards']").last().contains('h3','Awesome photo')
    cy.get("[data-test='cards']").last().contains('a','http://localhost:3001/useshorturl/1')
    cy.get("[data-test='cards']").last().contains('p','https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  })
})