describe('Homepage', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Zenika Ecommerce')
  })

  it('should update total when add product to basket', () => {
    cy.visit('/')
    cy.contains("Votre panier s'élève à 0 €").should('exist')
    cy.get('app-product').find('button').eq(0).click();
    cy.contains("Votre panier s'élève à 0 €").should('not.exist')
  })
})
